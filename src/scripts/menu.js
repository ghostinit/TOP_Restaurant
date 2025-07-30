
export default function inject() {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    const header = document.createElement('h2');
    header.innerText = "Skibidy's Menu";
    header.classList.add('content-title');

    content.appendChild(header);
}