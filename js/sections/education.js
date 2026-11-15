export function initEducation() {
    if (document.querySelector("#education")) return;

    const section = document.createElement("section");
    section.id = "education";
    section.className = "education-section";
    section.setAttribute("aria-labelledby", "education-title");

    section.innerHTML = `
        <div class="education-container">

            <header class="education-heading">
                <span class="education-label">05 / EDUCATION & CREDENTIALS</span>
                <h2 id="education-title">THE JOURNEY OF <span>KNOWLEDGE.</span></h2>
                <p>Building a strong foundation through academic learning and continuous professional development.</p>
                <span class="education-heading-line"></span>
            </header>

            <div class="education-content">

                <div class="education-academic">
                    <div class="education-subheading">
                        <span>01 /</span>
                        <h3>ACADEMIC JOURNEY</h3>
                    </div>

                    <div class="education-timeline">
                        <article class="education-entry">
                            <span class="education-entry-number">01</span>
                            <div>
                                <h4>FA — Information Technology</h4>
                                <p>Second Year <span>·</span> In Progress</p>
                            </div>
                            <span class="education-entry-status">CURRENT</span>
                        </article>

                        <article class="education-entry">
                            <span class="education-entry-number">02</span>
                            <div>
                                <h4>Matriculation</h4>
                                <p>Secondary Education</p>
                            </div>
                            <span class="education-entry-status">COMPLETED</span>
                        </article>
                    </div>
                </div>

                <div class="education-certifications">
                    <div class="education-subheading">
                        <span>02 /</span>
                        <h3>PROFESSIONAL CERTIFICATIONS</h3>
                    </div>

                    <div class="education-certificate-grid">
                        <article class="education-certificate">
                            <button class="education-certificate-trigger"
                                type="button"
                                data-certificate="assets/certificates/python-for-ai.png.jpg"
                                aria-label="View Python for AI certificate">
                                <img src="assets/certificates/python-for-ai.png.jpg"
                                    alt="Python for AI certificate" loading="lazy">
                                <span class="education-view-label">VIEW CERTIFICATE ↗</span>
                            </button>
                            <h4>PYTHON FOR AI</h4>
                            <p>Professional Certification</p>
                        </article>

                        <article class="education-certificate">
                            <button class="education-certificate-trigger"
                                type="button"
                                data-certificate="assets/certificates/office-management.png.jpg"
                                aria-label="View Office Management certificate">
                                <img src="assets/certificates/office-management.png.jpg"
                                    alt="Office Management certificate" loading="lazy">
                                <span class="education-view-label">VIEW CERTIFICATE ↗</span>
                            </button>
                            <h4>OFFICE MANAGEMENT</h4>
                            <p>Professional Certification</p>
                        </article>
                    </div>
                </div>

            </div>

            <footer class="education-closing">
                <h3>GROWTH THROUGH <span>KNOWLEDGE.</span></h3>
                <p>LEARNING <span>·</span> ENGINEERING <span>·</span> INNOVATION</p>
            </footer>
        </div>

        <div class="education-viewer" role="dialog"
            aria-modal="true" aria-label="Certificate viewer" hidden>
            <button class="education-viewer-close" type="button"
                aria-label="Close certificate viewer">×</button>
            <button class="education-viewer-zoom" type="button"
                aria-label="Zoom certificate">ZOOM +</button>
            <div class="education-viewer-stage">
                <img class="education-viewer-image" src="" alt="Certificate preview">
            </div>
        </div>
    `;

    const projects = document.querySelector("#projects");
    const contact = document.querySelector("#contact");

    if (projects) {
        projects.insertAdjacentElement("afterend", section);
    } else if (contact) {
        contact.insertAdjacentElement("beforebegin", section);
    } else {
        document.querySelector("main")?.appendChild(section);
    }

    const viewer = section.querySelector(".education-viewer");
    const viewerImage = section.querySelector(".education-viewer-image");
    const closeButton = section.querySelector(".education-viewer-close");
    const zoomButton = section.querySelector(".education-viewer-zoom");
    let previousFocus = null;
    let previousOverflow = "";
    let zoomed = false;

    function closeViewer() {
        viewer.hidden = true;
        document.body.style.overflow = previousOverflow;
        viewerImage.src = "";
        viewerImage.classList.remove("is-zoomed");
        zoomed = false;
        zoomButton.textContent = "ZOOM +";
        previousFocus?.focus();
    }

    section.querySelectorAll(".education-certificate-trigger").forEach(button => {
        button.addEventListener("click", () => {
            previousFocus = button;
            previousOverflow = document.body.style.overflow;
            viewerImage.src = button.dataset.certificate;
            viewer.hidden = false;
            document.body.style.overflow = "hidden";
            closeButton.focus();
        });
    });

    closeButton.addEventListener("click", closeViewer);

    viewer.addEventListener("click", event => {
        if (event.target === viewer || event.target.classList.contains("education-viewer-stage")) {
            closeViewer();
        }
    });

    zoomButton.addEventListener("click", () => {
        zoomed = !zoomed;
        viewerImage.classList.toggle("is-zoomed", zoomed);
        zoomButton.textContent = zoomed ? "ZOOM −" : "ZOOM +";
    });

    document.addEventListener("keydown", event => {
        if (!viewer.hidden && event.key === "Escape") closeViewer();
    });

    console.log("education section initialized");
}
