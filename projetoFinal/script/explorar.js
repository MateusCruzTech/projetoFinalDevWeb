
document.addEventListener("DOMContentLoaded", () => {
    const parametros = new URLSearchParams(window.location.search);
    let categoriaBuscada = parametros.get("categoria");

    if (categoriaBuscada) {

        categoriaBuscada = categoriaBuscada.toLowerCase().trim();

        const todosOsCards = document.querySelectorAll(".lugares-card");
        let encontrouAlgum = false;

        todosOsCards.forEach(card => {
            let categoriaDoCard = card.getAttribute("data-categoria");

            if (categoriaDoCard) {
                categoriaDoCard = categoriaDoCard.toLowerCase().trim();

                if (categoriaDoCard === categoriaBuscada) {
                    card.classList.add("card-destacado");
                    card.style.display = "flex";
                    encontrouAlgum = true;
                } else {

                    card.style.display = "none";
                }
            }
        });


        if (encontrouAlgum) {
            setTimeout(() => {
                document.querySelector('.lugaresContainer').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    }
});
