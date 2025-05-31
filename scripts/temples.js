// Display last modified date in the footer
document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Modification: ${document.lastModified}`;

    filterTemples("Home"); // Display all temples by default when the page loads

    // Menu Toggle Logic
    const menuButton = document.getElementById("myButton");
    const closeButton = document.getElementById("closeButton");
    const menu = document.querySelector(".menulinks");

    menuButton.addEventListener("click", () => {
        menu.classList.add("show"); // Show menu
        menuButton.style.display = "none"; // Hide menu button
        closeButton.style.display = "block"; // Show close button
    });

    closeButton.addEventListener("click", () => {
        menu.classList.remove("show"); // Hide menu
        closeButton.style.display = "none"; // Hide close button
        menuButton.style.display = "block"; // Show menu button
    });

    // Add click event to menu links for filtering
    document.querySelectorAll(".menulinks li a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            filterTemples(link.textContent.trim()); // Filter temples based on category
        });
    });
});

// Temple Data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra Ghana",
    dedicated: " 11 January 2004",
    area: 17500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/320x200/accra-ghana-temple-758797-wallpaper.jpg"
  },
  {
    templeName: "Apia Samoa",
    location: "Pesega, Apia",
    dedicated: " 7 August 1983",
    area: 18691,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/320x200/apia-samoa-temple-lds-460475-wallpaper.jpg"
  },
  {
    templeName: "Atlanta Georgia",
    location: "Sandy Springs",
    dedicated: " 1 June 1983",
    area: 34500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/320x200/atlanta-temple-lds-811746-wallpaper.jpg"
  },
  // Add more temple objects here...
];

// Function to Filter Temples Based on Category
function filterTemples(category) {
    const photosContainer = document.querySelector(".photos");
    photosContainer.innerHTML = ""; // Clear existing cards

    let filteredTemples = temples.filter(temple => {
        const dedicationYear = parseInt(temple.dedicated.split(",")[0]);

        if (category === "New") return dedicationYear >= 2010;
        if (category === "Old") return dedicationYear < 2010;
        if (category === "Large") return temple.area >= 20000;
        if (category === "Small") return temple.area < 20000;
        return true; // Show all if category is "Home"
    });

    filteredTemples.forEach(createTempleCard); // Display filtered temples
}

// Function to Create and Append Temple Cards
function createTempleCard(temple) {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq feet`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".photos").appendChild(card);
}
