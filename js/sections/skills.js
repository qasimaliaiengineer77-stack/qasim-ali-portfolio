
export function initSkills() {
    const about = document.querySelector("#about");

    if (!about || document.querySelector("#skills")) return;

    const skills = document.createElement("section");
    skills.id = "skills";
    skills.className = "skills-section";

    skills.innerHTML = `
        <div class="skills-container">

            <div class="skills-top">
                <span>03 / TECHNICAL EXPERTISE</span>
                <span>PYTHON & AI ENGINEERING</span>
            </div>

            <div class="skills-stage">
                <div class="skills-3d" aria-hidden="true"></div>

                <div class="skills-title">
                    <h2>
                        <span>PYTHON</span>
                        <span>ENGINEERING</span>
                    </h2>
                    <p>INTELLIGENT DIGITAL SOLUTIONS</p>
                </div>
            </div>

            <div class="skills-grid">

                <article class="skill-item">
                    <span class="skill-number">01</span>
                    <h3>PROGRAMMING</h3>
                    <p>Python <span>/</span> JavaScript</p>
                </article>

                <article class="skill-item">
                    <span class="skill-number">02</span>
                    <h3>AI ENGINEERING</h3>
                    <p>AI Agents <span>/</span> Automation</p>
                </article>

                <article class="skill-item">
                    <span class="skill-number">03</span>
                    <h3>BACKEND DEVELOPMENT</h3>
                    <p>Node.js <span>/</span> APIs <span>/</span> Databases <span>/</span> SQL</p>
                </article>

                <article class="skill-item">
                    <span class="skill-number">04</span>
                    <h3>FRONTEND DEVELOPMENT</h3>
                    <p>HTML5 <span>/</span> CSS3 <span>/</span> JavaScript</p>
                </article>

                <article class="skill-item">
                    <span class="skill-number">05</span>
                    <h3>UI / UX DESIGN</h3>
                    <p>Interface <span>/</span> User Experience</p>
                </article>

                <article class="skill-item">
                    <span class="skill-number">06</span>
                    <h3>PROBLEM SOLVING</h3>
                    <p>Logic <span>/</span> Analysis <span>/</span> Debugging</p>
                </article>

            </div>
        </div>
    `;

    about.insertAdjacentElement("afterend", skills);


    const loadSkills3D = () => {
        import("./skills-3d.js")
            .then(({ initSkills3D }) => initSkills3D(skills))
            .catch((error) => console.warn("Skills 3D loading failed:", error));
    };

    if ("IntersectionObserver" in window) {
        const skillsLoadObserver = new IntersectionObserver((entries, observer) => {
            if (!entries.some((entry) => entry.isIntersecting)) return;
            observer.disconnect();
            loadSkills3D();
        }, { rootMargin: "600px 0px" });

        skillsLoadObserver.observe(skills);
    } else {
        loadSkills3D();
    }
}
