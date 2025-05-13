const cart = document.getElementById("cart");
    const cartArea = document.querySelector(".cartArea");
    const cartClose = document.querySelector(".closed");
    const input = document.querySelector(".input");
    const buttons = document.querySelectorAll(".btn-cat");
    const products = document.querySelector(".container");
    const cartItems = document.querySelector(".cart-items");

    let productData = [
      { title: "Men T-shirt", price: 20, category: "men's clothing", image: "https://m.media-amazon.com/images/I/710o0VupScL._AC_SX522_.jpg"  },
      { title: "Women Dress", price: 30, category: "women's clothing", image: "https://m.media-amazon.com/images/I/51f-UbxmNvL._AC_UL320_.jpg" },
      { title: "Necklace", price: 50, category: "jewelery", image: "https://m.media-amazon.com/images/I/71wONFW5v8L._AC_UL320_.jpg" },
      { title: "electronics", price: 40, category: "electronics", image: "https://m.media-amazon.com/images/I/71sfGvhRPCL._AC_UY218_.jpg" }
    ];
    let currentCategory = "All";

    function displayProducts() {
      let query = input.value.toLowerCase();
      products.innerHTML = "";
      let filtered = productData.filter(p => {
        let matchCategory = currentCategory === "All" || p.category === currentCategory;
        let matchSearch = p.title.toLowerCase().includes(query);
        return matchCategory && matchSearch;
      });

      filtered.forEach(p => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${p.image}" width="150">
          <h4>${p.title}</h4>
          <p>${p.price}$</p>
          <button class="add-cart" style="background-color: #04aa6d;">Add to Cart</button>
        `;
        card.querySelector(".add-cart").addEventListener("click", () => {
          let li = document.createElement("li");
          li.textContent = `${p.title} - $${p.price}`;
          cartItems.appendChild(li);
        });
        products.appendChild(card);
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        currentCategory = btn.innerText;
        displayProducts();
      });
    });
    
    input.addEventListener("input", displayProducts);

    cart.onclick = () => cartArea.classList.add("active");
    cartClose.onclick = () => cartArea.classList.remove("active");

    displayProducts();
   
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