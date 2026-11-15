export function initContact() {
    if (document.querySelector("#contact")) return;

    const section = document.createElement("section");
    section.id = "contact";
    section.className = "contact-section";
    section.setAttribute("aria-labelledby", "contact-title");

    section.innerHTML = `
        <div class="contact-container">

            <header class="contact-heading">
                <span class="contact-label">06 / CONTACT</span>
                <h2 id="contact-title">LET'S CONNECT.</h2>
                <p>For professional opportunities, technical collaborations, or project discussions, get in touch.</p>
                <span class="contact-heading-line"></span>
            </header>

            <div class="contact-content">

                <div class="contact-intro">
                    <span class="contact-kicker">PROFESSIONAL INQUIRIES</span>
                    <h3>Have an opportunity<br>or project in mind?</h3>
                    <p>
                        I'm open to connecting with teams, clients and professionals
                        interested in software development and intelligent solutions.
                    </p>
                    <span class="contact-availability">
                        <span></span> OPEN TO PROFESSIONAL CONNECTIONS
                    </span>
                </div>

                <div class="contact-directory">
                    <span class="contact-kicker">DIRECT CONTACT</span>

                    <div class="contact-links">

                        <a class="contact-link" href="https://github.com/qasimaliaiengineer77-stack?tab=repositories"
                           target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1 14 3.3a13.5 13.5 0 0 0-7 0C3.5 1 2.3 1.5 2.3 1.5a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 .8 8.7c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 6 18.1V22"/>
                            </svg>
                            <span><strong>GitHub</strong><small>Projects & repositories</small></span>
                            <span class="contact-arrow">↗</span>
                        </a>

                        <a class="contact-link" href="https://www.linkedin.com/in/qasim-ali-3a1050440/"
                           target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"/>
                                <circle cx="4" cy="4" r="2"/>
                            </svg>
                            <span><strong>LinkedIn</strong><small>Professional networking</small></span>
                            <span class="contact-arrow">↗</span>
                        </a>

                        <a class="contact-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=qa6100538%40gmail.com" target="_blank" rel="noopener noreferrer"
                           aria-label="Send an email">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <rect x="2" y="4" width="20" height="16" rx="2"/>
                                <path d="m22 7-10 7L2 7"/>
                            </svg>
                            <span><strong>Email</strong><small>Career & project inquiries</small></span>
                            <span class="contact-arrow">↗</span>
                        </a>

                        <a class="contact-link" href="https://wa.me/923270638516?text=Hello%20Qasim%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                           target="_blank" rel="noopener noreferrer" aria-label="Start a WhatsApp conversation">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.4A8.5 8.5 0 1 1 21 11.5Z"/>
                                <path d="M8.5 8.5c.5 2.5 2.5 4.5 5 5l1-1 2 1c-.3 1.5-1.5 2-3 1.5-3.5-1-5.5-3-6.5-6.5-.5-1.5 0-2.7 1.5-3l1 2-1 1Z"/>
                            </svg>
                            <span><strong>WhatsApp</strong><small>Direct messaging</small></span>
                            <span class="contact-arrow">↗</span>
                        </a>

                        <a class="contact-link" href="tel:+923374900297"
                           aria-label="Call Qasim directly">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.5 9.9a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.7 2Z"/>
                            </svg>
                            <span><strong>Phone</strong><small>Direct phone contact</small></span>
                            <span class="contact-arrow">↗</span>
                        </a>

                    </div>
                </div>

            </div>

            <footer class="contact-closing">
                <span>PYTHON ENGINEERING</span>
                <span>·</span>
                <span>AI DEVELOPMENT</span>
                <span>·</span>
                <span>PROFESSIONAL COLLABORATION</span>
            </footer>

        </div>
    `;

    const education = document.querySelector("#education");
    const footer = document.querySelector("#footer");

    if (education) {
        education.insertAdjacentElement("afterend", section);
    } else if (footer) {
        footer.insertAdjacentElement("beforebegin", section);
    } else {
        document.querySelector("main")?.appendChild(section);
    }

    console.log("contact section initialized");
}

