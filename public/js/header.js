window.addEventListener("load", function () {
    let serviciosLi = document.querySelector(".servicios");
    let dropdown = document.querySelectorAll(".d-servicios");
    let listaNav = document.querySelector(".lista-nav");
    let dropMenu = document.querySelector(".menu-drop");
    let logoHeader = document.querySelector(".logo-header");
    let menuUp = document.querySelectorAll(".drop-down-m");
    let footer = document.querySelector(".hide-container")
    let fixedHeader = document.querySelector(".cont-header-2");

    if (window.innerWidth >= "620") {
        logoHeader.src = "/img/TERPO-BLANCO.svg";
        dropdown[0].classList.add("hide-mobile");
        dropdown[1].classList.remove("hide-desktop");
    } else if (window.innerWidth < "620") {
        dropdown[0].classList.remove("hide-mobile");
        dropdown[1].classList.add("hide-desktop");
    }

    let lastScroll = 0;

    window.addEventListener("scroll", function () {
        const currentScroll = window.pageYOffset;
        let navPosition = fixedHeader.getBoundingClientRect();
        console.log(currentScroll);

        /*if(navPosition.top > 0) {
            fixedHeader.classList.add("fixed");
        } else if (navPosition.top == 0 && currentScroll < 50) {
            fixedHeader.classList.remove("fixed");
        };*/

        if (window.innerWidth < "620" && currentScroll > lastScroll && !listaNav.classList.contains("folded")) {
            listaNav.classList.remove("unfolded");
            listaNav.classList.add("folded");
            logoHeader.classList.add("after");
            menuUp[1].classList.add("drop-down");
        } else if (window.innerWidth < "620" && currentScroll < lastScroll && listaNav.classList.contains("folded")) {
            listaNav.classList.remove("folded");
            listaNav.classList.add("unfolded");
            logoHeader.classList.remove("after");
            menuUp[1].classList.remove("drop-down");
        };

        /*if(currentScroll > lastScroll && !footer.classList.contains("folded")) {
            footer.classList.remove("unfolded");
            footer.classList.add("folded");
        } else if(currentScroll < lastScroll && footer.classList.contains("folded")) {
            footer.classList.remove("folded");
            footer.classList.add("unfolded");
        };*/

        lastScroll = currentScroll;
    });

    serviciosLi.addEventListener("click", function () {
        if (window.innerWidth < "620") {
            dropdown[0].classList.toggle("folded");
            dropdown[0].classList.toggle("unfolded");
        } else if (window.innerWidth >= "620") {
            dropdown[1].classList.toggle("folded");
            dropdown[1].classList.toggle("unfolded");
            serviciosLi.classList.toggle("add-border");
        }
        serviciosLi.classList.toggle("toggle-servicios");
        menuUp[0].classList.toggle("drop-down-s");
    });

    dropMenu.addEventListener("click", function () {
        listaNav.classList.toggle("folded");
        listaNav.classList.toggle("unfolded");
        logoHeader.classList.toggle("after");
        menuUp[1].classList.toggle("drop-down");
    });
});