import "/src/styles.css";

import injectHome from "./home.js";
import injectMenu from "./menu.js";

console.log("I'm Alive!");
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

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