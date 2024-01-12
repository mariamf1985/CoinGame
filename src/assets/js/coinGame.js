const flipBtn = document.getElementById("flip_btn");
const resetBtn = document.getElementById("reset_btn");
const headImage = document.getElementById("heads");
const tailImage = document.getElementById("tails");
const mainCoin = document.getElementById("main_coin");
const resultCoin = document.getElementById("result_coin")
const headCountElement = document.getElementById("count_heads")
const tailCountElement = document.getElementById("count_tails")

let headCount = 0;
let tailCount = 0;

function updateCounts(){
    headCountElement.textContent = `Heads: ${headCount}`;
    tailCountElement.textContent = `Tails: ${tailCount}`;
}

function flipCoin() {
    headImage.style.display = "none";
    tailImage.style.display = "none";
    mainCoin.style.display = "none";

    requestAnimationFrame(() => {
        const result = Math.round(Math.random()) + 1;
        if (result == 1) {
            headCount += 1;
            resultCoin.textContent = "Heads ⭐";
            requestAnimationFrame(() => {
                headImage.style.display = "block";

            });
        } else {
            tailCount += 1;
            resultCoin.textContent = "Tails 💲";
            requestAnimationFrame(() => {
                tailImage.style.display = "block";
            });
        }
        updateCounts();
    });

}

function resetCount(){
    headCount = 0;
    tailCount = 0;
    resultCoin.textContent = "";
    updateCounts();


    mainCoin.style.display = "block";
    headImage.style.display = "none";
    tailImage.style.display = "none";

}

flipBtn.addEventListener("click", flipCoin);
resetBtn.addEventListener("click", resetCount);