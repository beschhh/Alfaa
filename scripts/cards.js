const CARD_CATEGORIES = {
  all: new Array(8).fill({ href: "#" }),
  "small-business": new Array(8).fill({ href: "#" }),
  "large-business": new Array(8).fill({ href: "#" }),
};

let segmentedControl = document.querySelector(".segmented-control");
let controlBackground = document.querySelector("[data-card-background]");
let controlButtons = document.querySelectorAll("[data-card-category]");
let cardsContainer = document.querySelector("[data-cards-container]");

renderCards("all");

controlButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderCards(button.dataset.cardCategory);

    for (let button of controlButtons) {
      button.classList.remove("active");
    }

    controlBackground.style.left = `${button.getBoundingClientRect().left - segmentedControl.getBoundingClientRect().left}px`;
    button.classList.add("active");
  });
});

function renderCards(category) {
  cardsContainer.innerHTML = "";

  CARD_CATEGORIES[category].forEach((card) => {
    let cardElement = document.createElement("a");
    cardElement.classList.add("card");
    cardElement.href = card.href;
    cardsContainer.appendChild(cardElement);
  });
}



let depositSwitcher = document.querySelector("[data-deposit-switcher]");
let depositBackground = document.querySelector("[data-deposit-background]");
let depositButtons = document.querySelectorAll("[data-deposit-tab]");
let depositCards = document.querySelectorAll(".cashback-text, .phone-card");

let depositColors = {
  deposit: "#ef3124",
  account: "#ff8a00",
  credit: "#2563eb",
  mortgage: "#22c55e",
};

depositButtons.forEach((button) => {
  button.addEventListener("click", () => {
    for (let button of depositButtons) {
      button.classList.remove("active");
    }

    depositBackground.style.left = `${button.offsetLeft}px`;
    depositBackground.style.width = `${button.offsetWidth}px`;

    button.classList.add("active");

    let color = depositColors[button.dataset.depositTab];

    depositCards.forEach((card) => {
      card.style.background = color;
    });
  });
});

let offersSwitcher = document.querySelector("[data-offers-switcher]");
let offersBackground = document.querySelector("[data-offers-background]");
let offerButtons = document.querySelectorAll("[data-offer-tab]");
let offerCards = document.querySelectorAll(".offer-card, .wide-link");

let offerColors = {
  mobile: "#ef3124",
  travel: "#ff8a00",
  poster: "#8b5cf6",
  gas: "#22c55e",
  payments: "#2563eb",
  insurance: "#ec4899",
};

offerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    for (let button of offerButtons) {
      button.classList.remove("active");
    }

    offersBackground.style.left = `${button.offsetLeft}px`;
    offersBackground.style.width = `${button.offsetWidth}px`;

    button.classList.add("active");

    let color = offerColors[button.dataset.offerTab];

    offerCards.forEach((card) => {
      card.style.background = color;
    });
  });
});

let aboutSwitcher = document.querySelector("[data-about-switcher]");
let aboutBackground = document.querySelector("[data-about-background]");
let aboutButtons = document.querySelectorAll("[data-about-tab]");
let aboutCards = document.querySelectorAll(".about-card");

aboutButtons.forEach((button) => {
  button.addEventListener("click", () => {
    for (let button of aboutButtons) {
      button.classList.remove("active");
    }

    aboutBackground.style.left = `${button.getBoundingClientRect().left - aboutSwitcher.getBoundingClientRect().left}px`;
    button.classList.add("active");

    if (button.dataset.aboutTab === "roles") {
      aboutCards.forEach((card) => {
        card.classList.add("about-card-red");
      });
    } else {
      aboutCards.forEach((card) => {
        card.classList.remove("about-card-red");
      });
    }
  });
});