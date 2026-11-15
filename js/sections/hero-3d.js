import * as THREE from "three";

export function initHero3D() {
    const container = document.querySelector("#hero-3d-scene");
    const card = document.querySelector(".hero-hud-card");
    const visual = document.querySelector(".hero-visual");

    if (!container || container.dataset.initialized) return;
    container.dataset.initialized = "true";

    const photoWindow = container.parentElement;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        40,
        container.clientWidth / container.clientHeight,
        0.1,
        100
    );

    const heightRatio =
        container.clientHeight / photoWindow.clientHeight;

    camera.position.z = 5.2 * heightRatio;

    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "low-power"
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    const photoGroup = new THREE.Group();
    scene.add(photoGroup);

    const loader = new THREE.TextureLoader();

    loader.load(
        "./assets/images/profile.jpeg.jpeg",
        (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.minFilter = THREE.LinearMipmapLinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.anisotropy = Math.min(
                renderer.capabilities.getMaxAnisotropy(),
                4
            );

            texture.repeat.set(1, 0.97);
            texture.offset.set(0, 0.03);

            const photo = new THREE.Mesh(
                new THREE.PlaneGeometry(2.1, 3.15),
                new THREE.MeshBasicMaterial({
                    map: texture,
                    toneMapped: false
                })
            );

            photoGroup.add(photo);

            // Bidirectional scanning beam
            const scanGlow = new THREE.Mesh(
                new THREE.PlaneGeometry(2.08, 0.12),
                new THREE.MeshBasicMaterial({
                    color: 0x00e5ff,
                    transparent: true,
                    opacity: 0.12,
                    depthWrite: false
                })
            );

            scanGlow.position.z = 0.04;
            photoGroup.add(scanGlow);

            const scanLine = new THREE.Mesh(
                new THREE.PlaneGeometry(2.08, 0.012),
                new THREE.MeshBasicMaterial({
                    color: 0x00e5ff,
                    transparent: true,
                    opacity: 0.8,
                    depthWrite: false
                })
            );

            scanLine.position.z = 0.05;
            photoGroup.add(scanLine);

            photoGroup.userData.scanLine = scanLine;
            photoGroup.userData.scanGlow = scanGlow;
        },
        undefined,
        (error) => {
            console.error("Profile image loading failed:", error);
        }
    );

    // More particles spread around and outside the photo frame
    const particleCount = 120;
    const particlePositions = [];

    for (let i = 0; i < particleCount; i++) {
        particlePositions.push(
            (Math.random() - 0.5) * 5.2,
            (Math.random() - 0.5) * 5.8,
            -0.6 - Math.random() * 1.2
        );
    }

    const particleGeometry = new THREE.BufferGeometry();

    particleGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(particlePositions, 3)
    );

    const particles = new THREE.Points(
        particleGeometry,
        new THREE.PointsMaterial({
            color: 0x00e5ff,
            size: 0.025,
            transparent: true,
            opacity: 0.55,
            depthWrite: false
        })
    );

    scene.add(particles);

    // Full synchronized movement: photo and complete HUD card
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    if (visual && card) {
        visual.addEventListener("pointermove", (event) => {
            const rect = visual.getBoundingClientRect();

            targetX = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
            targetY = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
        });

        visual.addEventListener("pointerleave", () => {
            targetX = 0;
            targetY = 0;
        });
    }

    let lastFrame = 0;
    let scanPosition = 1.5;
    let scanDirection = -1;

    function animate(time = 0) {
        requestAnimationFrame(animate);

        if (time - lastFrame < 33) return;

        const delta = Math.min((time - lastFrame) / 1000, 0.05);
        lastFrame = time;

        // Smoothly move the entire card as one object
        if (card) {
            const easing = Math.min(delta * 14, 1);

            currentX += (targetX - currentX) * easing;
            currentY += (targetY - currentY) * easing;

            card.style.transform =
                `translate3d(${currentX * 14}px, ${currentY * 12}px, 0) ` +
                `rotateY(${currentX * 38}deg) rotateX(${-currentY * 38}deg)`;
        }

        // Normal-speed scanning: down, then up
        const scanLine = photoGroup.userData.scanLine;
        const scanGlow = photoGroup.userData.scanGlow;

        if (scanLine && scanGlow) {
            scanPosition += scanDirection * delta * 1.15;

            if (scanPosition <= -1.5) {
                scanPosition = -1.5;
                scanDirection = 1;
            } else if (scanPosition >= 1.5) {
                scanPosition = 1.5;
                scanDirection = -1;
            }

            scanLine.position.y = scanPosition;
            scanGlow.position.y = scanPosition;
        }

        // Gentle flowing particles behind and around the photo
        const positions = particleGeometry.attributes.position;

        for (let i = 0; i < particleCount; i++) {
            let x = positions.getX(i);
            let y = positions.getY(i);

            y += delta * 0.2;
            x += Math.sin(time * 0.0006 + i) * delta * 0.04;

            if (y > 3.2) {
                y = -3.2;
                x = (Math.random() - 0.5) * 5.2;
            }

            positions.setXY(i, x, y);
        }

        positions.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();

    const resizeObserver = new ResizeObserver(() => {
        const width = container.clientWidth;
        const height = container.clientHeight;

        if (!width || !height) return;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    resizeObserver.observe(container);
}


