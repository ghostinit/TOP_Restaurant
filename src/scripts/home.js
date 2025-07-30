import imageSammy from "/src/images/sammy1.jpg";
import imageSteak from "/src/images/steak1.jpg";



export default function inject() {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    const header = document.createElement('h2');
    header.innerText = 'Delicious - Comforting - Home';
    header.classList.add('content-title');

    const p1 = document.createElement('p');
    p1.innerHTML = "For 32 years, Skibidy's Grease Trap has provided customers with delicious and comforting food at a fair price.";

    const img1 = document.createElement('img');
    img1.src = imageSammy;

    const p2 = document.createElement('p');
    p2.innerHTML = "We pride ourselves on our welcoming early to mid 20th century atmosphere. Extreme care has been taked to ensure that everything from our decor, to our uniforms to the music will take you back to a simplier time.";

    const img2 = document.createElement('img');
    img2.src = imageSteak;

    const p3 = document.createElement('p');
    p3.innerHTML = "So whether you came to eat, to dance, to enjoy a signature malt or a simple cup of coffee with good coversation, Skibidy's will make you feel right at home and full of comfort!";

    content.appendChild(header);
    content.appendChild(p1);
    content.appendChild(img1);
    content.appendChild(p2);
    content.appendChild(img2);


}