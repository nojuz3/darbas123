const container = document.querySelector("main")

//1
const element1 = document.createElement("p");
const element2 = document.createElement("p");
const element3 = document.createElement("p");
const element4 = document.createElement("p");
const element5 = document.createElement("p");
//2
element1.textContent = "1";
element2.textContent = "2";
element3.textContent = "3";
element4.textContent = "4";
element5.textContent = "5";


container.append(element1, element2, element3, element4, element5);

//3
element1.setAttribute("class", "klase");
container.setAttribute("id", "main");

const find1 = document.getElementById("main");
find1.style.backgroundColor = "#e7eae6";
find1.style.padding = "10px";

const find2 = document.querySelector(".klase");
find2.style.backgroundColor = "#26e2d2";

const find3 = container.querySelectorAll("p");
find3.forEach((el) => el.style.color = "#ff42b5");

//4

const find4 = document.querySelectorAll("div");
find4.forEach((el) => el.style.background = "#ffff00");
find4.forEach((el) => el.style.width = "80px");
find4.forEach((el) => el.style.height = "30px");
find4.forEach((el) => el.style.border = "1px,solid,black");

//5
const click = document.querySelector("button");
click.setAttribute("class","click");
click.textContent = "wow";


const setdiv = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    find4.forEach((el) => el.style.backgroundColor = "#" + randomColor);

}
  

click.addEventListener('click', () => {
    setdiv();
  });

//6
const random = document.querySelector(".random")


const el1 = random.querySelectorAll("p")

const words = ["this","word","is","very","special","because","it","is","very","long","iamaverylongword"];

const fun = () => {
    var word = words[Math.floor(Math.random() * words.length)];
    return word
}

el1.forEach((el) => el.textContent = fun());

