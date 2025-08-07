import "/src/styles.css";

import injectHome from "./home.js";
import injectMenu from "./menu.js";

console.log("I'm Alive!");

const UI = (
    function () {
        const init = () => {
            const homeButton = document.querySelector("#btn-home")
            const menuButton = document.querySelector("#btn-menu");

            homeButton.addEventListener('click', () => {
                injectHome();
            });

            menuButton.addEventListener('click', () => {
                injectMenu();
            });

            injectHome();
        }

        return { init };
    }

)();

UI.init();