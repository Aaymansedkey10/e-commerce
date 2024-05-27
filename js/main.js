const api = "./ApiFolder/products.json";
// select content

let navBar = document.querySelector(".Categories");
let searchInput = document.querySelector("#search");
let cartList = document.querySelector("#cart-list");
let bestItems = document.querySelector(".best-items");
let contentTabOne = document.querySelector(".content-one");
let contentTabTwo = document.querySelector(".content-two");
let contentTabThree = document.querySelector(".content-three");
let contentTabFour = document.querySelector(".content-four");
let contentTabFive = document.querySelector(".content-five");
let saleContent = document.querySelector(".sale-content");
let blogContent = document.querySelector(".blog-content");

// select items to event
let btnSearch = document.querySelector(".btn-search");
let cartIcon = document.querySelector(".cart");
let bestSell = document.querySelector(".best-sell");
let womanCollection = document.querySelector(".woman");
let kidsCollection = document.querySelector(".kids");
let accCollection = document.querySelector(".accessories");
let essenCollection = document.querySelector(".essential");

// Search 
// btnSearch.addEventListener("click" , async ()=>{
//     let response = await fetch (api);
//     let data = await response.json();
//     data.forEach(search => {
//         if (searchInput.value =="") {
//             console.log("Please, Enter Your product ");
//         } else if(search.title.includes(searchInput.value)) {
//             console.log(search);
//         }
//     });    
// })


// drop down selling
bestSell.addEventListener("mouseenter", async () => {
  const response = await fetch(api);
  const data = await response.json();
  let best = data.filter((element) => element.category === "menu");
  best.forEach((element) => {
    bestItems.innerHTML += `
        <li id="item-menu">
            <ul class="new-menu p-3">
              <li><a href="#"><button class="btn border rounded-0 py-2 mx-0 px-4 text-white fw-semibold btn-shop">Shop Now!</button></a></li>
              <li class="img-content"><div class="my-3 ms-0 overflow-hidden"><img src="${element.image}" alt=""></div></li>
              <li><a class=" text-decoration-none text-dark my-2" href="#"> ${element.linkone}</a></li>
              <li><a class=" text-decoration-none text-dark" href="#">${element.linktwo}</a></li>
              <li><a class=" text-decoration-none text-dark my-2" href="#">${element.linkthree}</a></li>
              <li><a class=" text-decoration-none text-dark" href="#">${element.linkfour}</a></li>
            </ul>
        </li>
            `;
  });
});
bestSell.addEventListener("mouseleave", () => {
  bestItems.innerHTML = " ";
});

// Man Collection
async function manData() {
  const response = await fetch(api);
  const data = await response.json();
  const manProduct = data.filter((man) => man.category === "men's clothing");
  manProduct.forEach((element) => {
    contentTabOne.innerHTML += `<div class="col-6 col-lg-3">
                <div class="card border-0 bg-transparent">
                    <div class="img-content position-relative">
                        <img src="${element.image}" class="card-img-top rounded-0 product-image" alt="Fissure in Sandstone"/>
                        <div class="d-flex align-items-center justify-content-between w-100 bg-white position-absolute bottom-0 animate__animated animate__fadeInUp d-none container-cart">
                            <button class="btn text-dark text-capitalize btn-card" onclick="addCard(${element.id})"> add to cart </button>
                            <div class="cart-icon">
                                <button class="btn"><i class="fa-solid fa-eye"></i> </button>
                                <button class="btn" data-tooltip="hi" ><i class="fa-regular fa-heart"></i> </button>
                                <button class="btn"><i class="fa-solid fa-chart-simple"></i> </button>
                            </div>
                        </div>
                    </div> 
                    <div class="card-body bg-transparent text-center">
                        <h6 class="product-title text-capitalize">${element.title}</h6>
                        <p class="product-price">${element.price} $</p>
                    </div>
                </div>
            </div>`;
  });
}
manData();

//  woman collection
womanCollection.addEventListener("click", async () => {
  const response = await fetch(api);
  const data = await response.json();
  let womanClothes = data.filter(
    (element) => element.category === "women's clothing"
  );
  womanClothes.forEach((element) => {
    contentTabTwo.innerHTML += `<div class="col-6 col-lg-3">
                <div class="card border-0 bg-transparent">
                    <div class="img-content position-relative">
                    <img src="${element.image}" class="card-img-top product-image" alt="Fissure in Sandstone"/>
                    <div class="d-flex align-items-center justify-content-between w-100 bg-white position-absolute bottom-0 animate__animated animate__fadeInUp d-none container-cart">
                            <button class="btn text-dark text-capitalize btn-card" onclick="addCard(${element.id})"> add to cart </button>
                            <div class="cart-icon">
                                <button class="btn"><i class="fa-solid fa-eye"></i> </button>
                                <button class="btn" data-tooltip="hi" ><i class="fa-regular fa-heart"></i> </button>
                                <button class="btn"><i class="fa-solid fa-chart-simple"></i> </button>
                            </div>
                        </div>
                    </div> 
                    <div class="card-body bg-transparent text-center">
                        <h6 class="product-title">${element.title}</h6>
                        <p class="product-price">${element.price} $</p>
                    </div>
                </div>
            </div>`;
  });
  womanCollection.classList.add("disabled");
});

