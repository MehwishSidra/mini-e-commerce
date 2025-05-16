function changeImage(imgElement) {
    document.getElementById('main-img').src = imgElement.src;
    document.querySelectorAll('.thumb').forEach(thumb => thumb.classList.remove('active'));
    imgElement.classList.add('active');
  }

  function increaseQty() {
    const qty = document.getElementById('qty');
    qty.value = parseInt(qty.value) + 1;
  }

  function decreaseQty() {
    const qty = document.getElementById('qty');
    if (parseInt(qty.value) > 0) {
      qty.value = parseInt(qty.value) - 1;
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    
    const cartIcon = document.getElementById('cart');
    const sidebar = document.querySelector('.sidebar');
    const cartItemsContainer = document.querySelector('.cartitem');
    const totalElement = document.getElementById('total');
    const quantityElement = document.querySelector('.quantity');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    
    let cart = [];
    let isCartVisible = false;

    
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        isCartVisible = !isCartVisible;
        sidebar.style.display = isCartVisible ? 'block' : 'none';
    });

    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productContainer = this.closest('.container');
            const productName = productContainer.querySelector('h1').innerText;
            const productPrice = parseFloat(productContainer.querySelector('.price').firstChild.textContent.trim().replace('$', ''));
            const productImage = productContainer.querySelector('#main-img').src;
            const productQuantity = parseInt(productContainer.querySelector('#qty').value);
            
            if(productQuantity > 0) {
                addToCart(productName, productPrice, productImage, productQuantity);
            } else {
                alert('Please select quantity first');
            }
        });
    });

    
    function addToCart(name, price, image, quantity) {
        const existingItem = cart.find(item => item.name === name);
        
        if(existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                name,
                price,
                image,
                quantity
            });
        }
        
        updateCartUI();
    }

    
    function updateCartUI() {
        
        if(cart.length === 0) {
            cartItemsContainer.innerHTML = 'Your cart is empty';
        } else {
            cartItemsContainer.innerHTML = '';
            
            cart.forEach((item, index) => {
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                cartItemElement.innerHTML = `
                <div style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);gap: 30px;">
                   
                        <p> $${item.price.toFixed(2)} 
                    <br>   
                <img src="${item.image}" alt="${item.name}" width="50">
                <br>
                    <div>
                        
                       
                        <div style="width: 100%;justify-content: space-evenly;display: flex;align-items: center;"  >
                        <div style="width: 80px;gap: 15px;margin: 20px 0; padding: 5px 12px;font-size: 18px;box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);"><button onclick="decreaseQty()">-</button>   ${item.quantity}  <button onclick="increaseQty()">+</button> </div>
                        </div>
                        <br>
                         Subtotal $${(item.price * item.quantity).toFixed(2)}</p>
                        
                        <button class="remove-item" data-index"${index}">Remove</button>
                    </div>
                   </div> 
                `;
                cartItemsContainer.appendChild(cartItemElement);
            });
            
            
            const removeButtons = document.querySelectorAll('.remove-item');
            removeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const itemIndex = parseInt(this.getAttribute('data-index'));
                    removeFromCart(itemIndex);
                });
            });
        }
        
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
        
        totalElement.textContent = `$ ${total.toFixed(2)}`;
        quantityElement.textContent = itemCount;
    }

    
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartUI();
    }
});


function increaseQty() {
    const input = event.target.closest('.quantity').querySelector('input');
    input.value = parseInt(input.value) + 1;
}

function decreaseQty() {
    const input = event.target.closest('.quantity').querySelector('input');
    if(parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}


function changeImage(element) {
    const mainImg = element.closest('.left').querySelector('#main-img');
    const thumbs = element.closest('.thumbnails').querySelectorAll('.thumb');
    
    
    mainImg.src = element.src;
    
   
    thumbs.forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}
  // document.addEventListener("DOMContentLoaded", function () {
  //   const addToCartBtn = document.querySelector(".add-to-cart");
  //   const qtyInput = document.getElementById("qty");
  
  //   addToCartBtn.addEventListener("click", function () {
  //     const qty = parseInt(qtyInput.value);
  
  //     if (qty > 0) {
  //       alert(`🛒 ${qty} item(s) added to cart.`);
  //       // Optional: reset quantity to 0 after adding
  //       // qtyInput.value = 0;
  //     } else {
  //       alert("❗ Please increase quantity before adding to cart.");
  //     }
  //   });
  // });
 
  // const cartBtn = document.getElementById("cart");
  // const container = document.querySelector(".container");

  // cartBtn.addEventListener("click", function (e) {
  //   e.preventDefault();

  //   // Toggle the display style
  //   if (container.style.display === "none" || container.style.display === "") {
  //     container.style.display = "block"; // or "flex", depending on your layout
  //   } else {
  //     container.style.display = "none";
  //   }
  // });



//   const products = [
//     {
//         id: 0,
//         image: 'img/Capture.PNG',
//         title: ''
//         price: 120,
//     },
//     {
//         id: 1,
//         image: 'img/shoe.PNG',
//         title: 'men'
//         price: 60,
//     },
//     {
//         id: 2,
//         image: 'img/shoe.PNG',
//         title: 'men'
//         price: 60,
//     },
//     {
//       id: 3,
//       image: 'img/shoe.PNG',
//       title: 'men'
//       price: 60,
//   }
//   ];
  
//   const catagories =[...new set(products.map((item)=>
// { return item}))]
// let i=0;
// document.getElementById('root').innerHTML.catagories.map((item)=>
// {
//   var {image,title,price} = item;
  
//     return(
//            <div class='box'>
//            <div class='image-box'>
//          <img class='image' src=${image} ></img>
//       </div>
//       <div class='bottom'>
//         <p>${title}</p>
//         <h2>${price}.00</h2>+
//         "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"

//       </div>
//            )
    
  
// })
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