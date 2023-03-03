let addToCartBtns = document.querySelectorAll(".btn-addToCart");
let productPrice = document.querySelector(".price");
let productName = document.querySelector(".product-name");
let productNameInCart = document.querySelector(".product-name-cart");
let productQuantityInCart = document.querySelector(".product-quantity-cart");
let productPriceInCart = document.querySelector(".product-price-cart");

addToCartBtns.forEach(function (item) {
  item.onclick = function () {
    console.log("clicked");

    productNameInCart.innerHTML += productName.textContent;
    productQuantityInCart.innerHTML = 1;
    productPriceInCart.innerHTML += +productPrice.textContent;

    if (
      productQuantityInCart.innerHTML != " " &&
      productPriceInCart.innerHTML != " "
    ) {
      let x = 2;

      item.onclick = function () {
        productQuantityInCart.innerHTML = x++;
        productPriceInCart.innerHTML =
          +productPrice.textContent * productQuantityInCart.innerHTML;
      };
    }
  };
});

let addToCartBtns2 = document.querySelectorAll(".btn-addToCart2");
let productPrice2 = document.querySelector(".price2");
let productName2 = document.querySelector(".product-name2");
let productNameInCart2 = document.querySelector(".product-name-cart2");
let productQuantityInCart2 = document.querySelector(".product-quantity-cart2");
let productPriceInCart2 = document.querySelector(".product-price-cart2");

addToCartBtns2.forEach(function (item) {
  item.onclick = function () {
    console.log("clicked");

    productNameInCart2.innerHTML += productName2.textContent;
    productQuantityInCart2.innerHTML = 1;
    productPriceInCart2.innerHTML += +productPrice2.textContent;

    if (
      productQuantityInCart2.innerHTML != " " &&
      productPriceInCart2.innerHTML != " "
    ) {
      let x = 2;

      item.onclick = function () {
        productQuantityInCart2.innerHTML = x++;
        productPriceInCart2.innerHTML =
          +productPrice2.textContent * productQuantityInCart2.innerHTML;
      };
    }
  };
});

let addToCartBtns3 = document.querySelectorAll(".btn-addToCart3");
let productPrice3 = document.querySelector(".price3");
let productName3 = document.querySelector(".product-name3");
let productNameInCart3 = document.querySelector(".product-name-cart3");
let productQuantityInCart3 = document.querySelector(".product-quantity-cart3");
let productPriceInCart3 = document.querySelector(".product-price-cart3");
let totalLastPrice = document.querySelector(".last-price");

addToCartBtns3.forEach(function (item) {
  item.onclick = function () {
    console.log("clicked");

    productNameInCart3.innerHTML += productName3.textContent;
    productQuantityInCart3.innerHTML = 1;

    if (
      productQuantityInCart3.innerHTML != " " &&
      productPriceInCart3.innerHTML != " "
    ) {
      let x = 2;

      item.onclick = function () {
        productQuantityInCart3.innerHTML = x++;
        productPriceInCart3.innerHTML =
          +productPrice3.textContent * productQuantityInCart3.innerHTML;
      };
    }
  };
});

let addToCartBtns4 = document.querySelectorAll(".btn-addToCart4");
let productPrice4 = document.querySelector(".price4");
let productName4 = document.querySelector(".product-name4");
let productNameInCart4 = document.querySelector(".product-name-cart4");
let productQuantityInCart4 = document.querySelector(".product-quantity-cart4");
let productPriceInCart4 = document.querySelector(".product-price-cart4");

addToCartBtns4.forEach(function (item) {
  item.onclick = function () {
    console.log("clicked");

    productNameInCart4.innerHTML += productName4.textContent;
    productQuantityInCart4.innerHTML = 1;
    productPriceInCart4.innerHTML += +productPrice4.textContent;

    if (
      productQuantityInCart4.innerHTML != " " &&
      productPriceInCart4.innerHTML != " "
    ) {
      let x = 2;

      item.onclick = function () {
        productQuantityInCart4.innerHTML = x++;
        productPriceInCart4.innerHTML =
          +productPrice4.textContent * productQuantityInCart4.innerHTML;
      };
    }
  };
});

let addToCartBtns5 = document.querySelectorAll(".btn-addToCart5");
let productPrice5 = document.querySelector(".price5");
let productName5 = document.querySelector(".product-name5");
let productNameInCart5 = document.querySelector(".product-name-cart5");
let productQuantityInCart5 = document.querySelector(".product-quantity-cart5");
let productPriceInCart5 = document.querySelector(".product-price-cart5");

addToCartBtns5.forEach(function (item) {
  item.onclick = function () {
    console.log("clicked");

    productNameInCart5.innerHTML += productName5.textContent;
    productQuantityInCart5.innerHTML = 1;
    productPriceInCart5.innerHTML += +productPrice5.textContent;

    if (
      productQuantityInCart5.innerHTML != " " &&
      productPriceInCart5.innerHTML != " "
    ) {
      let x = 2;

      item.onclick = function () {
        productQuantityInCart5.innerHTML = x++;
        productPriceInCart5.innerHTML =
          +productPrice5.textContent * productQuantityInCart5.innerHTML;
      };
    }
  };
});

let addToCartBtns6 = document.querySelectorAll(".btn-addToCart6");
let productPrice6 = document.querySelector(".price6");
let productName6 = document.querySelector(".product-name6");
let productNameInCart6 = document.querySelector(".product-name-cart6");
let productQuantityInCart6 = document.querySelector(".product-quantity-cart6");
let productPriceInCart6 = document.querySelector(".product-price-cart6");

