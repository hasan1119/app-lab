var monthlyBtn = document.getElementById("monthly");
var yearlyBtn = document.getElementById("yearly");
var priceCard1 = document.getElementById("price-card-1");
var priceCard2 = document.getElementById("price-card-2");


const AllClassLists = []
const classes = priceCard2.classList;
for (let x = 0; x < classes.length; x++) {

    AllClassLists.push(classes[x])

}
var result = AllClassLists.find(checkAge);

function checkAge(AllClassList) {
    return AllClassList == "hide";
}


yearlyBtn.addEventListener("click", function () {
    yesOrNO = monthlyBtn.classList[2];

    if (yesOrNO !== "btn-primary") {
        monthlyBtn.classList.remove("btn-primary")
        yearlyBtn.classList.add("btn-primary")
    } else {
        monthlyBtn.classList.remove("btn-primary")
        yearlyBtn.classList.add("btn-primary")
    }
    if (result == "hide") {

        priceCard2.classList.remove("hide")
        priceCard1.classList.add("hide")
    }
})

monthlyBtn.addEventListener("click", function () {
    yesOrNO = monthlyBtn.classList[2];
    hide = priceCard2.classList[0];



    if (yesOrNO !== "btn-primary") {
        yearlyBtn.classList.remove("btn-primary")
        monthlyBtn.classList.add("btn-primary")
    }
    if (hide !== "hide") {

        priceCard2.classList.add("hide")
        priceCard1.classList.remove("hide")
    }
})

