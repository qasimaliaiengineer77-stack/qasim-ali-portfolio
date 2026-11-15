import { initHero3D } from "./hero-3d.js";

export function initHero() {
    const hero = document.querySelector("#hero");
    if (!hero) return;

    hero.innerHTML = `
        <div class="hero-container">

            <div class="hero-content">
                <h1>
                    Building <span>Intelligent</span><br>
                    Digital Experiences.
                </h1>

                <p>
                    I build intelligent AI solutions, Python applications
                    and autonomous AI agents to solve real-world problems.
                </p>

                <div class="hero-actions">
                    <a href="#projects">Explore My Work</a>
                    <a href="#contact">Let's Connect</a>
                </div>

                <div class="hero-tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>Node.js</span>
                </div>
            </div>

            <div class="hero-visual">
                <div class="hero-hud-card">

                    <div class="hero-photo-window">
                        <div id="hero-3d-scene"></div>

                        <div class="hero-scan-texture"></div>

                        <div class="hero-corners">
                            <span class="corner top-left"></span>
                            <span class="corner top-right"></span>
                            <span class="corner bottom-left"></span>
                            <span class="corner bottom-right"></span>
                        </div>
                    </div>

                    <div class="hero-hud-status">
                        <span class="status-indicator"></span>
                        <span class="status-text">STATUS: VERIFIED</span>
                        <span class="status-location">PYTHON DEVELOPER</span>
                    </div>

                </div>
            </div>

        </div>
    `;

    initHero3D();
}
