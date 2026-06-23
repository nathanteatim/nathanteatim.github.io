document.addEventListener("DOMContentLoaded", () => {

    // TYPEWRITER
    const heroTitle = document.querySelector(".hero h1");

    if (heroTitle) {

        const text = [
            "Writer.",
            "Electronics Technician.",
            "Systems Builder.",
            "Future Germany Professional."
        ];

        let count = 0;
        let index = 0;

        function type() {

            if (count >= text.length) count = 0;

            let current = text[count];
            heroTitle.innerHTML = current.slice(0, index++);

            if (index > current.length) {
                count++;
                index = 0;
                setTimeout(type, 1000);
            } else {
                setTimeout(type, 100);
            }
        }

        type();
    }

    // BACK TO TOP BUTTON

    const topBtn = document.createElement("button");
    topBtn.id = "topBtn";
    topBtn.innerHTML = "↑";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.onclick = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

});
