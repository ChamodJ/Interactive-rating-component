//let ratingBtn = document.getElementById("rating-btn")
let ratingEl = document.getElementById("rating-div")
let submitBtn =  document.getElementById("submit-btn-el")
let thankCard =  document.getElementById("thank-card")
let rateEl =  document.getElementById("rate-el")
let ratings = document.getElementById("rating-btn").querySelectorAll("button")



ratings.forEach(function(i){
    i.addEventListener("click", function(e){
        const rate = i.innerHTML
        rateEl.innerText = "You selected " + rate + " out of 5"
        console.log(rate)
        console.log(i)
    })
})


submitBtn.addEventListener('click', function(){
    ratingEl.classList.remove("card")
    ratingEl.classList.add("hide")

    thankCard.classList.remove("hide")
})