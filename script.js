const foodItems = document.querySelectorAll("#foodItems");
const orderButton = document.querySelector("#orderButton");
const foodImage = document.querySelector("#foodImage");
const orderId = document.querySelector("#orderId");

async function viewImage() {
  if (document.querySelector("#burger").checked) {
    foodImage.src = "images/burger.jpg";
    foodImage.style.display = "block";
    orderId.textContent = generateOrderId();
    orderId.style.display = "block";
  } else if (document.querySelector("#fries").checked) {
    foodImage.src = "images/fries.jpg";
    foodImage.style.display = "block";
    orderId.textContent = generateOrderId();
    orderId.style.display = "block";
  } else if (document.querySelector("#drink").checked) {
    foodImage.src = "images/drinks.jpg";
    foodImage.style.display = "block";
    orderId.textContent = generateOrderId();
    orderId.style.display = "block";
  } else {
    foodImage.style.display = "none";
    orderId.style.display = "none";
    orderId.textContent = "";
  }
}

function generateOrderId() {
  const randomNumber = Math.floor(Math.random() * 1000000);
  return "ORDER-" + randomNumber;
}

orderButton.addEventListener("click", viewImage);