// kids Collection
kidsCollection.addEventListener("click", async () => {
  const response = await fetch(api);
  const data = await response.json();
  let kids = data.filter((element) => element.category === "kid's clothing");
  kids.forEach((element) => {
    contentTabThree.innerHTML += `<div class="col-6 col-lg-3">
                <div class="card border-0 bg-transparent">
                    <div class="img-content position-relative">
                    <img src="${element.image}" class="card-img-top product-image" alt="Fissure in Sandstone"/>
                    <div class="d-flex align-items-center justify-content-between w-100 bg-white position-absolute bottom-0 animate__animated animate__fadeInUp d-none container-cart">
                            <button class="btn text-dark text-capitalize btn-card" onclick="addCard(${element.id})"> add to cart </button>
                            <div class="cart-icon">
                                <button class="btn"><i class="fa-solid fa-eye"></i> </button>
                                <button class="btn" data-tooltip="hi" ><i class="fa-regular fa-heart"></i> </button>
                                <button class="btn"><i class="fa-solid fa-chart-simple"></i> </button>
                            </div>
                        </div>
                    </div> 
                    <div class="card-body bg-transparent text-center">
                        <h6 class="product-title">${element.title}</h6>
                        <p class="product-price">${element.price} $</p>
                    </div>
                </div>
            </div>`;
  });
  kidsCollection.classList.add("disabled");
});

// accessories Collection 
accCollection.addEventListener("click", async () => {
  const response = await fetch(api);
  const data = await response.json();
  let kids = data.filter((element) => element.category === "accessories");
  kids.forEach((element) => {
    contentTabFour.innerHTML += `<div class="col-6 col-lg-3">
                <div class="card border-0 bg-transparent">
                    <div class="img-content position-relative">
                    <img src="${element.image}" class="card-img-top product-image" alt="Fissure in Sandstone"/>
                    <div class="d-flex align-items-center justify-content-between w-100 bg-white position-absolute bottom-0 animate__animated animate__fadeInUp d-none container-cart">
                            <button class="btn text-dark text-capitalize btn-card" onclick="addCard(${element.id})"> add to cart </button>
                            <div class="cart-icon">
                                <button class="btn"><i class="fa-solid fa-eye"></i> </button>
                                <button class="btn" data-tooltip="hi" ><i class="fa-regular fa-heart"></i> </button>
                                <button class="btn"><i class="fa-solid fa-chart-simple"></i> </button>
                            </div>
                        </div>
                    </div> 
                    <div class="card-body bg-transparent text-center">
                        <h6 class="product-title">${element.title}</h6>
                        <p class="product-price">${element.price} $</p>
                    </div>
                </div>
            </div>`;
  });
  accCollection.classList.add("disabled");
});

// essential Collection
essenCollection.addEventListener("click", async () => {
  const response = await fetch(api);
  const data = await response.json();
  let essential = data.filter((element) => element.category === "essential");
  essential.forEach((element) => {
    contentTabFive.innerHTML += `<div class="col-6 col-lg-3">
                <div class="card border-0 bg-transparent">
                    <div class="img-content position-relative">
                    <img src="${element.image}" class="card-img-top product-image" alt="Fissure in Sandstone"/>
                    <div class="d-flex align-items-center justify-content-between w-100 bg-white position-absolute bottom-0 animate__animated animate__fadeInUp d-none container-cart">
                            <button class="btn text-dark text-capitalize btn-card" onclick="addCard(${element.id})"> add to cart </button>
                            <div class="cart-icon">
                                <button class="btn"><i class="fa-solid fa-eye"></i> </button>
                                <button class="btn" data-tooltip="hi" ><i class="fa-regular fa-heart"></i> </button>
                                <button class="btn"><i class="fa-solid fa-chart-simple"></i> </button>
                            </div>
                        </div>
                    </div> 
                    <div class="card-body bg-transparent text-center">
                        <h6 class="product-title">${element.title}</h6>
                        <p class="product-price">${element.price} $</p>
                    </div>
                </div>
            </div>`;
  });
  essenCollection.classList.add("disabled");
});

