
import sectionData from '/src/menu_sections.csv';
import menuData from '/src/menu_items.csv';

class MenuItem {
    #section = "";
    #name = "";
    #description = "";
    #price = "";

    constructor(section, name, desc, price) {
        this.#section = section;
        this.#name = name;
        this.#description = desc;
        this.#price = price;
    }

    printSelf() {
        console.log(`${this.#name}: ${this.#description} for $${this.#price} in section: ${this.#section}`);
    }

    injectSelf(content) {
        let container = document.createElement('div');
        container.classList.add('menu-item');

        let header = document.createElement('div');
        header.classList.add('menu-item-header');

        let itemName = document.createElement('p');
        itemName.classList.add('item-name');
        itemName.innerText = this.#name;
        header.appendChild(itemName);

        let spacer = document.createElement('h4');
        spacer.innerText = ' - ';
        header.appendChild(spacer);

        let price = document.createElement('h4');
        price.classList.add('item-price');
        price.innerText = `$${this.#price}`;
        header.appendChild(price);

        container.appendChild(header);

        let description = document.createElement('p');
        description.classList.add('menu-item-desc');
        description.innerText = this.#description;
        container.appendChild(description);

        content.appendChild(container);
    }

    isSection(section) {
        return section === this.#section;
    }
}

function getSections() {
    let sections = [];
    sectionData.forEach(element => {
        sections.push(element[0]);
    });
    return sections;
}

function getMenuItems() {
    let items = [];
    for (let i = 1; i < menuData.length; i++) {
        const item = new MenuItem(menuData[i][0], menuData[i][1], menuData[i][2], menuData[i][3]);
        items.push(item);
    }
    return items;
}

export default function inject() {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    const header = document.createElement('h2');
    header.innerText = "Skibidy's Menu";
    header.classList.add('content-title');

    content.appendChild(header);

    const sections = getSections();
    const items = getMenuItems();

    sections.forEach((section) => {
        const sectionElement = document.createElement('h3');
        sectionElement.innerText = section;
        sectionElement.classList.add('section-header');
        content.appendChild(sectionElement);

        const sectionItems = items.filter((item) => {
            return item.isSection(section);
        });

        console.log(sectionItems);

        if (sectionItems.length === 0) {
            return
        }

        sectionItems.forEach((item) => {
            item.injectSelf(content);
        })
    })
}