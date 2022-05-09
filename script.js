
let star = document.querySelectorAll(".star");
let selectedRating;

//RATING SELECTION
star.forEach(starElement => {


    starElement.addEventListener('click', () => {
        star.forEach(e => {
            if (e.classList.contains("selected")) {
                e.classList.remove("selected");
            }
        })
        starElement.classList.add("selected");
        selectedRating = starElement.textContent;
    })
})

//SUBMIT BTN CLICK EVENT
let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", () => {
     
    //Returns if Rating not selected
    if (!selectedRating) {
        return;
    }

    let ratingCard = document.getElementById("ratingCard");
    let finalPage = document.getElementById("finalPage");

    ratingCard.style.display = "none";
    finalPage.style.display = "flex";

    document.querySelector(".rating-final").innerHTML = `You selected ${selectedRating} out of 5`;
})