
const product = [
    {name: "Mr Whalen", price: 67000000, img: "images/1WhalenMichael.jpg"},
    {name: "Tung^3", price: 67, img: "images/2TripleT.jpg"},
    {name: "Naruto", price: 15.99, img: "images/Naruto.webp"},
    {name: "Sasuke", price: 15.99, img: "images/Sasuke.gif"},
    {name: "Ichigo", price: 15.99, img: "images/Ichigo.gif"},
    {name: "Orihime", price: 15.99, img: "images/Orihime.gif"},
    {name: "Itadori", price: 15.99, img: "images/Itadori.webp"},
    {name: "Gojo", price: 20.99, img: "images/Gojo.webp"},
    {name: "Sukuna", price: 20.99, img: "images/Sukuna.webp"},
    {name: "Gon", price: 15.99, img: "images/Gon.gif"},
    {name: "Killua", price: 15.99, img: "images/Killua.gif"},
    {name: "Kurapika", price: 15.99, img: "images/Kurapika.webp"},
    {name: "Leorio", price: 15.99, img: "images/Leorio.gif"},
    {name: "Goku", price: 15.99, img: "images/Goku.gif"},
    {name: "Vegeta-ble", price: 15.99, img: "images/Vegeta.gif"},
    {name: "Chi-Chi", price: 15.99, img: "images/Chi-Chi.gif"},
    {name: "Gohan", price: 15.99, img: "images/Gohan.gif"},
    {name: "Pickle-o", price: 15.99, img: "images/Pickle-o.jpg"},
    {name: "Cat", price: 15.99, img: "images/Cat.gif"},
];

let stuff_u_buy = [];
let cart_total = 0;

function find_product(name){
    return product.find((item) => item.name == name);
}

function buying(amount, name){
  const thing = find_product(name);
  if (!thing) return;

  let cartItem = stuff_u_buy.find((item) => item.name === name);
  
  if (cartItem) {
    cartItem.amount += amount; // Adds to existing amount
  } else {
    stuff_u_buy.push({ name: thing.name, price: thing.price, amount: amount });
  }

  cart_total += thing.price * amount;
}

function removing(amount, name, thing){
  let cartItem = stuff_u_buy.find((item) => item.name === name);
  if (!cartItem) return;

    let amountToRemove = Math.min(amount, cartItem.amount);

    cartItem.amount -= amountToRemove;
    cart_total -= cartItem.price * amountToRemove;

  if (cartItem.amount <= 0) {
    stuff_u_buy = stuff_u_buy.filter((item) => item.name !== name);
  }
}
buying(4, "Orihime");
buying(3, "Killua");
removing(10, "Orihime");
removing(10, "Killua");

console.log(stuff_u_buy);
let result = Math.abs(cart_total).toFixed(2); 
console.log(`Carts total price: ${result}`);



function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-item="${item.name}">
        <h2 class="StandardText">${item.name}</h2>
        <img class = "Image" src="${item.img}" alt="" />
        <p class="text1">price: ${item.price}</p>
        <p class="text1 amount-display">amount: ${item.amount || 0}</p>
        <button class="StandardButton">Add to Cart</button>
      </div> `,
  );

}
for (let l = 0; l < product.length; l++)
  inject(product[l])

const buttons = document.querySelectorAll(".StandardButton");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    const card = event.target.closest(".card");
    const itemName = event.target.closest(".card").getAttribute("data-item");

    console.log("Clicked item name:", JSON.stringify(itemName));
    buying(1, itemName);

    const cartItem = stuff_u_buy.find((item) => item.name === itemName);
    const currentAmount = cartItem ? cartItem.amount : 0;
    card.querySelector(".amount-display").textContent = `amount: ${currentAmount}`;

    console.log("Cart: ", stuff_u_buy);
    console.log(`Cart's total price: $${Math.abs(cart_total).toFixed(2)}`);


  })
);

/*document.querySelector("form").addEventListener("submit",function
(event) {
  event.preventDefault();
  let cpn = document.querySelector("#coupon").value;
  console.log(cpn)
});*/

/*function showCard() {
  document.querySelector(".pop").style.display = "flex";
}
showCard();*/