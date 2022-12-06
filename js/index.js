import home from "./home.js";
import sobre from "./sobre.js";
import contato from "./contato.js";


const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML="";
        switch (window.location.hash) {
            case "":
                main.appendChild(home());
                break;
            case "#sobre":
                main.appendChild(sobre());
                break;
            case "#contato":
                main.appendChild(contato());
                break;
            default:
                main.appendChild(home());
        }

    });
}

window.addEventListener("load", () => {

    main.appendChild(home());
    init();
})

