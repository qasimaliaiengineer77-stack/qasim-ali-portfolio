/* GLOBAL CSS */
import "../css/style.css";

/* HEADER CSS */
import "../css/sections/header.css";

/* SECTION CSS */
import "../css/sections/hero.css";
import "../css/sections/about.css";
import "../css/sections/skills.css";
import "../css/sections/projects.css";
import "../css/sections/education.css";
import "../css/sections/contact.css";
import "../css/sections/footer.css";

/* JAVASCRIPT */
import { initHeader } from "./sections/header.js";
import { initHero } from "./sections/hero.js";
import { initAbout } from "./sections/about.js";
import { initSkills } from "./sections/skills.js";
import { initProjects } from "./sections/projects.js";
import { initEducation } from "./sections/education.js";
import { initContact } from "./sections/contact.js";
import { initFooter } from "./sections/footer.js";

/* INITIALIZE */
initHeader();
initHero();
initAbout();
initSkills();
initProjects();
initEducation();
initContact();
initFooter();


