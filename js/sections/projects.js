export function initProjects() {
    const skills = document.querySelector("#skills");

    if (!skills || document.querySelector("#projects")) return;

    const projects = document.createElement("section");
    projects.id = "projects";
    projects.className = "projects-section";

    projects.innerHTML = `
        <div class="projects-container">

            <header class="projects-heading">
                <div class="projects-topline">
                    <span>04 / SELECTED WORK</span>
                    <span>PYTHON · AI · SOFTWARE ENGINEERING</span>
                </div>

                <h2>FEATURED <span>PROJECTS</span></h2>

                <p>
                    A selection of intelligent systems and software
                    solutions built with engineering, automation and AI.
                </p>

                <div class="projects-heading-line"></div>
            </header>

            <div class="projects-list">

                <article class="project-row" data-project-depth>
                    <div class="project-visual" aria-hidden="true">
                        <span class="project-orbit orbit-one"></span>
                        <span class="project-orbit orbit-two"></span>
                        <span class="project-core"></span>
                    </div>

                    <div class="project-number">01</div>

                    <div class="project-content">
                        <div class="project-meta">
                            <span>AI SECURITY / CODE QUALITY</span>
                            <span class="project-status public">PUBLIC REPOSITORY</span>
                        </div>

                        <h3>AI Code Guardian</h3>

                        <p>
                            A portable Python-based security and code-quality
                            scanner that audits project folders, ZIP archives
                            and GitHub repositories using automated security
                            tools and context-aware AI analysis.
                        </p>

                        <div class="project-tech">
                            PYTHON <span>/</span> FASTAPI <span>/</span>
                            GROQ AI <span>/</span> BANDIT <span>/</span>
                            PYLINT <span>/</span> GITLEAKS <span>/</span>
                            OSV-SCANNER
                        </div>

                        <a class="project-link"
                           href="https://github.com/qasimaliaiengineer77-stack/AI-Code-Guardian"
                           target="_blank"
                           rel="noopener noreferrer">
                            VIEW GITHUB REPOSITORY <span>↗</span>
                        </a>
                    </div>
                </article>

                <article class="project-row" data-project-depth>
                    <div class="project-visual" aria-hidden="true">
                        <span class="project-orbit orbit-one"></span>
                        <span class="project-orbit orbit-two"></span>
                        <span class="project-core"></span>
                    </div>

                    <div class="project-number">02</div>

                    <div class="project-content">
                        <div class="project-meta">
                            <span>MULTI-AGENT AI DEVELOPMENT</span>
                            <span class="project-status public">PUBLIC REPOSITORY</span>
                        </div>

                        <h3>AI DevForge</h3>

                        <p>
                            An AI-powered multi-agent development system
                            where specialized agents collaborate to plan,
                            build, test and improve complete web applications
                            inside a controlled local development environment.
                        </p>

                        <div class="project-tech">
                            PYTHON <span>/</span> FASTAPI <span>/</span>
                            LANGGRAPH <span>/</span> MULTI-LLM <span>/</span>
                            DOCKER <span>/</span> CHROMADB
                        </div>

                        <a class="project-link"
                           href="https://github.com/qasimaliaiengineer77-stack/ai-devforge"
                           target="_blank"
                           rel="noopener noreferrer">
                            VIEW GITHUB REPOSITORY <span>↗</span>
                        </a>
                    </div>
                </article>

                <article class="project-row" data-project-depth>
                    <div class="project-visual" aria-hidden="true">
                        <span class="project-orbit orbit-one"></span>
                        <span class="project-orbit orbit-two"></span>
                        <span class="project-core"></span>
                    </div>

                    <div class="project-number">03</div>

                    <div class="project-content">
                        <div class="project-meta">
                            <span>EDUCATION / AI TUTORING</span>
                            <span class="project-status private">PRIVATE PROJECT</span>
                        </div>

                        <h3>AI Teacher</h3>

                        <p>
                            An AI-powered Telegram learning assistant for
                            children, supporting text and voice-based questions,
                            step-by-step subject guidance, homework assistance
                            and personalized learning progress.
                        </p>

                        <div class="project-tech">
                            PYTHON <span>/</span> TELEGRAM BOT API <span>/</span>
                            GROQ AI <span>/</span> SQLITE <span>/</span>
                            WHISPER <span>/</span> VISION AI
                        </div>

                        <span class="project-private-note">
                            PRIVATE REPOSITORY
                        </span>
                    </div>
                </article>

                <article class="project-row" data-project-depth>
                    <div class="project-visual" aria-hidden="true">
                        <span class="project-orbit orbit-one"></span>
                        <span class="project-orbit orbit-two"></span>
                        <span class="project-core"></span>
                    </div>

                    <div class="project-number">04</div>

                    <div class="project-content">
                        <div class="project-meta">
                            <span>BUSINESS / AI ASSISTANCE</span>
                            <span class="project-status private">PRIVATE PROJECT</span>
                        </div>

                        <h3>Business Assistant Dashboard</h3>

                        <p>
                            A business-support assistant designed to respond
                            to business-related questions, guide users through
                            common business tasks and provide assistance with
                            payment-related queries and workflows.
                        </p>

                        <div class="project-tech">
                            AI ASSISTANCE <span>/</span>
                            BUSINESS QUERIES <span>/</span>
                            CUSTOMER SUPPORT <span>/</span>
                            PAYMENT-RELATED ASSISTANCE
                        </div>

                        <span class="project-private-note">
                            PRIVATE REPOSITORY
                        </span>
                    </div>
                </article>

                <article class="project-row" data-project-depth>
                    <div class="project-visual" aria-hidden="true">
                        <span class="project-orbit orbit-one"></span>
                        <span class="project-orbit orbit-two"></span>
                        <span class="project-core"></span>
                    </div>

                    <div class="project-number">05</div>

                    <div class="project-content">
                        <div class="project-meta">
                            <span>WHATSAPP / BUSINESS AUTOMATION</span>
                            <span class="project-status private">PRIVATE PROJECT</span>
                        </div>

                        <h3>WhatsApp Business Chatbot</h3>

                        <p>
                            An automated business communication assistant
                            designed to receive incoming WhatsApp messages,
                            answer business-related questions and support
                            everyday customer communication and operations.
                        </p>

                        <div class="project-tech">
                            WHATSAPP AUTOMATION <span>/</span>
                            AI-POWERED RESPONSES <span>/</span>
                            CUSTOMER COMMUNICATION <span>/</span>
                            BUSINESS SUPPORT
                        </div>

                        <span class="project-private-note">
                            PRIVATE REPOSITORY
                        </span>
                    </div>
                </article>

            </div>

            <div class="projects-closing"><h3>BUILDING INTELLIGENCE.</h3><p>FROM IDEAS TO INTELLIGENT DIGITAL SOLUTIONS.</p></div>

        </div>
    `;

    skills.insertAdjacentElement("afterend", projects);

    const rows = projects.querySelectorAll("[data-project-depth]");
    const motionPreference = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (!motionPreference.matches) {
        rows.forEach((row) => {
            row.addEventListener("pointermove", (event) => {
                if (event.pointerType !== "mouse") return;

                const rect = row.getBoundingClientRect();

                const x = (event.clientX - rect.left) / rect.width;
                const y = (event.clientY - rect.top) / rect.height;

                const rotateY = (x - 0.5) * 2.4;
                const rotateX = (0.5 - y) * 1.8;

                row.style.setProperty("--rotate-x", `${rotateX}deg`);
                row.style.setProperty("--rotate-y", `${rotateY}deg`);
            });

            row.addEventListener("pointerleave", () => {
                row.style.setProperty("--rotate-x", "0deg");
                row.style.setProperty("--rotate-y", "0deg");
            });
        });
    }
}





