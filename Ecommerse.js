


const product = [
    {name: "Mr Whalen", price: 67000000},
    {name: "Tung^3", price: 67},
    {name: "Naruto", price: 15.99},
    {name: "Sasuke", price: 15.99},
    {name: "Ichigo", price: 15.99},
    {name: "Orihime", price: 15.99},
    {name: "Itadori", price: 15.99},
    {name: "Gojo", price: 20.99},
    {name: "Sukuna", price: 20.99},
    {name: "Gon", price: 15.99},
    {name: "Killua", price: 15.99},
    {name: "Kurapika", price: 15.99},
    {name: "Leorio", price: 15.99},
    {name: "Goku", price: 15.99},
    {name: "SS1 Goku", price: 15.99},
    {name: "SS2 Goku", price: 15.99},
    {name: "SS3 Goku", price: 15.99},
    {name: "SS4 Goku", price: 15.99},
    {name: "Vegeta", price: 15.99},
    {name: "SS1 Vegeta-ble", price: 15.99},
    {name: "SS2 Vegeta-ble", price: 15.99},
    {name: "Chi-Chi", price: 15.99},
    {name: "Gohan", price: 15.99},
    {name: "Pickle-o", price: 15.99},
];

let stuff_u_buy = []
let cart_total = 0;

function find_product(name){
    return product.find((item) => item.name == name);
}

function buying(amount, name ,thing){
    let cartItem = stuff_u_buy.find(item => item.name === name);
    //stuff_u_buy.push(`${name}: ${thing.price} ea, ${amount} units - total: ${thing.price * amount}`);
    if (cartItem){
        cartItem
    }
    stuff_u_buy.push({ name: name, price: thing.price, amount: amount });
    cart_total += (thing.price * amount);
}

function removing(amount, name, thing){
    stuff_u_buy = stuff_u_buy.filter(item => item.name !== name);
    cart_total -= (thing.price * amount);
}
buying(4, "Orihime",find_product("Orihime"));
buying(3, "Killua", find_product("Killua"));
removing(4, "Orihime",find_product("Orihime"));
console.log(stuff_u_buy);
let result = cart_total.toFixed(2);
console.log(`Carts total price: ${result}`);



function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );

}
for (let l = 0; 1 <= product.length; l++)
  inject(product[l])

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.closest(".card").getAttribute("data-item"));
  }),
);
