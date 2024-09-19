const products = [
    {
        name: "Wooden Block Set",
        imageSrc: "images/block2.png",
        description: "Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate <br> Age 3+ <br> Size: 13” L x 12” W x 2” H.",
        price: "$29.99",
        onClickFunction: "blocks()"
    },
    {
        name: "Wooden Boat",
        imageSrc: "images/boat2.png",
        description: "Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg 'lobster people.' <br> For all ages <br> Size: 10.5' L x 4.5' W x 3.5' H.",
        price: "$14.99",
        onClickFunction: "boat()"
    },
    {
        name: "Wooden Plane",
        imageSrc: "images/plane1.png",
        description: "Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Your children will love this toy! <br> Age: Toddlers <br> Size: 3.5'H x 7'L x 7'W.",
        price: "$19.99",
        onClickFunction: "plane()"
    },
    {
        name: "Wooden Car",
        imageSrc: "images/car1.png",
        description: "This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. <br> Age: Toddlers <br> Size: 12' L x 5' H x 3.5' W",
        price: "$19.99",
        onClickFunction: "car()"
    },
    {
        name: "Train",
        imageSrc: "images/train1.png",
        description: "Embark on a charming journey with this beautiful handcrafted wooden train set. The train and three interchangeable carts display intricate details made from real beech wood.<br> Age: 3+ <br> Size 11'H x 84'L x 13'W",
        price: "$24.99",
        onClickFunction: "train()"
    },
    {
        name: "Duck",
        imageSrc: "images/duck1.png",
        description: "A charming and eco-friendly wooden duck toy, crafted from natural wood and other non-toxic materials, perfect for sparking imaginative play and encouraging fine motor skills in young children. <br> Age: Toddlers <br> Size 20'H x 50'L x 10'W",
        price: "$19.99",
        onClickFunction: "duck()"
    }
]

function generateProductHTML(product) {
    return `
        <div class="col mb-4">
            <div class="card h-100">
                <img src="${product.imageSrc}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <h4 class="card-price">${product.price}</h4>
                    <a onclick="${product.onClickFunction}"  class="btn btn a1">Add to cart</a>
                </div>
            </div>
        </div>
    `
}

function generateProducts(productsToShow) {
    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = "" // Clearing any previous content

    productsToShow.forEach(product => {
        productContainer.innerHTML += generateProductHTML(product)
    })
}

function filterProducts(searchText) {
    const filteredProducts = products.filter(product => {
        const name = product.name.toLowerCase()
        return name.includes(searchText.toLowerCase())
    })

    generateProducts(filteredProducts)
}

function init() {
    const searchInput = document.getElementById('searchInput')

    searchInput.addEventListener('input', function() {
        const searchText = this.value.trim()

        if (searchText === '') {
            generateProducts(products) // Show all products if search bar is empty
        } else {
            filterProducts(searchText) // Filter products based on search text
        }
    })

    generateProducts(products) // Show all products initially
}

init()

