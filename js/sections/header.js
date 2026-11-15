export function initHeader() {
    if (document.querySelector(".site-header")) return;

    const main = document.querySelector("main");
    if (!main) return;

    const header = document.createElement("header");
    header.className = "site-header";

    header.innerHTML = `
        <div class="header-top">
            <a class="header-brand" href="#hero">NEXORA<span>.</span></a>
            <span class="header-tagline">BEYOND THE CODE</span>
        </div>

        <nav class="header-navigation" aria-label="Main navigation">
            <a href="#hero">OVERVIEW</a>
            <a href="#about">PROFILE</a>
            <a href="#skills">TECH EXPERTISE</a>
            <a href="#projects">PORTFOLIO</a>
            <a href="#education">CAREER JOURNEY</a>
            <a href="#contact">CONTACT</a>
        </nav>
    `;

    main.parentNode.insertBefore(header, main);
}
