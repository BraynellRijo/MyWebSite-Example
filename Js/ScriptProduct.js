let products = {
    data: [    {
        id: "0",
        productName: "BeanieHc",
        category: "Gorras",
        price: "299",
        image: "Img/Gorro1.png",

    },
    {
        id: "1",
        productName: "Unisex fleece sweatpants Gray",
        category: "Joggers",
        price: "749",
        image: "Img/JoggerF.png",

    },
    {
        id: "2",
        productName: "Leggings with pockets",
        category: "Leggins",
        price: "449",
        image: "Img/Leggins.png",

    },
    {
        id: "3",
        productName: "Unisex fleece sweatpants",
        category: "Joggers",
        price: "749",
        image: "Img/JoggerBlackWomen.png",

    },
    {
        id: "4",
        productName: "Unisex fleece zip up hoodie",
        category: "Sudaderas",
        price: "1,099",
        image: "Img/Sudadera.png",

    },
    {
        id: "5",
        productName: "Sports Jersey blackHc",
        category: "Tshirt",
        price: "399",
        image: "Img/Tshirt.png",

    },    
    {
        id: "6",
        productName: "Unisex Hc tie-dye hoodie",
        category: "Sudaderas",
        price: "1,199",
        image: "Img/sudaderaM1.png",

    },
    {
        id: "7",
        productName: "Crop Sweatshirt",
        category: "Top",
        price: "699",
        image: "Img/TopLarge.png",

    },
    {
        id: "8",
        productName: "Summer Shortshc",
        category: "Shorts",
        price: "399",
        image: "Img/Short.png",

    },
    {
        id: "9",
        productName: "BlackHc Top",
        category: "Top",
        price: "559",
        image: "Img/TopBlack.png",

    },
    {
        id: "10",
        productName: "Women's athletic shoes",
        category: "Tenis",
        price: "1,499",
        image: "Img/TenisHc.png",

    },
    {
        id: "11",
        productName: "Snapback Hat",
        category: "Gorras",
        price: "699",
        image: "Img/Cap.png",

    },
    {
        id: "12",
        productName: "All-over print gym bag",
        category: "Equipamiento",
        price: "729",
        image: "Img/Bolsogym.png",

    },    
    {
        id: "13",
        productName: "yoga mat",
        category: "Accesorios",
        price: "299",
        image: "Img/Cangurera.png",

    },    
    {
        id: "14",
        productName: "Stainless Steel Water Bottle",
        category: "Equipamiento",
        price: "249",
        image: "Img/BotellaSinf.png",

    },
    {
        id: "15",
        productName: "Classic T-ShirtHC",
        category: "T-Shirt",
        price: "399",
        image: "Img/T-Shirt.png",
    },    
    {
        id: "16",
        productName: "Classic Women T-ShirtHC",
        category: "T-Shirt",
        price: "349",
        image: "Img/T-ShirtWomen.png",
    },
    {
        id: "17",
        productName: "Training Large Top Rose",
        category: "Top",
        price: "699",
        image: "Img/TopRosa.png",
    },
    {
        id: "18",
        productName: "Unisex fleece Blue sweatpants",
        category: "Jogger",
        price: "849",
        image: "Img/JoggerBlue.png",
    },
    {
        id: "19",
        productName: "Unisex fleece Gray sweatpants ",
        category: "Jogger",
        price: "859",
        image: "Img/Joggertexturizado.png",
    },
    {
        id: "20",
        productName: "Backpack HC",
        category: "Accesorios",
        price: "1,499",
        image: "Img/Backpack.png",
    },
    {
        id: "21",
        productName: "Short X Shoes summer Sale",
        category: "Shorts",
        price: "999",
        image: "Img/conjuntoShort.png",
    },
    {
        id: "22",
        productName: "Flexible rubber straps",
        category: "Equipamiento",
        price: "299",
        image: "Img/cuerdas.png",
    },
    {
        id: "23",
        productName: "Sculpting LeggingsHC",
        category: "Leggins",
        price: "449",
        image: "Img/Leggins1.png",
    },
],
}