addToCartBtns6.forEach(function (item) {
  item.onclick = function () {
    console.log("clicked");

    productNameInCart6.innerHTML += productName6.textContent;
    productQuantityInCart6.innerHTML = 1;
    productPriceInCart6.innerHTML += +productPrice6.textContent;

    if (
      productQuantityInCart6.innerHTML != " " &&
      productPriceInCart6.innerHTML != " "
    ) {
      let x = 2;

      item.onclick = function () {
        productQuantityInCart6.innerHTML = x++;
        productPriceInCart6.innerHTML =
          +productPrice6.textContent * productQuantityInCart6.innerHTML;
      };
    }
  };
});

let addToCartBtns7 = document.querySelectorAll(".btn-addToCart7");
let productPrice7 = document.querySelector(".price7");
let productName7 = document.querySelector(".product-name7");
let productNameInCart7 = document.querySelector(".product-name-cart7");
let productQuantityInCart7 = document.querySelector(".product-quantity-cart7");
let productPriceInCart7 = document.querySelector(".product-price-cart7");

addToCartBtns7.forEach(function (item) {
  item.onclick = function () {
    console.log("clicked");

    productNameInCart7.innerHTML += productName7.textContent;
    productQuantityInCart7.innerHTML = 1;
    productPriceInCart7.innerHTML += +productPrice7.textContent;

    if (
      productQuantityInCart7.innerHTML != " " &&
      productPriceInCart7.innerHTML != " "
    ) {
      let x = 2;

      item.onclick = function () {
        productQuantityInCart7.innerHTML = x++;
        productPriceInCart7.innerHTML =
          +productPrice7.textContent * productQuantityInCart7.innerHTML;
      };
    }
  };
});

let addToCartBtns8 = document.querySelectorAll(".btn-addToCart8");
let productPrice8 = document.querySelector(".price8");
let productName8 = document.querySelector(".product-name8");
let productNameInCart8 = document.querySelector(".product-name-cart8");
let productQuantityInCart8 = document.querySelector(".product-quantity-cart8");
let productPriceInCart8 = document.querySelector(".product-price-cart8");

addToCartBtns8.forEach(function (item) {
  item.onclick = function () {
    console.log("clicked");

    productNameInCart8.innerHTML += productName8.textContent;
    productQuantityInCart8.innerHTML = 1;
    productPriceInCart8.innerHTML += +productPrice8.textContent;

    if (
      productQuantityInCart8.innerHTML != " " &&
      productPriceInCart8.innerHTML != " "
    ) {
      let x = 2;

      item.onclick = function () {
        productQuantityInCart8.innerHTML = x++;
        productPriceInCart8.innerHTML =
          +productPrice8.textContent * productQuantityInCart8.innerHTML;
      };
    }
  };
});

let addToCartBtns9 = document.querySelectorAll(".btn-addToCart9");
let productPrice9 = document.querySelector(".price9");
let productName9 = document.querySelector(".product-name9");
let productNameInCart9 = document.querySelector(".product-name-cart9");
let productQuantityInCart9 = document.querySelector(".product-quantity-cart9");
let productPriceInCart9 = document.querySelector(".product-price-cart9");

addToCartBtns9.forEach(function (item) {
  item.onclick = function () {
    console.log("clicked");

    productNameInCart9.innerHTML += productName9.textContent;
    productQuantityInCart9.innerHTML = 1;
    productPriceInCart9.innerHTML += +productPrice9.textContent;

    if (
      productQuantityInCart9.innerHTML != " " &&
      productPriceInCart9.innerHTML != " "
    ) {
      let x = 2;

      item.onclick = function () {
        productQuantityInCart9.innerHTML = x++;
        productPriceInCart9.innerHTML =
          +productPrice9.textContent * productQuantityInCart9.innerHTML;
      };
    }
  };
});



let addToCartBtns10 = document.querySelectorAll(".btn-addToCart10");
let productPrice10 = document.querySelector(".price10");
let productName10 = document.querySelector(".product-name10");
let productNameInCart10 = document.querySelector(".product-name-cart10");
let productQuantityInCart10 = document.querySelector(".product-quantity-cart10");
let productPriceInCart10 = document.querySelector(".product-price-cart10");

addToCartBtns10.forEach(function (item) {
  item.onclick = function () {
    console.log("clicked");

    productNameInCart10.innerHTML += productName10.textContent;
    productQuantityInCart10.innerHTML = 1;
    productPriceInCart10.innerHTML += +productPrice10.textContent;

    if (
      productQuantityInCart10.innerHTML != " " &&
      productPriceInCart10.innerHTML != " "
    ) {
      let x = 2;

      item.onclick = function () {
        productQuantityInCart10.innerHTML = x++;
        productPriceInCart10.innerHTML =
          +productPrice10.textContent * productQuantityInCart10.innerHTML;
      };
    }
  };
});

let btnOnClickPrice= document.querySelector('.btnTotalPrice');
let theTotalPrice = document.querySelector(".display-price")

btnOnClickPrice.addEventListener ('click' , function (){
  theTotalPrice.innerHTML = +(productPriceInCart.textContent) + +(productPriceInCart2.textContent) + +(productPriceInCart3.textContent) + +(productPriceInCart4.textContent) + +(productPriceInCart5.textContent) + +(productPriceInCart6.textContent) + +(productPriceInCart7.textContent) + +(productPriceInCart8.textContent) + +(productPriceInCart9.textContent) + +(productPriceInCart10.textContent) 
})