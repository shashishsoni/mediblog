


const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');

const cardData = [
  {
    imageUrl: "./images/DOC1.jpeg",
    title: "Dr. Aditi Chaturvedi",
    description: "The Challenge of ‘Young Women with Breast Cancer’.",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC1.html',
  },
  {
    imageUrl: "./images/DOC2.jpeg",
    title: "Dr. Scott Lundstrom",
    description: "Deliver smarter patient care with integrated patient records",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC2.html',
  },
  {
    imageUrl: "./images/DOC3.jpeg",
    title: "Dr. Anthony L. Komaroff",
    description: "Is chronic fatigue syndrome all in your brain?",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC3.html',
  },
  {
    imageUrl: "./images/DOC4.jpeg",
    title: "Dr. Jeffrey Meyerhardt",
    description: "Navigating Colorectal Cancer: Staging, Molecular Testing, and Side Effect Management",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC4.html',
  },
  {
    imageUrl: "./images/DOC5.jpeg",
    title: "Dr.Sanjay Sharma",
    description: "Peripheral Vascular Disease in Diabetes",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC5.html',
  },
  {
    imageUrl: "./images/DOC6.jpeg",
    title: "Dr.Rakesh K Jain",
    description: "How to Approach a Child With Seizure?",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC6.html',
  },
  {
    imageUrl: "./images/DOC7.jpeg",
    title: "Dr.Kartik Bhosale",
    description: "Shortness of Breath? Not Asthma? May Be the Cause of Heart Problems",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC7.html',
  },
  {
    imageUrl: "./images/DOC8.jpeg",
    title: "Dr.Manoj Madhukar Deshpande",
    description: "Unlocking Restful Sleep: Ayurveda’s Natural Approach to Overcome Insomnia",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC8.html',
  },
  {
    imageUrl: "./images/DOC9.jpeg",
    title: "Dr.Utsav",
    description: "Healthy Sleep for a Healthy Heart",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC9.html',
  },
  {
    imageUrl: "./images/DOC10.jpeg",
    title: "Dr.Tejashri Shrotri",
    description: "Comprehensive Pregnancy Care: A Guide to a Healthy and Successful Journey",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC10.html',
  },
  {
    imageUrl: "./images/DOC11.jpeg",
    title: "Dr.Nafisa Taha",
    description: "Freedom From Chronic Pain",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC11.html',
  },
  {
    imageUrl: "./images/DOC12.png",
    title: "Jeff Boothman",
    description: "Stress reduction during cancer treatment",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC12.html',
},
{
imageUrl: "./images/DOC13.png",
title: "dr. manali patel ",
description: "health equity and quality care in cancer",
buttonLabel: "Find out more",
buttonIcon: "arrow_right_alt",
link: 'URLs/DOC13.html',
},
{
imageUrl: "./images/DOC14.png",
title: "Dr. Navneet singh ",
description: "Cancer care challenges",
buttonLabel: "Find out more",
buttonIcon: "arrow_right_alt",
link: 'URLs/DOC14.html',
},
{
imageUrl: "./images/DOC15.png",
title: "dr. Suresh advani ",
description: "treating cervical cancer",
buttonLabel: "Find out more",
buttonIcon: "arrow_right_alt",
link: 'URLs/DOC15.html',
},
{
imageUrl: "./images/DOC16.png",
title: "dr. Tingting Zhang ",
description: "Cancer risks",
buttonLabel: "Find out more",
buttonIcon: "arrow_right_alt",
link: 'URLs/DOC16.html',
},
  {
    imageUrl: "./images/DOC21.jpeg",
    title: "Dr. Raya E. Kheirbek",
    description: "The burden of choice: Navigating the complexities of surrogate decision-making in medicine.",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC21.html',
  },
 {
    imageUrl: "./images/DOC22.jpeg",
    title: "Dr. Erica Balflour",
    description: "Psychodermatology: A skin-brain axis exists.",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC22.html',
  },
 {
    imageUrl: "./images/DOC23.jpg",
    title: "Dr. Akshat Jain",
    description: "Gene therapy breakthroughs: a new era in genetic disorder treatment.",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC23.html',
  },
  {
    imageUrl: "./images/DOC24.jpeg",
    title: "Dr. Kara Wada",
    description: "Navigating spring allergies in the era of climate change.",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC24.html',
  },
  {
    imageUrl: "./images/DOC25.jpg",
    title: "Dr. Roxanne Becker",
    description: "The power of nutrition in cancer prevention.",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC25.html',
  },
  {
    imageUrl: "./images/DOC26.jpg",
    title: "Dr. L. Joseph Parker",
    description: "Can we finally say goodbye to opioids? There may be new pain relief on the horizon.",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC26.html',
  },
  {
    imageUrl: "./images/DOC27.jpeg",
    title: "Dr. Alexis Gopal",
    description: "The body positivity movement: Has it become toxic?.",
    buttonLabel: "Find out more",
    buttonIcon: "arrow_right_alt",
    link: 'URLs/DOC27.html',
  }
];


const cardsContainer = document.getElementById('cards-container');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const pagination = document.getElementById('pagination'); 
const pageLinks = document.querySelectorAll('.page-link');
const pageNumbers = document.getElementById('page-numbers');
let currentPage = 0;
const cardsPerPage = 10;

let currentIndex = 0;

// Function to show the current card
function showCurrentCard() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    if (index === currentIndex) {
      card.classList.remove('slide-next', 'slide-previous');
    } else if (index < currentIndex) {
      card.classList.remove('slide-next');
      card.classList.add('slide-previous');
    } else {
      card.classList.remove('slide-previous');
      card.classList.add('slide-next');
    }
  });
}

// Function to display cards for the current page
function displayCards() {
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cardData.slice(startIndex, endIndex);
  cardsContainer.innerHTML = '';
  currentCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
  <img src="${card.imageUrl}" alt="${card.title}" />
  <div class="card-content">
    <h2>${card.title}</h2>
    <p>${card.description}</p>
    <a href="${card.link}" target="_blank" class="button">Find out more <span class="material-symbols-outlined">${card.buttonIcon}</span></a>
      </div>
  </div>
`;
    cardsContainer.appendChild(cardElement);


    // Create card content container
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('card-content');
    cardElement.appendChild(contentContainer);


    // Create anchor element
    const anchorElement = document.createElement('a');
    anchorElement.href = "${card.link}";
    anchorElement.target = "_blank";
    anchorElement.textContent = "Find out more";


  });
  updateButtons();
}

// Function to update pagination buttons
function updateButtons() {
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage >= Math.ceil(cardData.length / cardsPerPage) - 1;
}

// Function to navigate to the previous page
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    displayCards();
  }
}

// Function to navigate to the next page
function nextPage() {
  if (currentPage < Math.ceil(cardData.length / cardsPerPage) - 1) {
    currentPage++;
    displayCards();
  }
}

// Add event listeners to pagination buttons
prevButton.addEventListener('click', prevPage);
nextButton.addEventListener('click', nextPage);

// Display initial cards
displayCards();

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle("show");
}

function openSidebar(content) {
  document.getElementById('sidebar').classList.toggle("show");
  // You can add logic here to handle the content based on the clicked link (patient, doctor, community, help)
  console.log("Clicked on: " + content);
}


pageLinks.forEach((link) => { 
  link.addEventListener('click', (e) => { 
      e.preventDefault(); 
      const page = parseInt(link.getAttribute('data-page')); 
      if (page !== currentPage) { 
          currentPage = page; 
          displayPage(currentPage); 
          updatePagination(); 
      } 
  }); 
}); 

displayPage(currentPage); 
updatePagination();