// sales
async function saleData() {
  const response = await fetch(api);
  const data = await response.json();
  const shop = data.filter((element) => element.category === "shop");
  shop.forEach((element) => {
    saleContent.innerHTML += `<div class="col-12 col-lg-4 mb-3">
        <div class="d-flex align-items-center justify-content-between border position-relative">
            <div class="image-sale">
                <img src="${element.image}" class="p-3" alt="">
                <div class="icon-sales text-center d-none">
                    <span class="border cart-icon text-white"><i class="fa-solid fa-basket-shopping"></i></span>
                </div>
            </div>
            <div class="content-card d-flex flex-column text-center">
                <a href="#" class="text-decoration-none text-dark fw-semibold details">${element.title}</a>
                <button class="btn border rounded-pill px-3 py-1 w-50 m-auto mt-4 text-white btn-saller">${element.price} $</button>
            </div>
        </div>
            </div>`;
  });
}
saleData();

// blog
async function blogData() {
  const response = await fetch(api);
  const data = await response.json();
  const blog = data.filter((element) => element.category === "blog");
  blog.forEach((element) => {
    blogContent.innerHTML += `          <div class="col-12 col-lg-4 mb-3 mb-lg-0">
        <div class="d-flex flex-column text-center content-blog pb-4">
          <img src="${element.image}" class="card-img-top mb-4" alt="image blog" srcset="">
          <p class="text-muted mb-1">${element.date}</p>
          <a href="#" class="mb-1 text-decoration-none fw-semibold">${element.title}</a>
          <a href="#"class="mb-1 text-decoration-none">${element.continue}</a>
        </div>
      </div>`;
  });
}
blogData();

// open Cart
cartIcon.addEventListener("click", () => {
  cartList.classList.add("show-cart");
});
// close Cart 
function closeCart(){
  cartList.classList.remove("show-cart");
  
}
// Add To Cart 
async function addCard(id) {
  const response = await fetch(api);
  const data = await response.json();
  if (!isItemInCart(id)) {
    data.forEach(element => {
      if (element.id == id) {
        let cardEmpty = document.querySelector(".empty");
        cardEmpty.style.display = "none";
        cartList.innerHTML += createCard(element);
      }
    });
  } else {
    alert('Product added to cart');
  }
}
function isItemInCart(id) {
  let itemsInCart = document.querySelectorAll(".items-cart");
  for (let item of itemsInCart) {
    if (item.getAttribute('data-id') == id) {
      return true;
    }
  }
  return false;
}

// cout of products  
let proCount = 0
let NumberCount = document.querySelector(".num-product");
function countProductAdd() {
  proCount ++ ;
  NumberCount.innerHTML= proCount ;
}

function createCard(element) {
  let count = 1;
  countProductAdd();
  return `
    <div class="d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-between my-3 w-100 items-cart" data-id="${element.id}">
      <img src="${element.image}" class="rounded" alt="">
      <div class="d-flex align-items-center justify-content-between w-25 my-2 my-lg-0">
        <p class="m-0 p-0"><span class="price"> ${element.price} </span> $ </p>
        <p class="title w-25 m-0 p-0">${element.title}  </p>
      </div>  
      <div class="d-flex align-items-center justify-content-between mb-2 w-25 mb-lg-0">
        <button class="btn btn-outline-primary p-2 rounded " onclick="increment(this)"> + </button>
        <p class="count p-2 rounded text-white border border-white mx-2 my-0 p-0 Quantity">${count}</p>
        <button class="p-2 btn btn-outline-success" onclick="decrement(this)"> - </button>
        </div>
        <button class="btn btn-outline-danger p-2 rounded remove" onclick="removeItem(${element.id})"> <i class="fa-solid fa-trash-can"></i> </button>
    </div>
  `;
}

function increment(button) {
  let countElement = button.nextElementSibling;
  let count = parseInt(countElement.textContent);
  count++;
  countElement.textContent = count;
}

function decrement(button) {
  let countElement = button.previousElementSibling;
  let count = parseInt(countElement.textContent);
  if (count > 0) {
    count--;
  }
  countElement.textContent = count;
  if (count == 0) {
    remove();
  }
}
// remove item from cart
function remove() {
  let itemCart = document.querySelector(".items-cart");
  itemCart.remove();
}
function removeItem(id){
  remove();
  countProductRemove();
}  
function countProductRemove() {
  proCount -- ;
  NumberCount.innerHTML = proCount ;
}
function checkOut() {
  let itemsInCart = document.querySelectorAll(".items-cart");
  let totalPrice = document.querySelector(".total-price");
  let total = 0 ;
    itemsInCart.forEach(items => {
    let proPrice = items.querySelector(".price");
    let proQuantity = items.querySelector(".Quantity");
    let priceNumber = Number(proPrice.textContent);
    let quantityNumber = Number(proQuantity.textContent);
    total+= priceNumber * quantityNumber ;
    totalPrice.innerHTML = total ;
    });
}