for(let i of products.data){

    //Crear la carta
    let card = document.createElement("div")

    //Agregar la categoria a la carta y esta debe mantenerse oculta
    card.classList.add("card", i.category, "hide");

    //div para la imagen de la carta
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //etiqueta de la imagen
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //contenedor
    let container = document.createElement("div");
    container.classList.add("container");

    //Texto de la carta
    let name = document.createElement("h3");
    name.classList.add("product-name");
    name.innerText = i.productName.toLocaleUpperCase();
    container.appendChild(name);

    //precio
    let price = document.createElement("h5")
    price.innerText = "RD$" + " " + i.price+".99";
    container.appendChild(price);

    //contenedor de botones
    let containerBtn = document.createElement("div")
    containerBtn.classList.add("button-container")
    container.appendChild(containerBtn)

    //boton de comprar
    let btnVer = document.createElement("a") 
    let btnVerSpan = document.createElement("span")
    btnVerSpan.textContent = "Ver";
    btnVer.href = ("InfoProducto.html");
    btnVer.appendChild(btnVerSpan)
    container.appendChild(btnVer)

    //boton de añadir al carrito
    let btnAddCart = document.createElement("button")
    let btnAddCartSpan = document.createElement("span")
    btnAddCart.classList.add("btnAddCart")
    btnAddCartSpan.textContent = "Añadir al carrito";
    btnAddCart.appendChild(btnAddCartSpan)
    container.appendChild(btnAddCart)
    card.appendChild(container)
    document.getElementById("products").appendChild(card);
}

//parametro pasado del boton( igual que el de la categoria)

function filterProduct(value){
    //codigo de la clase del boton
    
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) =>{
        //verfifica si el valor es igual al innerText

        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active")

        }else {
            button.classList.remove("active")
        }
    });
//filtro para seleccionar todas las cartas
let elements = document.querySelectorAll(".card");

elements.forEach((element) => {

    //mostrar las cartas con el boton de "Todos"
    if(value == "Todos"){
        element.classList.remove("hide")

    }else{
        //muestra las categorias basados en el valor
        if(element.classList.contains(value)){
            element.classList.remove("hide")

        }else{
            //oculta las demas categorias
            element.classList.add("hide")
        }
    }
})

}

//boton de busqueda
document.getElementById("search").addEventListener("click", () =>{
 
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card")

    //loop a traves de todos los elementos
    elements.forEach((element, index) =>{

    //Verifica si el valor del texto del buscador concuerda con el valor del texto de la carta
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide")
            
        }else{
            cards[index].classList.add("hide")

        }
    })
});

//iniciarmente se deben presentar todos los productos

window.onload = () => {
    filterProduct("Todos");
};

//carrito de compras


let openCart = document.querySelector(".addCart")
let closeCart = document.querySelector(".cerrar")
let list = document.getElementById("products")
let listCart = document.querySelector(".list-cart")
let body = document.querySelector("body")
let total = document.querySelector(".total")
let countCart = document.querySelector(".count")
let allAddCartButtons = document.querySelectorAll(".btnAddCart");

allAddCartButtons.forEach((btn, index) => {
    btn.onclick = () => addtocart(products.data[index].id); 
});

openCart.addEventListener("click", ()=>{
    body.classList.add("active1")
})
closeCart.addEventListener("click", ()=>{
    body.classList.remove("active1")
})

let listCarts = [];

function addtocart(key){
    if(listCarts[key] == null){
        listCarts[key] = products[key];
        listCarts[key].countCart = 1;
    }
    reloadCart();
}

function reloadCart() {
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key) =>{  
        totalPrice = totalPrice + value.price;
        count = count + value.countCart;

        if(value != null){
            let newDiv = document.createElement("li")
            newDiv.innerHTML = `
            <div><img src="${value.image}"/></div>
            <div>${value.productName}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.countCart}</div>
            <div>
            <button onclick="changeQuantity(${key}, ${value.countCart - 1})">-</button>
            <div class="count"${value.countCart}</div>
            <button onclick="changeQuantity(${key}, ${value.countCart + 1})">+</button>
            </div>`
            listCart.appendChild(newDiv)
        }
    })
    totalPrice.innerText = totalPrice.toLocaleString();
    countCart.innerText = count;
}
