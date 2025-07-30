import "/src/styles.css";

import injectHome from "./home.js";
import injectMenu from "./menu.js";
import injectAbout from "./about.js";

console.log("I'm Alive!");

const UI = (
    function () {
        const init = () => {
            const homeButton = document.querySelector("#btn-home")
            const menuButton = document.querySelector("#btn-menu");
            const aboutButton = document.querySelector("#btn-about");

            homeButton.addEventListener('click', () => {
                injectHome();
            });

            menuButton.addEventListener('click', () => {
                injectMenu();
            });

            aboutButton.addEventListener('click', () => {
                injectAbout();
            });

            injectHome();
        }

        return { init };
    }

)();

UI.init();