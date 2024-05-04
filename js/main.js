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

// navBar.scrollY(200){

// }
// window.addEventListener("scroll" , ()=>{
//     if (window.scrollY = 200) { // Change 200 to the distance you want
//         // Add fixed class to navbar if scrolled past certain distance
//         navBarar.classList.add('position-fixed');
//       } else {
//         // Remove fixed class from navbar if not scrolled past certain distance
//         navBarar.classList.remove('position-fixed');
//       }
// })

btnSearch.addEventListener("click" , async ()=>{

    let response = await fetch (api);
    let data = await response.json();
    data.forEach(search => {
        if (searchInput.value =="") {
            console.log(false);
        } else if(search.title.includes(searchInput.value)) {
        // console.log(search.title);
        // confirm("jdkj")
            
        }
    });

    
    // console.log(true);
    
})


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

// show cart
cartIcon.addEventListener("click", () => {
  cartList.classList.toggle("show-cart");
});
// Man Collection
async function getData() {
  const response = await fetch(api);
  const data = await response.json();
  const manProduct = data.filter((man) => man.category === "men's clothing");
  manProduct.forEach((element) => {
    // console.log(element);
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
getData();

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
});

// essential Collection
essenCollection.addEventListener("click", async () => {
  const response = await fetch(api);
  const data = await response.json();
  let kids = data.filter((element) => element.category === "essential");
  kids.forEach((element) => {
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
});

async function addCard(id) {
  console.log(id);
  // let productTitle = document.querySelectorAll(".product-title")
  // const response = await fetch(api);
  // const data = await response.json();
  // // console.log(data);
  // data.filter( x => x == id);

  // console.log(productTitle.textContent);
}

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
    blogContent.innerHTML += `          <div class="col-12 col-lg-4">
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
