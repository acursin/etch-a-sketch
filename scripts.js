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
            if (opacity === true && event.currentTarget.style.opacity < 1) {
                event.currentTarget.style.opacity = +event.currentTarget.style.opacity + 0.1;
            } else {
                event.currentTarget.style.opacity = 1;
            }
            event.currentTarget.style.backgroundColor = "black";
        });
        container.appendChild(box);
    }
}

const newSketchpadBtn = document.querySelector(".sketchpad-btn");
newSketchpadBtn.addEventListener("click", () => {
    let validSize = false;
    let newSize = 0;
    while (!validSize) {
        newSize = prompt("Enter size from 1 to 100:", "");
        if (newSize >= 1 && newSize <= 100 || newSize === null) validSize = true;
    }

    if (newSize === null) return;

    createSketchpad(newSize);
    return;
});

const opacityBtn = document.querySelector(".opacity-btn");
opacityBtn.addEventListener("click", (event) => {
    if (opacity === false) {
        opacity = true;
        event.currentTarget.textContent = "Opacity: ON";
        return;
    }

    opacity = false;
    event.currentTarget.textContent = "Opacity: OFF";
    return;
});

const STARTING_SIZE = 16
let opacity = false;
let rainbow = false;
createSketchpad(STARTING_SIZE);