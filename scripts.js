function createSketchpad(size) {
    const container = document.querySelector(".container");
    const fullSize = size * size
    const boxSize = 500 / size

    for (let i = 0; i < fullSize; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.cssText = `width: ${boxSize}px; height: ${boxSize}px;`;
        container.appendChild(box);
    }
}

createSketchpad(16);