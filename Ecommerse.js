


const product = {
    Mr_Whalen: { price: 67000000, type: Priceless}
};

stuff_u_buy = []

function buying(amount, thing){
    stuff_u_buy.push (thing);
}

console.log(1, Mr_Whalen);

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
//reminder to add class to button
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.closest(".card").getAttribute("data-item"));
    //go find item in array
    //items[data-item]
  }),
);
