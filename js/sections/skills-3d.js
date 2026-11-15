import * as THREE from "three";

export function initSkills3D(skills) {
    const stage = skills.querySelector(".skills-3d");

    let renderer;

    try {
        renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: false,
            powerPreference: "low-power"
        });
    } catch (error) {
        console.warn("Skills 3D unavailable:", error);
        return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.setClearColor(0x000000, 0);
    stage.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = 16;

    scene.add(new THREE.AmbientLight(0x8bdfff, 1.5));

    const cyanLight = new THREE.PointLight(0x00e5ff, 20, 18);
    cyanLight.position.set(-4, 2, 4);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x087cff, 15, 18);
    blueLight.position.set(4, -2, 4);
    scene.add(blueLight);

    function addAtmosphere(group) {
        const canvas = document.createElement("canvas");
        canvas.width = 128;
        canvas.height = 128;

        const ctx = canvas.getContext("2d");
        const gradient = ctx.createRadialGradient(64, 64, 3, 64, 64, 64);

        gradient.addColorStop(0, "rgba(0, 225, 255, 0.62)");
        gradient.addColorStop(0.35, "rgba(0, 140, 255, 0.34)");
        gradient.addColorStop(1, "rgba(0, 100, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 128, 128);

        const glowTexture = new THREE.CanvasTexture(canvas);
        const glow = new THREE.Sprite(
            new THREE.SpriteMaterial({
                map: glowTexture,
                transparent: true,
                opacity: 0.95,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            })
        );

        glow.position.z = -0.8;
        glow.scale.set(6.8, 6.8, 1);
        group.add(glow);

        const starPositions = [];

        for (let i = 0; i < 56; i++) {
            const angle = i * 2.399;
            const radius = 2.1 + (i % 7) * 0.22;

            starPositions.push(
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                -0.35
            );
        }

        const starGeometry = new THREE.BufferGeometry();
        starGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(starPositions, 3)
        );

        const starMaterial = new THREE.PointsMaterial({
            color: 0x9af7ff,
            size: 0.025,
            transparent: true,
            opacity: 0.72,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });

        group.add(new THREE.Points(starGeometry, starMaterial));

        return starMaterial;
    }

    const globe = new THREE.Group();
    const globeStars = addAtmosphere(globe);
    globe.position.set(-11, 0, 0);
    scene.add(globe);

    const globeGeometry = new THREE.SphereGeometry(1.35, 24, 18);
    const globeMesh = new THREE.Mesh(
        globeGeometry,
        new THREE.MeshBasicMaterial({
            color: 0x00cce8,
            wireframe: true,
            transparent: true,
            opacity: 0.48
        })
    );
    globe.add(globeMesh);

    const globeCore = new THREE.Mesh(
        new THREE.SphereGeometry(1.29, 20, 16),
        new THREE.MeshPhongMaterial({
            color: 0x06202c,
            transparent: true,
            opacity: 0.35,
            shininess: 90
        })
    );
    globe.add(globeCore);

    const orbitMaterial = new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.58
    });

    const orbitOne = new THREE.Mesh(
        new THREE.TorusGeometry(1.75, 0.012, 4, 80),
        orbitMaterial
    );
    orbitOne.rotation.set(0.8, 0.3, 0.2);
    globe.add(orbitOne);

    const orbitTwo = new THREE.Mesh(
        new THREE.TorusGeometry(1.85, 0.009, 4, 80),
        new THREE.MeshBasicMaterial({
            color: 0x168cff,
            transparent: true,
            opacity: 0.7
        })
    );
    orbitTwo.rotation.set(1.3, 0.9, 0.7);
    globe.add(orbitTwo);

    const scanBeam = new THREE.Mesh(
        new THREE.PlaneGeometry(2.8, 0.035),
        new THREE.MeshBasicMaterial({
            color: 0x55f5ff,
            transparent: true,
            opacity: 0.9,
            side: THREE.DoubleSide
        })
    );
    scanBeam.position.z = 1.38;
    globe.add(scanBeam);

    const machine = new THREE.Group();
    const machineStars = addAtmosphere(machine);
    machine.position.set(11, 0, 0);
    scene.add(machine);

    const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.8, 1),
        new THREE.MeshPhongMaterial({
            color: 0x087e9e,
            emissive: 0x003d55,
            shininess: 110,
            flatShading: true
        })
    );
    machine.add(core);

    const coreGlow = new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 16, 12),
        new THREE.MeshBasicMaterial({
            color: 0x49f4ff,
            transparent: true,
            opacity: 0.75
        })
    );
    machine.add(coreGlow);

    const machineRingOne = new THREE.Mesh(
        new THREE.TorusGeometry(1.35, 0.045, 6, 64),
        new THREE.MeshPhongMaterial({
            color: 0x00cce8,
            emissive: 0x003d55,
            shininess: 100
        })
    );
    machineRingOne.rotation.set(0.8, 0.3, 0);
    machine.add(machineRingOne);

    const machineRingTwo = new THREE.Mesh(
        new THREE.TorusGeometry(1.55, 0.025, 5, 64),
        new THREE.MeshBasicMaterial({
            color: 0x168cff,
            transparent: true,
            opacity: 0.585
        })
    );
    machineRingTwo.rotation.set(1.3, 0.2, 0.8);
    machine.add(machineRingTwo);

    const circuitMaterial = new THREE.LineBasicMaterial({
        color: 0x00dfff,
        transparent: true,
        opacity: 0.58
    });

    for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;

        const start = new THREE.Vector3(
            Math.cos(angle) * 0.85,
            Math.sin(angle) * 0.85,
            0
        );

        const end = new THREE.Vector3(
            Math.cos(angle) * 1.9,
            Math.sin(angle) * 1.9,
            0
        );

        const middle = new THREE.Vector3(
            Math.cos(angle) * 1.45,
            Math.sin(angle) * 1.45,
            0.12
        );

        const geometry = new THREE.BufferGeometry().setFromPoints([
            start, middle, end
        ]);

        machine.add(new THREE.Line(geometry, circuitMaterial));

        const node = new THREE.Mesh(
            new THREE.SphereGeometry(0.065, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0x55f5ff })
        );

        node.position.copy(end);
        machine.add(node);
    }

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    function resizeScene() {
        const width = stage.clientWidth;
        const height = stage.clientHeight;

        if (!width || !height) return;

        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.position.z = width < 600 ? 16 : 13;
        camera.updateProjectionMatrix();

        const mobile = width < 600;

        globe.position.x = mobile ? -5 : -11;
        machine.position.x = mobile ? 5 : 11;

        const scale = mobile ? 0.42 : 0.68;
        globe.scale.setScalar(scale);
        machine.scale.setScalar(scale);
    }

    const observer = new ResizeObserver(resizeScene);
    observer.observe(stage);
    resizeScene();

    let frame = 0;
    let lastFrame = 0;

    let animationFrameId = null;
    let isVisible = false;

    function animate(time) {
        if (!isVisible) {
            animationFrameId = null;
            return;
        }

        animationFrameId = requestAnimationFrame(animate);

        if (time - lastFrame < 33) return;
        lastFrame = time;

        if (!reducedMotion) {
            frame += 0.035;
            globeStars.opacity = 0.55 + Math.sin(frame * 2.8) * 0.3;
            machineStars.opacity = 0.55 + Math.sin(frame * 3.2) * 0.3;

            globe.rotation.y += 0.008;
            globe.rotation.x = Math.sin(frame * 0.3) * 0.08;

            orbitOne.rotation.z += 0.015;
            orbitTwo.rotation.y -= 0.012;

            scanBeam.position.y = Math.sin(frame * 3.8) * 1.15;

            machine.rotation.y += 0.012;
            machineRingOne.rotation.z += 0.018;
            machineRingTwo.rotation.x -= 0.014;

            core.rotation.y += 0.008;
            core.rotation.x += 0.005;

            coreGlow.material.opacity = 0.5 + Math.sin(frame * 2) * 0.2;
        }

        renderer.render(scene, camera);
    }

    const visibilityObserver = new IntersectionObserver((entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);

        if (visible && !isVisible) {
            isVisible = true;
            if (animationFrameId === null) {
                animationFrameId = requestAnimationFrame(animate);
            }
        } else if (!visible && isVisible) {
            isVisible = false;
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        }
    }, { rootMargin: '100px 0px' });

    visibilityObserver.observe(skills);
}
