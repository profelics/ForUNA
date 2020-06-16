/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/

class EasyHTTP {
    // Make an HTTP GET Request 
    async get(url) {
      const response = await fetch(url);
      const resData = await response.json();
      return resData;
    }
  
    // Make an HTTP POST Request
    async post(url, data) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const resData = await response.json();
      return resData;
     
    }
  
     // Make an HTTP PUT Request
     async put(url, data) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      const resData = await response.json();
      return resData;
    }
  
    // Make an HTTP DELETE Request
    async delete(url) {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });
  
      const resData = await 'Resource Deleted...';
      return resData;
    }
  
   }

   const http = new EasyHTTP();

class UI {
    constructor() {
        this.todayProducts = document.querySelector('#today-products');
        this.popularProducts = document.querySelector('#popular-products');
    }

    showTodayProducts(products) {
        let output = "";

        products.forEach((product) => {
            output += `
                <div class="product">
                    <img src="${product.img}" alt="product image" class="product__img">
                    <div class="product__texts">
                        <h5 class="product__name">${product.name}</h5>
                        <p class="product__detail">${product.detail}</p>
                        <span class="product__price-text">Price</span>
                        <p class="product__price">#${product.price}
                            <span class="product__price--per"> per ${product.per}</span>
                            <svg class="product__price--arrow">
                                <use xlink:href="img/sprite.svg#icon-arrow-right"></use>
                            </svg>
                        </p>
                    </div>
                </div>
            `;
        })

        this.todayProducts.innerHTML = output;
    }

    showPopularProducts(products) {
        let output = "";

        products.forEach((product) => {
            output += `
                <div class="product">
                    <img src="${product.img}" alt="product image" class="product__img">
                    <div class="product__texts">
                        <h5 class="product__name">${product.name}</h5>
                        <p class="product__detail">${product.detail}</p>
                        <span class="product__price-text">Price</span>
                        <p class="product__price">#${product.price}
                            <span class="product__price--per"> per ${product.per}</span>
                            <svg class="product__price--arrow">
                                <use xlink:href="img/sprite.svg#icon-arrow-right"></use>
                            </svg>
                        </p>
                    </div>
                </div>
            `;
        })

        this.popularProducts.innerHTML = output;
    }
}

const ui = new UI();

//get products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
    http.get('http://localhost:3000/today-products')
        .then(data => ui.showTodayProducts(data))
        .catch(err => console.log(err))

    http.get('http://localhost:3000/popular-products')
        .then(data => ui.showPopularProducts(data))
        .then(err => console.log(err))
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*
 * SIGN-IN STATE ACTIVE
*/
var logInBtn = document.querySelector('#sign-in');
logInBtn.addEventListener('click', function () {
  var cart = document.querySelector('.user-nav');
  var signIn = document.querySelector('.header__user');
  signIn.style.display = "none";
  cart.style.display = "flex";
});
