export function initAbout() {
    const hero = document.querySelector("#hero");

    if (!hero || document.querySelector("#about")) return;

    const about = document.createElement("section");
    about.id = "about";
    about.className = "about-section";

    about.innerHTML = `
        <div class="about-container">

            <div class="about-top">
                <span class="about-number">02 / ABOUT ME</span>
                <span class="about-category">PYTHON & AI ENGINEERING</span>
            </div>

            <div class="about-content">

                <div class="about-heading">
                    <h2>ABOUT <span>ME.</span></h2>
                    <div class="about-heading-line"></div>
                    <span class="about-subtitle">BEHIND THE CODE</span>
                </div>

                <div class="about-description">
                    <h3>
                        Engineering Ideas Into
                        <span>Intelligent Experiences.</span>
                    </h3>

                    <p>
                        I am a Python Developer and AI Software Engineer
                        focused on building intelligent, practical and
                        scalable digital solutions.
                    </p>

                    <p>
                        My work revolves around developing Python
                        applications, designing AI-powered agents,
                        creating automation workflows and building
                        modern web experiences.
                    </p>

                    <p>
                        I believe great software is more than just code.
                        It combines thoughtful problem-solving, efficient
                        engineering and meaningful user experiences.
                    </p>
                </div>

            </div>

            <div class="about-visual" aria-hidden="true">
                <div class="about-visual-label">
                    <span>ENGINEERING IN MOTION</span>
                    <span class="about-visual-status">SYSTEM ACTIVE</span>
                </div>

                <div class="about-wave">
                    ${Array.from({ length: 35 }, (_, i) =>
                        `<span style="--bar:${i}"></span>`
                    ).join("")}
                </div>

                <div class="about-visual-footer">
                    LOGIC
                    <span>→</span>
                    INTELLIGENCE
                    <span>→</span>
                    AUTOMATION
                    <span>→</span>
                    INNOVATION
                </div>
            </div>

        </div>
    `;

    hero.insertAdjacentElement("afterend", about);
}
