const api = "./ApiFolder/products.json";
// contenet 
let contentTabOne = document.querySelector(".content-one");
let contentTabTwo = document.querySelector(".content-two");
let contentTabThree = document.querySelector(".content-three");
let contentTabFour = document.querySelector(".content-four");
let contentTabFive = document.querySelector(".content-five");
let saleContent = document.querySelector(".sale-content");
let blogContent = document.querySelector(".blog-content");
// select Items
let cartIcon = document.querySelector(".cart");
let cartList = document.querySelector(".dropdown-container");
let cartProducts = document.querySelector(".cart-products");

let itemMenu = document.querySelector(".item-menu");
let productList = document.querySelector(".product-list");

let womanCollection = document.querySelector(".woman");
let kidsCollection = document.querySelector(".kids");
let accCollection = document.querySelector(".accessories");
let essenCollection = document.querySelector(".essential");

// console.log(productList);

// productList.addEventListener("hover",async ()=>{
//     const response = await fetch(api);
//     const data = await response.json(); 
//     let womanClothes = data.filter( element => element.category === "menu");
//     womanClothes.forEach(element => {
//         contentTabTwo.innerHTML += `<ul class="dropdown-menu d-none new-menu border-0 animate__animated animate__fadeInDown item-menu">
//         <li class="dropdown-item">
//             <ul class="new-menu border-0 animate__animated animate__fadeInDown">
//               <li><a class="dropdown-item p-2" href="#"><button class="btn border rounded-0 py-2 px-4 text-white fw-semibold btn-shop">Shop Now!</button></a></li>
//               <li class="img-content overflow-hidden"><a class="dropdown-item p-2" href="#"><img src="${element.image}" alt=""></a></li>
//               <li><a class="dropdown-item p-2" href="#"> kids Toys</a></li>
//               <li><a class="dropdown-item p-2" href="#">kids Travel Cars</a></li>
//               <li><a class="dropdown-item p-2" href="#">kids Color Shape</a></li>
//               <li><a class="dropdown-item p-2" href="#">kids Tent</a></li>
//             </ul>
//         </li>
        
//       </ul>`
//     });
// });



// show cart 
cartIcon.addEventListener("click" , ()=>{
    cartList.classList.toggle("show-cart")
});
// Man Collection 
async function getData() {
    const response = await fetch(api);
    const data = await response.json();
    const manProduct = data.filter(man => man.category === "men's clothing")
    manProduct.forEach(element => {
        // console.log(element);
        contentTabOne.innerHTML += `<div class="col-6 col-lg-3">
                <div class="card border-0 bg-transparent position-relative">
                    <div class="img-content">
                    <img src="${element.image}" class="card-img-top product-image" alt="Fissure in Sandstone"/>
                    </div> 
                    <div class="card-body bg-transparent text-center">
                        <h6 class="product-title text-capitalize">${element.title}</h6>
                        <p class="product-price">${element.price} $</p>
                        <button class="btn btn-outline-primary w-25 text-white btn-add" onclick="addCard(${element.id})"> <i class="fa-solid fa-cart-plus"></i> </button>
                    </div>
                </div>
            </div>`   
    });

}
getData();

//  woman collection 
womanCollection.addEventListener("click",async ()=>{
    const response = await fetch(api);
    const data = await response.json(); 
    let womanClothes = data.filter( element => element.category === "women's clothing");
    womanClothes.forEach(element => {
        contentTabTwo.innerHTML += `<div class="col-6 col-lg-3">
                <div class="card border-0 bg-transparent position-relative">
                    <div class="img-content">
                    <img src="${element.image}" class="card-img-top product-image" alt="Fissure in Sandstone"/>
                    </div> 
                    <div class="card-body bg-transparent text-center">
                        <h6 class="product-title">${element.title}</h6>
                        <p class="product-price">${element.price} $</p>
                        <button class="btn btn-outline-primary w-25 text-white btn-add" onclick="addCard(${element.id})"> <i class="fa-solid fa-cart-plus"></i> </button>
                    </div>
                </div>
            </div>`
    });
});

// kids Collection 
kidsCollection.addEventListener("click",async ()=>{
    const response = await fetch(api);
    const data = await response.json(); 
    let kids = data.filter( element => element.category === "kid's clothing");
    kids.forEach(element => {
        contentTabThree.innerHTML += `<div class="col-6 col-lg-3">
                <div class="card border-0 bg-transparent position-relative">
                    <div class="img-content">
                    <img src="${element.image}" class="card-img-top product-image" alt="Fissure in Sandstone"/>
                    </div> 
                    <div class="card-body bg-transparent text-center">
                        <h6 class="product-title">${element.title}</h6>
                        <p class="product-price">${element.price} $</p>
                        <button class="btn btn-outline-primary w-25 text-white btn-add" onclick="addCard(${element.id})"> <i class="fa-solid fa-cart-plus"></i> </button>
                    </div>
                </div>
            </div>`
    });
});

// accessories Collection
accCollection.addEventListener("click",async ()=>{
    const response = await fetch(api);
    const data = await response.json(); 
    let kids = data.filter( element => element.category === "accessories");
    kids.forEach(element => {
        contentTabFour.innerHTML += `<div class="col-6 col-lg-3">
                <div class="card border-0 bg-transparent position-relative">
                    <div class="img-content">
                    <img src="${element.image}" class="card-img-top product-image" alt="Fissure in Sandstone"/>
                    </div> 
                    <div class="card-body bg-transparent text-center">
                        <h6 class="product-title">${element.title}</h6>
                        <p class="product-price">${element.price} $</p>
                        <button class="btn btn-outline-primary w-25 text-white btn-add" onclick="addCard(${element.id})"> <i class="fa-solid fa-cart-plus"></i> </button>
                    </div>
                </div>
            </div>`
    });
});

// essential Collection
essenCollection.addEventListener("click",async ()=>{
    const response = await fetch(api);
    const data = await response.json(); 
    let kids = data.filter( element => element.category === "essential");
    kids.forEach(element => {
        contentTabFive.innerHTML += `<div class="col-6 col-lg-3">
                <div class="card border-0 bg-transparent position-relative">
                    <div class="img-content">
                    <img src="${element.image}" class="card-img-top product-image" alt="Fissure in Sandstone"/>
                    </div> 
                    <div class="card-body bg-transparent text-center">
                        <h6 class="product-title">${element.title}</h6>
                        <p class="product-price">${element.price} $</p>
                        <button class="btn btn-outline-primary w-25 text-white btn-add" onclick="addCard(${element.id})"> <i class="fa-solid fa-cart-plus"></i> </button>
                    </div>
                </div>
            </div>`
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
    const shop = data.filter(element => element.category === "shop")
    shop.forEach(element => {
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
            </div>`
    });

}
saleData();

// blog 
async function blogData() {
    const response = await fetch(api);
    const data = await response.json();
    const blog = data.filter(element => element.category === "blog")
    blog.forEach(element => {
        blogContent.innerHTML += `          <div class="col-12 col-lg-4">
        <div class="d-flex flex-column text-center content-blog pb-4">
          <img src="${element.image}" class="card-img-top mb-4" alt="image blog" srcset="">
          <p class="text-muted mb-1">${element.date}</p>
          <a href="#" class="mb-1 text-decoration-none fw-semibold">${element.title}</a>
          <a href="#"class="mb-1 text-decoration-none">${element.continue}</a>
        </div>
      </div>`
    });

}
blogData();