let ratingBtn = document.getElementById("rating-btn")
let ratingEl = document.getElementById("rating-div")
let submitBtn =  document.getElementById("submit-btn-el")
let thankCard =  document.getElementById("thank-card")
let rateEl =  document.getElementById("rate-el")
let ratings = document.querySelectorAll(".btn")

ratings.forEach(function(rate){
    rate.addEventListener('click', function(){
        rateEl.innerText = "You selected " + rate.innerText + " out of 5"
    })
})

submitBtn.addEventListener('click', function(){
    ratingEl.classList.remove("card")
    ratingEl.classList.add("hide")

    thankCard.classList.remove("hide")
})