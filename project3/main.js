document.querySelectorAll(".elem").forEach(function (val) {
    const img = val.querySelector('img');

    val.addEventListener("mouseenter", function () {
        console.log("Mouse entered", val);
        img.style.opacity = 1;
    });

    val.addEventListener("mouseleave", function () {
        console.log("Mouse left", val);
        img.style.opacity = 0;
    });

    val.addEventListener("mousemove", function (dets) {
        const rect = val.getBoundingClientRect();
        const x = dets.clientX - rect.left;
        const y = dets.clientY - rect.top;

        img.style.left = x + "px";
        img.style.top = y + "px";
    });
});
