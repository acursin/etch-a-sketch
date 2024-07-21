function createSketchpad(size) {
    const container = document.querySelector(".container");
    container.replaceChildren();
    const fullSize = size * size
    const boxSize = 500 / size

    for (let i = 0; i < fullSize; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.cssText = `width: ${boxSize}px; height: ${boxSize}px;`;
        box.addEventListener("mouseenter", (event) => {
            event.currentTarget.classList.add("filled");
        });
        container.appendChild(box);
    }
}

const STARTING_SIZE = 16
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let validSize = false;
    let newSize = 0;
    while (!validSize) {
        newSize = prompt("Enter size from 1 to 100:", "");
        if (newSize >= 1 && newSize <= 100) validSize = true;
    }
    createSketchpad(newSize);
});

createSketchpad(STARTING_SIZE);