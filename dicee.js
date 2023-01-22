function getRandomInt() {
    return Math.floor(Math.random() * 6) + 1;
  }

var random_num_1 = getRandomInt()
var random_num_2 = getRandomInt()

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + String(random_num_1) + ".png")
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + String(random_num_2) + ".png")

if (random_num_1 > random_num_2){
    document.querySelector("h1").textContent = "fuck"
}
else if (random_num_1 < random_num_2){
    document.querySelector("h1").textContent = "shit"
}
else{
    document.querySelector("h1").textContent = "fuck + shit"
}
