const foodItems = document.querySelectorAll("#foodItems");
const orderButton = document.querySelector("#orderButton");
const foodImage = document.querySelector("#foodImage");
const orderId = document.querySelector("#orderId");

function viewImage() {
  if (document.querySelector("#burger").checked) {
    foodImage.src = "burger.jpg";
    foodImage.style.display = "block";
    orderId.textContent = generateOrderId();
    orderId.style.display = "block";
  }
  if (document.querySelector("#fries").checked) {
    foodImage.src = "fries.jpg";
    foodImage.style.display = "block";
    orderId.textContent = generateOrderId();
    orderId.style.display = "block";
  }
  if (document.querySelector("#drink").checked) {
    foodImage.src = "drinks.jpg";
    foodImage.style.display = "block";
    orderId.textContent = generateOrderId();
    orderId.style.display = "block";
  }
}

function generateOrderId() {
  const randomNumber = Math.floor(Math.random() * 1000000);
  return "ORDER-" + randomNumber;
}

orderButton.addEventListener("click", viewImage);
