var reviews = 694.2;

setInterval(() => {
    reviews += Math.random() * 0.01;
    if (reviews < 1000) {
        document.getElementById("reviews").innerText =
            Math.round(reviews * 1000) / 1000 + " Quadrillion";
    } else {
        document.getElementById("reviews").innerText =
            Math.round(reviews * 10) / 1000 + " Septillion";
    }
}, 100);
