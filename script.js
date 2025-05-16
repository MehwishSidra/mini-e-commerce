const cart = document.getElementById("cart");
    const cartArea = document.querySelector(".cartArea");
    const cartClose = document.querySelector(".closed");
    const input = document.querySelector(".input");
    const buttons = document.querySelectorAll(".btn-cat");
    const products = document.querySelector(".container");
    const cartItems = document.querySelector(".cart-items");

    
   
    function showForm(type) {
      if (type === 'signup') {
        document.getElementById('signup').style.display = 'block';
        document.getElementById('login').style.display = 'none';
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('signupBtn').style.display = 'none';
      } else {
        document.getElementById('login').style.display = 'block';
        document.getElementById('signup').style.display = 'none';
        document.getElementById('signupBtn').style.display = 'none';
        document.getElementById('loginBtn').style.display = 'none';
      }
    }
    function toggleMenu() {
        const menu = document.getElementById('menu');
        if (menu.style.display === 'block') {
          menu.style.display = 'none';
        } else {
          menu.style.display = 'block';
        }
      }
   
// const cartBtn = document.getElementById("cart");
// const container = document.querySelector(".container-cart"); // updated class name

// cartBtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   // Toggle the display style
//   if (container.style.display === "none" || container.style.display === "") {
//     container.style.display = "block"; // or "flex", if using flex layout
//   } else {
//     container.style.display = "none";
//   }
// });

// function changeImage(imgElement) {
//   document.getElementById('main-img').src = imgElement.src;
//   document.querySelectorAll('.thumb').forEach(thumb => thumb.classList.remove('active'));
//   imgElement.classList.add('active');
// }

// function increaseQty() {
//   const qty = document.getElementById('qty');
//   qty.value = parseInt(qty.value) + 1;
// }

// function decreaseQty() {
//   const qty = document.getElementById('qty');
//   if (parseInt(qty.value) > 0) {
//     qty.value = parseInt(qty.value) - 1;
//   }
// }

