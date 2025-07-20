// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("order-form").onsubmit = function(event) {
//         event.preventDefault(); // Prevent the default form submission
//         alert("Order successful");
//         // You can add more logic here to handle the form data if needed
//     };
// });


document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("order-form");
  if (orderForm) {
    orderForm.onsubmit = function (event) {
      event.preventDefault();

      const orderData = {
        vendor: document.getElementById("vendor").value,
        service: document.getElementById("service").value,
        quantity: document.getElementById("quantity").value,
        address: document.getElementById("address").value,
        pickupDate: document.getElementById("pickup-date").value,
        orderTime: new Date().toLocaleString()
      };

      localStorage.setItem("laundryOrder", JSON.stringify(orderData));

      // Redirect
      window.location.href = "pay.html";
    };
  }
});
