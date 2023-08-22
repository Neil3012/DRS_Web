let value = 1;

const increment = () => {
    const minusIcon = document.getElementById("minus_icon");
    if (value == 1) minusIcon.style.opacity = 1;
    ++value;

    const units = document.getElementById("Units");
    units.style.translate = `0px -${1 + (value - 1) * 56}px`;

    const price = document.getElementById("price-img");
    price.src = `./images/${value}.png`;
};

const decrement = () => {
    const minusIcon = document.getElementById("minus_icon");
    const units = document.getElementById("Units");
    if (value > 1) {
        --value;
        units.style.translate = `0px -${1 + (value - 1) * 56}px`;

        const price = document.getElementById("price-img");
        price.src = `./images/${value}.png`;
        if (value == 1) {
            minusIcon.style.opacity = 0;
        }
    }
};
