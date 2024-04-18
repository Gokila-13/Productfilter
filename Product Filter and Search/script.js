let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "images/white-tshirt.jpg",
    },
    {
       productName:"Janix Green Dial Steel Mesh Chain Analog Watch-For Women",
       category:"Watch",
       price:"500",
       image:"images/watch4.jpeg",
    },
    {
      productName:"Dream Beauty Fashion Casual Puff Sleeves Solid Women Purple Top",
      category:"Topwear",
      price:"199",
      image:"images/top5.jpeg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "images/short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "images/sporty-smartwatch.jpg",
    },
    {
      productName:"RazaXpress Casual Puff Sleeves Solid Women Black Top",
      category:"Topwear",
      price:"286",
      image:"images/top6.jpeg",
    },
    {
      productName:"Women Solid Quilted Jacket",
      category:"Jacket",
      price:"999",
      image:"images/jacket2.jpeg",
    },
    {
      productName:"RUTENDO Casual Regular Sleeves Self Design Women Pink Top",
      category:"Topwear",
      price:"227",
      image:"images/top7.jpeg",
    },
    {
      productName:"Men Solid Quilted Jacket",
      category:"Jacket",
      price:"1195",
      image:"images/jacket7.jpeg",
    },
    {
      productName:"RK Club ID116 Smart Bracelet Watch Fitness Activity Tracker SmartWatch",
      category:"Watch",
      price:"330",
      image:"images/watch6.jpeg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "images/knitted-top.jpg",
    },
    {
      productName:"TrustEdge Golden watch ultra with Bluetooth calling Smartwatch",
      category:"Watch",
      price:"1399",
      image:"images/watch7.jpeg",
    },
    {
      productName:"Women Boyfriend Mid Rise Light Green Jeans",
      category:"Bottomwear",
      price:"599",
      image:"images/bottom4.jpeg",
    },
    {
      productName:"Loretta Analog Watch for Women",
      category:"Watch",
      price:"250",
      image:"images/watch3.jpeg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "images/black-leather-jacket.jpg",
    },
    {
      productName:"CrossBeats Ignite LYT MAX 1.9 Display,HR & BP Monitor 100+Watch Faces.In-Built Games Smartwatch ",
      category:"Watch",
      price:"1999",
      image:"images/watch8.jpeg",
    },
    {
      productName:"Women Relaxed Beige Viscose Rayon Trousers",
      category:"Bottomwear",
      price:"499",
      image:"images/bottom2.jpeg",
    },
    {
      productName:"Casual Butterfly Sleeves Solid Women Pink Top",
      category:"Topwear",
      price:"50",
      image:"images/top3.jpeg",
    },
    {
      productName:"SILKSTITCH Women Cargos",
      category:"Bottomwear",
      price:"353",
      image:"images/bottom5.jpeg",
    },
    { 
      productName:"Men Solid Casual Jacket",
      category:"Jacket",
      price:"870",
      image:"images/jacket3.jpeg",
    },
    {
      productName:"SONATA Poze Dial Strap Analog Watch",
      category:"Watch",
      price:"968",
      image:"images/watch5.jpeg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "images/pink-trousers.jpg",
    },
    {
      productName:"Men Coloblock Biker/Riding Jacket",
      category:"Jacket",
      price:"499",
      image:"images/jacket4.jpeg",
    },
    {
      productName:"Women Boyfriend Rise Blue Jeans",
      category:"Bottomwear",
      price:"485",
      image:"images/bottom3.jpeg",
    },
    {
      productName:"SONATA Poze Pink Strap with Pink Dial Analog Watch",
      category:"Watch",
      price:"500",
      image:"images/watch2.jpeg",
    },
    {
      productName:"NUEVOSPORTA Men Solid Puffer Jacket",
      category:"Jacket",
      price:"450",
      image:"images/jacket1.jpeg",
    },
    {
      productName:"Women Regular Fit Black Viscose Rayon Trousers",
      category:"Bottomwear",
      price:"269",
      image:"images/bottom1.jpeg",
    },
    {
      productName:"Casual Regular Sleeves Printed Women Red Top",
      category:"Topwear",
      price:"50",
      image:"images/top1.jpeg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "images/brown-jacket.jpg",
    },
    {
      productName:"Tooba Enterprises Casual Puf Sleeves Solid Women White Top",
      category:"Topwear",
      price:"244",
      image:"images/top4.jpeg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "images/comfy-gray-pants.jpg",
    },
    {
      productName:"Women Self Design Casual Jacket",
      category:"Jacket",
      price:"429",
      image:"images/jacket5.jpeg",
    },
    {
      productName:"LOUIS DEVIN Analog Watch for Women",
      category:"Watch",
      price:"200",
      image:"images/watch1.jpeg",
    },
    {
      productName:"Emmy Woed Women Cargos",
      category:"Bottomwear",
      price:"499",
      image:"images/bottom6.jpeg",
    },
    {
      productName:"Casual Sleeves White Top",
      category:"Topwear",
      price:"90",
      image:"images/top2.jpeg",
    },
    {
      productName:"Men Colorblack Casual Jacket",
      category:"Jacket",
      price:"699",
      image:"images/jacket6.jpeg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
