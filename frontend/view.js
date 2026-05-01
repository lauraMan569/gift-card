const resultType = document.getElementById("resultType");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const resultAmount = document.getElementById("resultAmount");
const resultAddress = document.getElementById("resultAddress");
const resultContacts = document.getElementById("resultContacts");


const backResultType = document.getElementById("backResultType");
const backResultTitle = document.getElementById("backResultTitle");
const backResultMessage = document.getElementById("backResultMessage");
const backResultAmount = document.getElementById("backResultAmount");
const backResultAddress = document.getElementById("backResultAddress");
const backResultContacts = document.getElementById("backResultContacts");


const envelopeScreen = document.getElementById("envelopeScreen");
const frontCardScreen = document.getElementById("frontCardScreen");
const backCardScreen = document.getElementById("backCardScreen");

const openBtn = document.getElementById("openBtn");
const animatedEnvelope = document.getElementById("animatedEnvelope");

/*Переключение сторон (первая / вторая)*/
const frontToggleSideBtn = document.getElementById("frontToggleSideBtn");
const backToggleSideBtn = document.getElementById("backToggleSideBtn");


/*Кнопка "Назад" (с карты → к конверту)*/
const frontBackBtn = document.getElementById("frontBackBtn");
const backBackBtn = document.getElementById("backBackBtn");





const giftCard = document.getElementById("giftCard");
const cardLogo = document.getElementById("cardLogo");
const cardLogoWrap = document.getElementById("cardLogoWrap");
const cardUserBg = document.getElementById("cardUserBg");
const cardContent = document.querySelector("#giftCard .card-content");


const backGiftCard = document.getElementById("backGiftCard");
const backCardLogo = document.getElementById("backCardLogo");
const backCardLogoWrap = document.getElementById("backCardLogoWrap");
const backCardUserBg = document.getElementById("backCardUserBg");
const backCardContent = document.querySelector("#backGiftCard .card-content");

let currentCardData = null;




function generateSharedBackgroundPalette(count = 24) {
  const palette = [];

  for (let i = 0; i < count; i++) {
    const hue = Math.floor(Math.random() * 360);

    palette.push(`
      linear-gradient(135deg,
        hsl(${hue}, 80%, 85%),
        hsl(${hue}, 70%, 70%)
      )
    `);
  }

  return palette;
}

function createBackgroundCards() {
  const grids = document.querySelectorAll(".bg-grid");
  const sharedPalette = generateSharedBackgroundPalette(24);

  grids.forEach(grid => {
    grid.innerHTML = "";

    sharedPalette.forEach(backgroundValue => {
      const el = document.createElement("div");
      el.className = "bg-card";
      el.style.background = backgroundValue;
      grid.appendChild(el);
    });
  });
}

createBackgroundCards();function generateSharedBackgroundPalette(count = 24) {
  const palette = [];

  for (let i = 0; i < count; i++) {
    const hue = Math.floor(Math.random() * 360);

    palette.push(`
      linear-gradient(135deg,
        hsl(${hue}, 80%, 85%),
        hsl(${hue}, 70%, 70%)
      )
    `);
  }

  return palette;
}

function createBackgroundCards() {
  const grids = document.querySelectorAll(".bg-grid");
  const sharedPalette = generateSharedBackgroundPalette(24);

  grids.forEach(grid => {
    grid.innerHTML = "";

    sharedPalette.forEach(backgroundValue => {
      const el = document.createElement("div");
      el.className = "bg-card";
      el.style.background = backgroundValue;
      grid.appendChild(el);
    });
  });
}
createBackgroundCards();





function applyTextStyles(textColor, fontFamily) {
  document.documentElement.style.setProperty("--card-text", textColor || "#2f2f2f");
  document.documentElement.style.setProperty("--card-font", fontFamily || "Arial, sans-serif");
}


function formatAmount(value) {
  const raw = String(value || "").trim();

  if (!raw) return "";
  if (/[₽$€¥£]/.test(raw)) return raw;
  if (/^\d+$/.test(raw)) return raw + " ₽";
  return raw;
}


function setTextOrHide(element, value) {
  if (value) {
    element.textContent = value;
    element.style.display = "";
    element.classList.remove("hidden");
  } else {
    element.textContent = "";
    element.style.display = "none";
  }
}


function setInfoOrHide(element, value) {
  if (value) {
    element.textContent = value;
    element.classList.remove("hidden");
  } else {
    element.textContent = "";
    element.classList.add("hidden");
  }
}


/*свое*/
function applyColors(cardColor, envelopeColor, textColor, fontFamily) {
  document.documentElement.style.setProperty("--card-bg", cardColor || "#ffffff");
  document.documentElement.style.setProperty("--env-main", envelopeColor || "#cccccc");
  applyTextStyles(textColor, fontFamily);
}




