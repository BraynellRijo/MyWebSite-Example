let plantilla = [
    {
        id: "1",
        nameProduct: "CapHc",
        category: "Gorras",
        price: "299",
        sell:"0",
        infoProduct: "Este gorro es perfecto para dar vida a tus diseños de bordado. Además, su ajuste cómodo garantiza todo lo que los amantes de los gorritos están buscando: comfort y calor en las temporadas más frías.",
        colors: "black, red, gray, green, brown",
        size: ["7 1/2", "7 3/8", "7 1/8", "7 3/4", "7 7/8"],
        imgMain: "Gorro1.png",
        imgVariant: ["Gorro1.png",
                    "Gorro2.png",
                     "Gorro3.png",
                     "Gorro4.png"],
    },
]


let openCart = document.querySelector(".addCart")
let closeCart = document.querySelector(".cerrar")
let template = document.getElementById("template")
let listCart = document.querySelector(".list-cart")
let body = document.querySelector("body")
let total = document.querySelector(".total")
let countCart = document.querySelector(".count")


openCart.addEventListener("click", ()=>{
    body.classList.add("active")
})
closeCart.addEventListener("click", ()=>{
    body.classList.remove("active")
})

let listCarts = [];
function initApp(){
plantilla.forEach((value, key) => {
    let container = document.createElement("div")
    container.classList.add("product-container")
    container.innerHTML =   `
    <div class="contenedor-img">
    <img src="Img/${value.imgMain}" alt="" class="img-main">
    <div class="variant-imgContainer">
        <img src="Img/${value.imgVariant[0]}" alt="">
        <img src="Img/${value.imgVariant[1]}" alt="">
        <img src="Img/${value.imgVariant[2]}" alt="">
        <img src="Img/${value.imgVariant[3]}" alt="">
    </div>
</div>
<div class="content">
    <h1 class="title">${value.nameProduct}</h1>
    <h3 class="category-text">Categoria: <small>${value.category}</small></h3>
    <div class="contenedor-text">
    <p class="text-product">${value.infoProduct}</p>
    </div>
    <div class="colors-container">
        <span class="color"></span>
        <span class="color"></span>
        <span class="color"></span>
        <span class="color"></span>
    </div>
    <div class="quantity-container">
        <button class="btnMinus" onclick="changeQuantity(${key}, ${value.countCart - 1})">-</button>
        <span class="quantity">${value.countCart}</span>
        <button class="btnPlus" onclick="changeQuantity(${key}, ${value.countCart + 1})">+</button>
    </div>

    <span class="price">Precio: RD$<small>${value.price}</small></span>
    <div class="buttons-container">    
    <span href="" class="btnAddCart" onclick="addToCart(${key})">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Añadir al carrito
</span>
    
    <a href="pago.html" class="btnBuy">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Comprar
    </a>
    </div>
</div>`;
template.appendChild(container)
})

}
let almacenador = 0;
let btnMinus = document.querySelector(".btnMinus")
let btnPlus = document.querySelector(".btnPlus")

// function incrementar(){
//     almacenador++;
//     almacenarValor()

// }
// function descrementar(){
//     almacenador--;
//     almacenarValor()
// }
// function almacenarValor(){
//     let almacenar = document.querySelector(".quantity")
//     almacenar.textContent = almacenador;
// }
// btnMinus.addEventListener('click', descrementar)
// btnPlus.addEventListener('click', incrementar)

initApp();

function addToCart(key) { // Cambiar el nombre de la función a addtocart
    if (listCarts[key] == null) {
      listCarts[key] = plantilla[key];
      listCarts[key].countCart = 1;
    }
    reloadCart();
  }
  
  function reloadCart() {
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
  
    listCarts.forEach((value, key) => {
      if (value != null) {
        totalPrice = totalPrice + parseFloat(value.sell); // Parsear el precio a número
        count = count + value.countCart;
  
        let newDiv = document.createElement("li");
        newDiv.innerHTML = `
          <div class="img-listContainer"><img src="Img/${value.imgMain}"/></div>
          <div class="content-list">
          <div>${value.nameProduct}</div>
          <die>RD$${value.sell.toLocaleString()}</div>
          <div class="container-btnList">
            <button onclick="changeQuantity(${key}, ${value.countCart - 1})">-</button>
            <div class="count">${value.countCart}</div>
            <button onclick="changeQuantity(${key}, ${value.countCart + 1})">+</button>
          </div>
          </div>`;
        listCart.appendChild(newDiv);
      }
      total.innerText = totalPrice.toLocaleString();
      countCart.innertext = count;
    });
  
    total.innerText = totalPrice.toLocaleString(); // Asignar el total al elemento total en el DOM
    countCart.innerText = count;
  }
  function changeQuantity(key, countCart){
    if(countCart == 0){
      delete listCarts[key]
    }else{
      listCarts[key].countCart = countCart
      listCarts[key].sell = countCart * plantilla[key].price
    }
    reloadCart();
}

function changeImageSrc(anything){
    document.querySelector('.imgMain').src = anything;

}