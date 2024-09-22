const majors = [
    {
        name: "Accounting",
        description: "The Accounting major provides a comprehensive education in financial reporting, taxation, auditing, and management accounting, preparing students for careers in public, corporate, or governmental accounting.",
        requirement1: "Intermediate Accounting I & II",
        requirement2: "Taxation",
        requirement3: "Auditing",
        requirement4: "Business Law",
        requirement5: "Accounting Capstone or Internship"
    },
    {
        name: "Aerospace Engineer",
        description: "The Aerospace Engineering major equips students with knowledge in aerodynamics, structural design, and spacecraft systems to prepare for careers in aviation and space exploration.",
        requirement1: "Fluid Mechanics and Aerodynamics",
        requirement2: "Aircraft and Spacecraft Structures",
        requirement3: "Propulsion Systems",
        requirement4: "Flight Dynamics and Control",
        requirement5: "Aerospace Engineering Capstone or Design Project"
    },
    {
        name: "Architecture",
        description: "The Architecture major provides students with the skills to design buildings and spaces, emphasizing aesthetics, functionality, sustainability, and structural integrity.",
        requirement1: "Architectural Design Studios",
        requirement2: "Building Materials and Construction",
        requirement3: "Structural Systems",
        requirement4: "History and Theory of Architecture",
        requirement5: "Architectural Capstone or Design Thesis"
    },
    {
        name: "Criminal Justice",
        description: "The Criminal Justice major explores the criminal justice system, law enforcement, corrections, and legal principles, preparing students for careers in law, public safety, and justice administration.",
        requirement1: "Introduction to Criminal Justice",
        requirement2: "Criminology",
        requirement3: "Criminal Law and Procedure",
        requirement4: "Corrections and Rehabilitation",
        requirement5: "Criminal Justice Capstone or Internship"
    },
    {
        name: "Film Production",
        description: "The Film Production major trains students in storytelling, cinematography, editing, and directing, preparing them for careers in film and media industries.",
        requirement1: "Introduction to Film Production",
        requirement2: "Screenwriting",
        requirement3: "Cinematography",
        requirement4: "Film Editing",
        requirement5: "Film Production Capstone or Final Project"
    },
    {
        name: "Nursing",
        description: "The Nursing major prepares students with the knowledge and clinical skills necessary to provide patient care, promote health, and manage illness across various healthcare settings.",
        requirement1: "Human Anatomy and Physiology",
        requirement2: "Foundations of Nursing Practice",
        requirement3: "Pharmacology",
        requirement4: "Medical-Surgical Nursing",
        requirement5: "Nursing Capstone or Clinical Practicum"
    }
]

function generateProductHTML(majors) {
    return `
        <div class="col mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h1 class="card-title">${majors.name}</h1>
                    <p class="card-text"><u>Description:</u> ${majors.description}</p>
                    <h4 class="card-price">Requirements:</h4>
                    <ul>
                        <li>${majors.requirement1}</li>
                        <li>${majors.requirement2}</li>
                        <li>${majors.requirement3}</li>
                        <li>${majors.requirement4}</li>
                        <li>${majors.requirement5}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
}

function generateProducts(productsToShow) {
    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = "" // Clearing any previous content

    productsToShow.forEach(majors => {
        productContainer.innerHTML += generateProductHTML(majors)
    })
}

function filterProducts(searchText) {
    const filteredProducts = majors.filter(majors => {
        const name = majors.name.toLowerCase()
        return name.includes(searchText.toLowerCase())
    })

    generateProducts(filteredProducts)
}

function init() {
    const searchInput = document.getElementById('searchInput')

    searchInput.addEventListener('input', function() {
        const searchText = this.value.trim()

        if (searchText === '') {
            generateProducts(majors) // Show all products if search bar is empty
        } else {
            filterProducts(searchText) // Filter products based on search text
        }
    })

    generateProducts(majors) // Show all products initially
}

init()


