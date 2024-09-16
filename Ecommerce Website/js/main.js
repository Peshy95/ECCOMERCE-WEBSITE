let products = [
    {Image: "images/Gin.jpg", Name: "Gin", Price: 5000,CODE: "A200"},
    {Image: "images/JohnWalker.jpg",Name: "John walker",Price: 6200,CODE: "M400"},
    {Image: "images/Tequila.jpg", Name:"Tequila.jpg", Price:8500, CODE:"H546"},
    {Image:"images/Vodka.jpg", Name:"Vodka", Price:6700, CODE:"T465"},
    {Image:"images/Four Cousins.webp", Name:"Four Cousins", Price: 9500,CODE:"E475" },
    {Image:"images/Bacardi.jpg", Name:"Bacardi", Price: 5500,CODE:"E475" },
    {Image:"images/Amarula.jpg", Name:"Amarula", Price: 7500,CODE:"E475" },
    {Image:"images/Beer.jpg", Name:"Beer", Price: 9500,CODE:"E475" },
    {Image:"images/Whiskey.jpg", Name:"Whiskey", Price:5000,CODE:"G456"}
    
  
]
    

productContainer.innerHTML = products.map((product) => {
            return`
            <div>
            <img src="${product.Image}"
            alt="${product.Name}">
            <p>${product.Name}</p>
            <p>price: ${product.Price}</p>
            <p>Code: ${product.CODE}</p>
            <button onclick = 'view(${product.CODE})'>View</button>
</div>
        `
    })