/*.     */
function applyImageSize(sizeValue) {
  cardLogoWrap.classList.remove("logo-small", "logo-medium", "logo-large");
  cardUserBg?.classList.remove("bg-small", "bg-medium", "bg-large");

  if (sizeValue === "small") {
    cardLogoWrap.classList.add("logo-small");
    cardUserBg?.classList.add("bg-small");
  } else if (sizeValue === "large") {
    cardLogoWrap.classList.add("logo-large");
    cardUserBg?.classList.add("bg-large");
  } else {
    cardLogoWrap.classList.add("logo-medium");
    cardUserBg?.classList.add("bg-medium");
  }
}

function applyBackImageSize(sizeValue) {
  backCardLogoWrap.classList.remove("logo-small", "logo-medium", "logo-large");
  backCardUserBg.classList.remove("bg-small", "bg-medium", "bg-large");

  if (sizeValue === "small") {
    backCardLogoWrap.classList.add("logo-small");
    backCardUserBg.classList.add("bg-small");
  } else if (sizeValue === "large") {
    backCardLogoWrap.classList.add("logo-large");
    backCardUserBg.classList.add("bg-large");
  } else {
    backCardLogoWrap.classList.add("logo-medium");
    backCardUserBg.classList.add("bg-medium");
  }
}




/*.     */
function applyLogoPosition(positionValue) {
  cardLogoWrap.classList.remove(
    "logo-top-left",
    "logo-top-right",
  );

cardContent.classList.remove("shift-right", "shift-left", "shift-down");

  if (positionValue === "top-left") {
    cardLogoWrap.classList.add("logo-top-left");
    cardContent.classList.add("shift-right");
  } else if (positionValue === "top-right") {
    cardLogoWrap.classList.add("logo-top-right");
    cardContent.classList.add("shift-left");
  }
}

function applyBackLogoPosition(positionValue) {
  backCardLogoWrap.classList.remove("logo-top-left", "logo-top-right");

  backCardContent.classList.remove("shift-right", "shift-left", "shift-down");

  if (positionValue === "top-left") {
    backCardLogoWrap.classList.add("logo-top-left");
    backCardContent.classList.add("shift-right");
  } else if (positionValue === "top-right") {
    backCardLogoWrap.classList.add("logo-top-right");
    backCardContent.classList.add("shift-left");
  }
}













function renderType(data) {
  let text = "";

  if (data.type === "card") {
    text = "Подарочная карта";
  } else if (data.type === "certificate") {
    text = "Сертификат";
  }

  setTextOrHide(resultType, text);
  setTextOrHide(backResultType, text);

}

function renderFront(data) {
  setTextOrHide(resultTitle, data.title);
  setTextOrHide(resultMessage, data.message);

  if (data.amount) {
    resultAmount.textContent = formatAmount(data.amount);
    resultAmount.parentElement.style.display = "";

  } else {
    resultAmount.textContent = "";
    resultAmount.parentElement.style.display = "none";
  }

  setInfoOrHide(resultAddress, data.address);
  setInfoOrHide(resultContacts, data.contacts);

  const hasTitle = Boolean(data.title);
  const hasMessage = Boolean(data.message);
  const hasAmount = Boolean(data.amount);

  resultTitle.classList.toggle("with-divider", hasTitle && hasMessage);
  resultAmount.parentElement.classList.toggle("with-divider", hasAmount && (hasTitle || hasMessage));
}

function renderBack(data) {
  setTextOrHide(backResultTitle, data.backTitle);
  setTextOrHide(backResultMessage, data.backMessage);

  if (data.backAmount) {
    backResultAmount.textContent = formatAmount(data.backAmount);
    backResultAmount.parentElement.style.display = "";
  } else {
    backResultAmount.textContent = "";
    backResultAmount.parentElement.style.display = "none";
  }

  setInfoOrHide(backResultAddress, data.backAddress);
  setInfoOrHide(backResultContacts, data.backContacts);

  const hasBackTitle = Boolean(data.backTitle);
  const hasBackMessage = Boolean(data.backMessage);
  const hasBackAmount = Boolean(data.backAmount);

  backResultTitle.classList.toggle("with-divider", hasBackTitle && hasBackMessage);
  backResultAmount.parentElement.classList.toggle("with-divider", hasBackAmount && (hasBackTitle || hasBackMessage));
}

function renderFrontImage(data) {
  if (!data.logoSrc) {
    cardLogo.removeAttribute("src");
    cardLogoWrap.classList.add("hidden");
    cardUserBg.classList.add("hidden");
    giftCard.classList.remove("has-user-background");
    return;
  }

  if (data.imageMode === "background") {
    cardLogo.removeAttribute("src");
    cardLogoWrap.classList.add("hidden");
    giftCard.classList.add("has-user-background");
    cardUserBg.classList.remove("hidden");
    cardUserBg.style.backgroundImage = `url(${data.logoSrc})`;
    cardUserBg.style.opacity = String(Number(data.imageOpacity || 100) / 100);

    applyImageSize(data.imageSize);

  } else {
    giftCard.classList.remove("has-user-background");
    cardUserBg.classList.add("hidden");
    cardLogo.src = data.logoSrc;
    cardLogo.style.opacity = String(Number(data.imageOpacity || 100) / 100);
    cardLogoWrap.classList.remove("hidden");

    applyImageSize(data.imageSize);
    applyLogoPosition(data.logoPosition);
  }
}

function renderBackImage(data) {
  if (!data.backLogoSrc) {
    backCardLogo.removeAttribute("src");
    backCardLogoWrap.classList.add("hidden");
    backCardUserBg.classList.add("hidden");
    backGiftCard.classList.remove("has-user-background");
    return;
  }

  if (data.backImageMode === "background") {
    backCardLogo.removeAttribute("src");
    backCardLogoWrap.classList.add("hidden");

    backGiftCard.classList.add("has-user-background");
    backCardUserBg.classList.remove("hidden");
    backCardUserBg.style.backgroundImage = `url(${data.backLogoSrc})`;
    backCardUserBg.style.opacity = String(Number(data.backImageOpacity || 100) / 100);

    applyBackImageSize(data.backImageSize);

  } else {
    backGiftCard.classList.remove("has-user-background");
    backCardUserBg.classList.add("hidden");
    backCardLogo.src = data.backLogoSrc;
    backCardLogo.style.opacity = String(Number(data.backImageOpacity || 100) / 100);
    backCardLogoWrap.classList.remove("hidden");

    applyBackImageSize(data.backImageSize);
    applyBackLogoPosition(data.backLogoPosition);
  }
}

function applySidesMode() {
  const isDouble = currentCardData?.sidesMode === "double";

  backCardScreen.classList.add("hidden");

  if (frontToggleSideBtn) {
    frontToggleSideBtn.classList.toggle("hidden", !isDouble);
  }

  if (backToggleSideBtn) {
    backToggleSideBtn.classList.toggle("hidden", !isDouble);
  }
}








function showEnvelopeScreen() {
  envelopeScreen.classList.remove("hidden");
  frontCardScreen.classList.add("hidden");
  backCardScreen.classList.add("hidden");

    animatedEnvelope.classList.remove(
    "flap-open",
    "card-out",
    "card-zoom",
    "fade-out"
  );

  openBtn.disabled = false;
}



function openEnvelopeAnimation() {
  openBtn.disabled = true;

  animatedEnvelope.classList.remove(
    "flap-open",
    "card-out",
    "card-zoom",
    "fade-out"
  );

  void animatedEnvelope.offsetWidth;

  setTimeout(() => {
    animatedEnvelope.classList.add("flap-open");
  }, 50);

  setTimeout(() => {
    animatedEnvelope.classList.add("card-out");
  }, 1500);

  setTimeout(() => {
    animatedEnvelope.classList.add("card-zoom");
  }, 2600);

  setTimeout(() => {
    animatedEnvelope.classList.add("fade-out");
  }, 4700);

  setTimeout(() => {
    envelopeScreen.classList.add("screen-fade-out");
  }, 5500);

  setTimeout(() => {
    envelopeScreen.classList.add("hidden");
    envelopeScreen.classList.remove("screen-fade-out");

    frontCardScreen.classList.remove("hidden");
    frontCardScreen.classList.add("screen-fade-in");

    backCardScreen.classList.add("hidden");

    animatedEnvelope.classList.remove(
      "flap-open",
      "card-out",
      "card-zoom",
      "fade-out"
    );

    openBtn.disabled = false;
  }, 7400);
}

/*openBtn.onclick = openEnvelopeAnimation;
showEnvelopeScreen();*/






function showFrontSide() {
  frontCardScreen.classList.remove("hidden");
  backCardScreen.classList.add("hidden");
}

function showBackSide() {
  const isDouble = currentCardData?.sidesMode === "double";

  if (!isDouble) return;
  frontCardScreen.classList.add("hidden");
  backCardScreen.classList.remove("hidden");
}

async function loadCard() {

  const cardId = window.location.pathname.split("/").pop();
  const response = await fetch(`/api/cards/${cardId}`);
  const data = await response.json();

  currentCardData = data;

  applyColors(data.cardColor, data.envelopeColor, data.textColor, data.fontFamily);

  renderType(data);
  renderFront(data);
  renderBack(data);
  renderFrontImage(data);
  renderBackImage(data);

  applySidesMode();
  showEnvelopeScreen();

}
openBtn.onclick = openEnvelopeAnimation;

if (frontBackBtn) {
  frontBackBtn.onclick = showEnvelopeScreen;
}

if (backBackBtn) {
  backBackBtn.onclick = showEnvelopeScreen;
}

if (frontToggleSideBtn) {
  frontToggleSideBtn.onclick = showBackSide;
}

if (backToggleSideBtn) {
  backToggleSideBtn.onclick = showFrontSide;
}

loadCard();