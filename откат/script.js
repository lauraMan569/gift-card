const createScreen = document.getElementById("createScreen");
const envelopeScreen = document.getElementById("envelopeScreen");
const frontCardScreen = document.getElementById("frontCardScreen");
const backCardScreen = document.getElementById("backCardScreen");
const accountScreen = document.getElementById("accountScreen");

const continueBtn = document.getElementById("continueBtn");
const openBtn = document.getElementById("openBtn");

const sideTitles = document.querySelectorAll(".side-title");

const frontBackBtn = document.getElementById("frontBackBtn");
const frontDownloadBtn = document.getElementById("frontDownloadBtn");
const frontToggleSideBtn = document.getElementById("frontToggleSideBtn");

const backBackBtn = document.getElementById("backBackBtn");
const backDownloadBtn = document.getElementById("backDownloadBtn");
const backToggleSideBtn = document.getElementById("backToggleSideBtn");

//отправить
const frontShareBtn = document.getElementById("frontShareBtn");
const backShareBtn = document.getElementById("backShareBtn");

const giftType = document.getElementById("giftType");
const resultType = document.getElementById("resultType");

const cardColorInput = document.getElementById("cardColorInput");
const envelopeColorInput = document.getElementById("envelopeColorInput"); 
/*цвет текста +*/
const textColorInput = document.getElementById("textColorInput");
const fontSelect = document.getElementById("fontSelect");

const paletteCards = document.querySelectorAll(".palette-card");


/*пример шрифтов*/
const fontPreviewText = document.getElementById("fontPreviewText");

/*первая сторона*/
const titleInput = document.getElementById("titleInput");
const messageInput = document.getElementById("messageInput");
const amountInput = document.getElementById("amountInput");
const addressInput = document.getElementById("addressInput");
const contactsInput = document.getElementById("contactsInput");

const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const resultAmount = document.getElementById("resultAmount");
const resultAddress = document.getElementById("resultAddress");
const resultContacts = document.getElementById("resultContacts");
/*картинки*/
const logoInput = document.getElementById("logoInput");
const logoPosition = document.getElementById("logoPosition");
/**/
const imageModeWrap = document.getElementById("imageModeWrap");
const logoPositionWrap = document.getElementById("logoPositionWrap");
const imageSizeWrap = document.getElementById("imageSizeWrap");
const imageOpacityWrap = document.getElementById("imageOpacityWrap");
const logoHint = document.getElementById("logoHint");
/*прозрачность*/
const imageOpacity = document.getElementById("imageOpacity");
const imageOpacityValue = document.getElementById("imageOpacityValue");
const cardUserBg = document.getElementById("cardUserBg");

/*конверт*/
const animatedEnvelope = document.getElementById("animatedEnvelope");
const giftSheet = document.getElementById("giftSheet");
const imageMode = document.getElementById("imageMode");
const cardContent = document.querySelector(".card-content");
const imageSize = document.getElementById("imageSize");

/*финал*/
const giftCard = document.getElementById("giftCard");
const cardLogo = document.getElementById("cardLogo");
const cardLogoWrap = document.getElementById("cardLogoWrap");

/*вторая сторона*/
const cardSidesMode = document.getElementById("cardSidesMode");

const backSideEditor = document.getElementById("backSideEditor");

const backSideNotice = document.getElementById("backSideNotice");
const backSideNotice2 = document.getElementById("backSideNotice2");

const backTitleInput = document.getElementById("backTitleInput");
const backMessageInput = document.getElementById("backMessageInput");
const backAmountInput = document.getElementById("backAmountInput");
const backAddressInput = document.getElementById("backAddressInput");
const backContactsInput = document.getElementById("backContactsInput");

const backResultType = document.getElementById("backResultType");
const backResultTitle = document.getElementById("backResultTitle");
const backResultMessage = document.getElementById("backResultMessage");
const backResultAmount = document.getElementById("backResultAmount");
const backResultAddress = document.getElementById("backResultAddress");
const backResultContacts = document.getElementById("backResultContacts");

const backCardContent = document.querySelector("#backGiftCard .card-content");
const backAmountWrap = backResultAmount.parentElement;
//
const backLogoInput = document.getElementById("backLogoInput");
const backImageMode = document.getElementById("backImageMode");
const backLogoPosition = document.getElementById("backLogoPosition");
const backImageOpacity = document.getElementById("backImageOpacity");
const backImageSize = document.getElementById("backImageSize");

const backImageModeWrap = document.getElementById("backImageModeWrap");
const backLogoPositionWrap = document.getElementById("backLogoPositionWrap");
const backImageSizeWrap = document.getElementById("backImageSizeWrap");
const backImageOpacityWrap = document.getElementById("backImageOpacityWrap");
const backLogoHint = document.getElementById("backLogoHint");
const backImageOpacityValue = document.getElementById("backImageOpacityValue");

const backGiftCard = document.getElementById("backGiftCard");
const backCardLogo = document.getElementById("backCardLogo");
const backCardLogoWrap = document.getElementById("backCardLogoWrap");
const backCardUserBg = document.getElementById("backCardUserBg");

let giftData = {
  logoSrc: "",
  imageMode: "logo",
  imageOpacity: "100",
  imageSize: "medium",

  backLogoSrc: "",
  backImageMode: "logo",
  backImageOpacity: "100",
  backImageSize: "medium",

  logoPosition: "top-right",
  backLogoPosition: "top-right",

  sidesMode: "single",

/*  layoutTemplate: null,

  title: "",
  message: "",
  amount: "",
  address: "",
  contacts: "",
  */

  cardColor: "#c9d4ff",
  textColor: "#506bff",
  fontFamily: "Arial, sans-serif"
};
/*const layoutClasses = ["layout-classic", "layout-left", "layout-right"];
const logoClasses = ["logo-top-left", "logo-top-right", "logo-top-center"];
*/



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



const hintBtn = document.getElementById("formatHint");
const hintPopup = document.getElementById("formatHintPopup");

if (hintBtn && hintPopup) {
  hintBtn.onclick = (e) => {
    e.stopPropagation();
    hintPopup.classList.toggle("show");
  };

  document.addEventListener("click", () => {
    hintPopup.classList.remove("show");
  });
}



const previewExampleEnvelopes = document.querySelectorAll(".preview-example-envelope");
previewExampleEnvelopes.forEach(item => {
  item.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // закрыть остальные сразу
    previewExampleEnvelopes.forEach(el => {
      if (el !== item) {
        el.classList.remove("opening", "open", "closing-card", "closing-flap");
      }
    });

    if (!isOpen) {
      // ОТКРЫТИЕ:
      // 1. открываем клапан
      item.classList.remove("closing-card", "closing-flap");
      item.classList.add("opening");

      // 2. потом выезжает карта
      setTimeout(() => {
        item.classList.add("open");
      }, 320);

    } else {
      // ЗАКРЫТИЕ:
      // 1. карта уезжает внутрь
      item.classList.remove("open");
      item.classList.add("closing-card");

      // 2. потом закрывается клапан
      setTimeout(() => {
        item.classList.remove("opening");
        item.classList.add("closing-flap");
      }, 320);

      // 3. очистка состояний
      setTimeout(() => {
        item.classList.remove("closing-card", "closing-flap");
      }, 700);
    }
  });
});



const previewDemoCards = document.querySelectorAll(".mini-preview-card");
function generatePreviewCardPalette(usedHues = []) {
  let baseHue;
  let attempts = 0;

  do {
    baseHue = Math.floor(Math.random() * 360);
    attempts++;
  } while (
    usedHues.some(h => {
      const diff = Math.abs(h - baseHue);
      return diff < 40 || diff > 320;
    }) &&
    attempts < 100
  );

  const cardColor = hslToString(baseHue, 90, 82);
  const backColor = hslToString(baseHue, 70, 68);
  const flapColor = hslToString(baseHue, 70, 68);
  const frontColor = hslToString(baseHue, 76, 76);
  const textColor = hslToString(baseHue, 42, 30);

  return {
    baseHue,
    cardColor,
    backColor,
    flapColor,
    frontColor,
    textColor
  };
}

function fillPreviewDemoCards() {
  const usedHues = [];

  previewDemoCards.forEach(card => {
    const wrap = card.closest(".preview-example-envelope");
    const back = wrap.querySelector(".mini-preview-back");
    const front = wrap.querySelector(".mini-preview-front");
    const flap = wrap.querySelector(".mini-preview-flap");

    const palette = generatePreviewCardPalette(usedHues);
    usedHues.push(palette.baseHue);

    card.style.background = palette.cardColor;
    card.style.setProperty("--demo-line-color", palette.textColor);

    back.style.background = palette.backColor;
    flap.style.background = palette.flapColor;
    front.style.background = palette.frontColor;
  });
}
fillPreviewDemoCards();




  backTitleInput.addEventListener("input", updateBackSideNotice);
  backMessageInput.addEventListener("input", updateBackSideNotice);
  backAmountInput.addEventListener("input", updateBackSideNotice);
  backAddressInput.addEventListener("input", updateBackSideNotice);
  backContactsInput.addEventListener("input", updateBackSideNotice);

function updateBackSideNotice() {
  const isDouble = cardSidesMode.value === "double";

  const hasBackTitle = backTitleInput.value.trim() !== "";
  const hasBackMessage = backMessageInput.value.trim() !== "";
  const hasBackAmount = backAmountInput.value.trim() !== "";
  const hasBackAddress = backAddressInput.value.trim() !== "";
  const hasBackContacts = backContactsInput.value.trim() !== "";

  const hasBackImage = Boolean(giftData.backLogoSrc);

  const hasAnyBackContent =
    hasBackTitle ||
    hasBackMessage ||
    hasBackAmount ||
    hasBackAddress ||
    hasBackContacts ||
    hasBackImage;

  if (isDouble && !hasAnyBackContent) {
    backSideNotice.classList.remove("hidden");
  } else {
    backSideNotice.classList.add("hidden");
  }
}

titleInput.addEventListener("input", updateFrontSideNotice);
messageInput.addEventListener("input", updateFrontSideNotice);
amountInput.addEventListener("input", updateFrontSideNotice);
addressInput.addEventListener("input", updateFrontSideNotice);
contactsInput.addEventListener("input", updateFrontSideNotice);

const frontSideNotice = document.getElementById("frontSideNotice");

function updateFrontSideNotice() {
  const hasTitle = titleInput.value.trim() !== "";
  const hasMessage = messageInput.value.trim() !== "";
  const hasAmount = amountInput.value.trim() !== "";
  const hasAddress = addressInput.value.trim() !== "";
  const hasContacts = contactsInput.value.trim() !== "";

  const hasImage = Boolean(giftData.logoSrc);

  const hasAnyContent =
    hasTitle ||
    hasMessage ||
    hasAmount ||
    hasAddress ||
    hasContacts ||
    hasImage;

  if (!hasAnyContent) {
    frontSideNotice.classList.remove("hidden");
  } else {
    frontSideNotice.classList.add("hidden");
  }
}



function checkBackSideDifferences() {
  if (cardSidesMode.value !== "double") {
    backSideNotice2.classList.add("hidden");
    return;
  }

  const frontData = [
    amountInput.value.trim(),
    addressInput.value.trim(),
    contactsInput.value.trim()
  ];

  const backData = [
    backAmountInput.value.trim(),
    backAddressInput.value.trim(),
    backContactsInput.value.trim()
  ];

  const hasDifference =
    frontData[0] !== backData[0] ||
    frontData[1] !== backData[1] ||
    frontData[2] !== backData[2];

  if (hasDifference) {
    backSideNotice2.classList.remove("hidden");

    backSideNotice2.innerHTML = `
      <p>
        Проверьте данные второй стороны.
        Сумма, адрес или контакты отличаются от первой стороны.
      </p>`;
  } else {
    backSideNotice2.classList.add("hidden");
  }
}

[
  amountInput,
  addressInput,
  contactsInput,
  backAmountInput,
  backAddressInput,
  backContactsInput,
  cardSidesMode
].forEach(el => {
  el.addEventListener("input", checkBackSideDifferences);
  el.addEventListener("change", checkBackSideDifferences);
});

checkBackSideDifferences();








function updateFontPreview() {
  fontPreviewText.style.fontFamily = fontSelect.value;
}
fontSelect.addEventListener("change", updateFontPreview);
updateFontPreview();


function getRootVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
function initDefaultColorsFromRoot() {
  const rootCard = getRootVar("--card-bg");
  const rootEnvelope = getRootVar("--env-main");
  const rootText = getRootVar("--card-text");

  cardColorInput.value = rootCard;
  envelopeColorInput.value = rootEnvelope;
  textColorInput.value = rootText;

  giftData.cardColor = rootCard;
  giftData.envelopeColor = rootEnvelope;
  giftData.textColor = rootText;

  applyCustomColors(rootCard, rootEnvelope);
  applyTextStyles(rootText, giftData.fontFamily);
}


//прозрачность
function updateOpacityValue() {
  const min = Number(imageOpacity.min);
  const max = Number(imageOpacity.max);
  const value = Number(imageOpacity.value);

  const percent = ((value - min) / (max - min)) * 100;

  imageOpacityValue.textContent = value + "%";
  imageOpacityValue.style.left = `calc(${percent}% + (${8 - percent * 0.16}px))`;
}
imageOpacity.addEventListener("input", updateOpacityValue);
updateOpacityValue();


function updateBackOpacityValue() {
  const min = Number(backImageOpacity.min);
  const max = Number(backImageOpacity.max);
  const value = Number(backImageOpacity.value);

  const percent = ((value - min) / (max - min)) * 100;

  backImageOpacityValue.textContent = value + "%";
  backImageOpacityValue.style.left = `calc(${percent}% + (${8 - percent * 0.16}px))`;
}
backImageOpacity.addEventListener("input", updateBackOpacityValue);
updateBackOpacityValue();


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
function updateCardSidesUI() {
  const isDouble = cardSidesMode.value === "double";

  if (isDouble) {
    backSideEditor.classList.remove("hidden");
  } else {
    backSideEditor.classList.add("hidden");
  }

    // 👇 ВОТ ТВОЯ ЛОГИКА
sideTitles.forEach(function (title) {
  title.classList.toggle("hidden", cardSidesMode.value === "single");
});

  if (frontToggleSideBtn) {
    frontToggleSideBtn.classList.toggle("hidden", !isDouble);
  }

  if (backToggleSideBtn) {
    backToggleSideBtn.classList.toggle("hidden", !isDouble);
  }
}

/*.     */
function updateImageControlsUI() {
  const hasImage = Boolean(giftData.logoSrc);

  if (!hasImage) {
    imageModeWrap.classList.add("hidden");
    logoPositionWrap.classList.add("hidden");
    imageSizeWrap.classList.add("hidden");
    imageOpacityWrap.classList.add("hidden");
    logoHint.classList.add("hidden");
    return;
  }

  imageModeWrap.classList.remove("hidden");
  imageOpacityWrap.classList.remove("hidden");

  if (imageMode.value === "background") {
    logoPositionWrap.classList.add("hidden");
    imageSizeWrap.classList.add("hidden");
    logoHint.classList.add("hidden");
  } else {
    logoPositionWrap.classList.remove("hidden");
    imageSizeWrap.classList.remove("hidden");
    logoHint.classList.remove("hidden");
  }
}

function updateBackImageControlsUI() {
  const hasImage = Boolean(giftData.backLogoSrc);

  if (!hasImage) {
    backImageModeWrap.classList.add("hidden");
    backLogoPositionWrap.classList.add("hidden");
    backImageSizeWrap.classList.add("hidden");
    backImageOpacityWrap.classList.add("hidden");
    backLogoHint.classList.add("hidden");
    return;
  }

  backImageModeWrap.classList.remove("hidden");
  backImageOpacityWrap.classList.remove("hidden");

  if (backImageMode.value === "background") {
    backLogoPositionWrap.classList.add("hidden");
    backImageSizeWrap.classList.add("hidden");
    backLogoHint.classList.add("hidden");
  } else {
    backLogoPositionWrap.classList.remove("hidden");
    backImageSizeWrap.classList.remove("hidden");
    backLogoHint.classList.remove("hidden");
  }
}

cardSidesMode.addEventListener("change", updateCardSidesUI);

cardSidesMode.addEventListener("change", updateBackSideNotice);

imageMode.addEventListener("change", updateImageControlsUI);
backImageMode.addEventListener("change", updateBackImageControlsUI);

fontSelect.addEventListener("change", updateFontPreview);

imageOpacity.addEventListener("input", updateOpacityValue);
backImageOpacity.addEventListener("input", updateBackOpacityValue);

updateFontPreview();
updateOpacityValue();
updateBackOpacityValue();
updateCardSidesUI();
updateImageControlsUI();
updateBackImageControlsUI();
initDefaultColorsFromRoot();

updateBackSideNotice();
updateFrontSideNotice();

/*.     */
function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);

  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

function mixWith(hex, target, amount) {
  const base = hexToRgb(hex);
  const t = target === "white"
    ? { r: 255, g: 255, b: 255 }
    : { r: 0, g: 0, b: 0 };

  const r = Math.round(base.r + (t.r - base.r) * amount);
  const g = Math.round(base.g + (t.g - base.g) * amount);
  const b = Math.round(base.b + (t.b - base.b) * amount);

  return `rgb(${r}, ${g}, ${b})`;
}


function getTextColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? "#2b2230" : "#f8e9ef";
}

function applyTextStyles(textColor, fontFamily) {
  document.documentElement.style.setProperty("--card-text", textColor);
  document.documentElement.style.setProperty("--card-font", fontFamily);
}


function applyPalette(cardColor, envelopeColor, textColor) {
  cardColorInput.value = cardColor;
  envelopeColorInput.value = envelopeColor;
  textColorInput.value = textColor;

  giftData.cardColor = cardColor;
  giftData.envelopeColor = envelopeColor;
  giftData.textColor = textColor;

  applyCustomColors(cardColor, envelopeColor);
  applyTextStyles(textColor, giftData.fontFamily);
}

paletteCards.forEach(card => {
  card.addEventListener("click", function () {
    const cardColor = this.dataset.card;
    const envelopeColor = this.dataset.envelope;
    const textColor = this.dataset.text;

    applyPalette(cardColor, envelopeColor, textColor);

    paletteCards.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});


function clearActivePalette() {
  paletteCards.forEach(item => item.classList.remove("active"));
}
cardColorInput.addEventListener("input", clearActivePalette);
envelopeColorInput.addEventListener("input", clearActivePalette);
textColorInput.addEventListener("input", clearActivePalette);

cardColorInput.addEventListener("input", () => {
  giftData.cardColor = cardColorInput.value;
  applyCustomColors(giftData.cardColor, giftData.envelopeColor || envelopeColorInput.value);
});

envelopeColorInput.addEventListener("input", () => {
  giftData.envelopeColor = envelopeColorInput.value;
  applyCustomColors(giftData.cardColor || cardColorInput.value, giftData.envelopeColor);
});

textColorInput.addEventListener("input", () => {
  giftData.textColor = textColorInput.value;
  applyTextStyles(giftData.textColor, giftData.fontFamily);
});



function applyCustomColors(cardHex, envelopeHex) {
  const textColor = getTextColor(cardHex);

  document.documentElement.style.setProperty("--card-bg", cardHex);
  document.documentElement.style.setProperty("--card-text", textColor);
  document.documentElement.style.setProperty("--env-main", envelopeHex);
  applyTextStyles(giftData.textColor, giftData.fontFamily);
}


function formatAmount(value) {
  const raw = String(value).trim();

  if (!raw) return "";
  if (/[₽$€¥£]/.test(raw)) return raw;
  if (/^\d+$/.test(raw)) return raw + " ₽";
  return raw;
}



const autoPaletteBtn = document.getElementById("autoPaletteBtn");
const randomColorsBtn = document.getElementById("randomColorsBtn");


if (autoPaletteBtn) {
  autoPaletteBtn.onclick = function () {
    const cards = document.querySelectorAll(".palette-card");

    if (cards.length === 0) return;

    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];

    randomCard.click();
  };
}
function getRandomColor(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



function hslToString(h, s, l) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}


function generatePalette() {
  const baseHue = Math.floor(Math.random() * 360);

  // карта (светлая)
  const cardColor = hslToString(baseHue, 90, 80);

  // конверт (тот же цвет, но насыщеннее и темнее)
  const envelopeColor = hslToString(baseHue, 70, 55);

  // текст (контрастный)
  const textColor = hslToString(baseHue, 40, 30);

  return {
    cardColor,
    envelopeColor,
    textColor
  };
}
randomColorsBtn.onclick = function () {

  const palette = generatePalette();

  applyPalette(
    palette.cardColor,
    palette.envelopeColor,
    palette.textColor
  );

  // убрать выделение палитр
  const cards = document.querySelectorAll(".palette-card");
  cards.forEach(c => c.classList.remove("active"));
};




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


/*.     */
logoInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (!file) {
    giftData.logoSrc = "";
    updateImageControlsUI();
    updateFrontSideNotice();
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    giftData.logoSrc = e.target.result;
    updateImageControlsUI();
    updateFrontSideNotice();
  };

  reader.readAsDataURL(file);
});


backLogoInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (!file) {
    giftData.backLogoSrc = "";
    updateBackImageControlsUI();
    updateBackSideNotice();
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    giftData.backLogoSrc = e.target.result;
    updateBackImageControlsUI();
    updateBackSideNotice();
  };

  reader.readAsDataURL(file);
});



continueBtn.onclick = async function () {
  /*общие*/
  giftData.type = giftType.value;
  giftData.textColor = textColorInput.value;
  giftData.fontFamily = fontSelect.value;
  giftData.cardColor = cardColorInput.value;
  giftData.envelopeColor = envelopeColorInput.value; 
  applyCustomColors(giftData.cardColor, giftData.envelopeColor);
  applyTextStyles(giftData.textColor, giftData.fontFamily);

  /*первая сторона*/
  giftData.title = titleInput.value.trim();
  giftData.message = messageInput.value.trim();
  giftData.amount = amountInput.value.trim();
  giftData.logoPosition = logoPosition.value;
  giftData.imageMode = imageMode.value;
  giftData.imageOpacity = imageOpacity.value;
  giftData.address = addressInput.value.trim();
  giftData.contacts = contactsInput.value.trim();
  giftData.imageSize = imageSize.value;

  /*общие*/
  giftData.sidesMode = cardSidesMode.value;

  /*вторая сторона*/
  giftData.backTitle = backTitleInput.value.trim();
  giftData.backMessage = backMessageInput.value.trim();
  giftData.backAmount = backAmountInput.value.trim();
//  giftData.backLogoPosition = backLogoPosition.value;
  giftData.backImageMode = backImageMode.value;
  giftData.backImageOpacity = backImageOpacity.value;
  giftData.backAddress = backAddressInput.value.trim();
  giftData.backContacts = backContactsInput.value.trim();
  giftData.backImageSize = backImageSize.value;


const activeImage = giftData.logoSrc;

if (activeImage) {
  if (giftData.imageMode === "background") {
    cardLogo.removeAttribute("src");
    cardLogoWrap.classList.add("hidden");

    cardContent.classList.remove("shift-right", "shift-left", "shift-down");

    giftCard.classList.add("has-user-background");
    cardUserBg.classList.remove("hidden");
    cardUserBg.style.backgroundImage = `url(${activeImage})`;
    cardUserBg.style.opacity = String(Number(giftData.imageOpacity) / 100);
    applyImageSize(giftData.imageSize);
        
    document.documentElement.style.setProperty("--card-text", "#f8e9ef");
    document.documentElement.style.setProperty("--card-line", "rgba(248,233,239,0.20)");

  } else {
    giftCard.classList.remove("has-user-background");
    cardUserBg.classList.add("hidden");
    cardUserBg.style.backgroundImage = "";
    cardUserBg.style.opacity = "1";

    cardLogo.src = activeImage;
    cardLogo.style.opacity = String(Number(giftData.imageOpacity) / 100);
    cardLogoWrap.classList.remove("hidden");

    applyImageSize(giftData.imageSize);
    applyLogoPosition(giftData.logoPosition);
    applyCustomColors(giftData.cardColor, giftData.envelopeColor);
  }
} else {
  cardLogo.removeAttribute("src");
  cardLogo.style.opacity = "1";
  cardLogoWrap.classList.add("hidden");

  giftCard.classList.remove("has-user-background");
  cardUserBg.classList.add("hidden");
  cardUserBg.style.backgroundImage = "";
  cardUserBg.style.opacity = "1";
}


const backActiveImage = giftData.backLogoSrc;

if (backActiveImage) {
  if (giftData.backImageMode === "background") {
    backCardLogo.removeAttribute("src");
    backCardLogoWrap.classList.add("hidden");

    backGiftCard.classList.add("has-user-background");
    backCardUserBg.classList.remove("hidden");
    backCardUserBg.style.backgroundImage = `url(${backActiveImage})`;
    backCardUserBg.style.opacity = String(Number(giftData.backImageOpacity) / 100);
    applyBackImageSize(giftData.imageSize);
        
    document.documentElement.style.setProperty("--card-text", "#f8e9ef");
    document.documentElement.style.setProperty("--card-line", "rgba(248,233,239,0.20)");


  } else {
    backGiftCard.classList.remove("has-user-background");
    backCardUserBg.classList.add("hidden");
    backCardUserBg.style.backgroundImage = "";
    backCardUserBg.style.opacity = "1";

    backCardLogo.src = backActiveImage;
    backCardLogo.style.opacity = String(Number(giftData.backImageOpacity) / 100);
    backCardLogoWrap.classList.remove("hidden");

    applyBackImageSize(giftData.imageSize);
//    applyBackLogoPosition(giftData.backLogoPosition);
    applyCustomColors(giftData.cardColor, giftData.envelopeColor);
  }
} else {
  backCardLogo.removeAttribute("src");
  backCardLogo.style.opacity = "1";
  backCardLogoWrap.classList.add("hidden");

  backGiftCard.classList.remove("has-user-background");
  backCardUserBg.classList.add("hidden");
  backCardUserBg.style.backgroundImage = "";
  backCardUserBg.style.opacity = "1";
}


  //переход 
  showScreen("envelopeScreen");

  document.body.classList.add("no-scroll");
};


function setTextOrHide(element, value) {
  if (value) {
    element.textContent = value;
    element.style.display = "";
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


openBtn.onclick = function () {
  openBtn.disabled = true;

  animatedEnvelope.classList.remove("flap-open", "card-out", "card-zoom", "fade-out");


  if (giftData.type === "card") {
  resultType.textContent = "Подарочная карта";
  resultType.style.display = "";
} else if (giftData.type === "certificate") {
  resultType.textContent = "Сертификат";
  resultType.style.display = "";
} else {
  resultType.textContent = "";
  resultType.style.display = "none";
}

//back
if (giftData.type === "card") {
  backResultType.textContent = "Подарочная карта";
  backResultType.style.display = "";
} else if (giftData.type === "certificate") {
  backResultType.textContent = "Сертификат";
  backResultType.style.display = "";
} else {
  backResultType.textContent = "";
  backResultType.style.display = "none";
}


/**/ 
if (giftData.backTitle) {
  backResultTitle.textContent = giftData.title;
  backResultTitle.style.display = "";
} else {
  backResultTitle.textContent = "";
  backResultTitle.style.display = "none";
}

if (giftData.backMessage) {
  backResultMessage.textContent = giftData.message;
  backResultMessage.style.display = "";
} else {
  backResultMessage.textContent = "";
  backResultMessage.style.display = "none";
}

if (giftData.backAmount) {
  backResultAmount.textContent = formatAmount(giftData.backAmount);
  backResultAmount.parentElement.style.display = "";
} else {
  backResultAmount.textContent = "";
  backResultAmount.parentElement.style.display = "none";
}

if (giftData.backAddress) {
  backResultAddress.textContent = giftData.backAddress;
  backResultAddress.classList.remove("hidden");
} else {
  backResultAddress.textContent = "";
  backResultAddress.classList.add("hidden");
}

if (giftData.backContacts) {
  backResultContacts.textContent = giftData.backContacts;
  backResultContacts.classList.remove("hidden");
} else {
  backResultContacts.textContent = "";
  backResultContacts.classList.add("hidden");
}


/**/ 
if (giftData.title) {
  resultTitle.textContent = giftData.title;
  resultTitle.style.display = "";
} else {
  resultTitle.textContent = "";
  resultTitle.style.display = "none";
}

if (giftData.message) {
  resultMessage.textContent = giftData.message;
  resultMessage.style.display = "";
} else {
  resultMessage.textContent = "";
  resultMessage.style.display = "none";
}

if (giftData.amount) {
  resultAmount.textContent = formatAmount(giftData.amount);
  resultAmount.parentElement.style.display = "";
} else {
  resultAmount.textContent = "";
  resultAmount.parentElement.style.display = "none";
}

if (giftData.address) {
  resultAddress.textContent = giftData.address;
  resultAddress.classList.remove("hidden");
} else {
  resultAddress.textContent = "";
  resultAddress.classList.add("hidden");
}

if (giftData.contacts) {
  resultContacts.textContent = giftData.contacts;
  resultContacts.classList.remove("hidden");
} else {
  resultContacts.textContent = "";
  resultContacts.classList.add("hidden");
}

// линия между заголовком и текстом
const hasType = giftData.type === "card" || giftData.type === "certificate";
const hasTitle = Boolean(giftData.title);
const hasMessage = Boolean(giftData.message);
const hasAmount = Boolean(giftData.amount);


// заголовок
if (hasTitle) {
  resultTitle.textContent = giftData.title;
  resultTitle.style.display = "";
} else {
  resultTitle.textContent = "";
  resultTitle.style.display = "none";
}

// основной текст
if (hasMessage) {
  resultMessage.textContent = giftData.message;
  resultMessage.style.display = "";
} else {
  resultMessage.textContent = "";
  resultMessage.style.display = "none";
}

// сумма
if (hasAmount) {
  resultAmount.textContent = formatAmount(giftData.amount);
  resultAmount.parentElement.style.display = "";
} else {
  resultAmount.textContent = "";
  resultAmount.parentElement.style.display = "none";
}

// линия под заголовком
if (hasTitle && hasMessage) {
  resultTitle.classList.add("with-divider");
} else {
  resultTitle.classList.remove("with-divider");
}

// линия над суммой
if (hasAmount && (hasTitle || hasMessage)) {
  resultAmount.parentElement.classList.add("with-divider");
} else {
  resultAmount.parentElement.classList.remove("with-divider");
}

// если вообще ничего нет
if (hasType || hasTitle || hasMessage || hasAmount) {
  giftCard.classList.remove("no-lines");
} else {
  giftCard.classList.add("no-lines");
}

setTextOrHide(backResultTitle, giftData.backTitle);
setTextOrHide(backResultMessage, giftData.backMessage);


setInfoOrHide(backResultAddress, giftData.backAddress);
setInfoOrHide(backResultContacts, giftData.backContacts);

const hasBackTitle = Boolean(giftData.backTitle);
const hasBackMessage = Boolean(giftData.backMessage);
const hasBackAmount = Boolean(giftData.backAmount);

backResultTitle.classList.toggle("with-divider", hasBackTitle && hasBackMessage);
backAmountWrap.classList.toggle("with-divider", hasBackAmount && (hasBackTitle || hasBackMessage));
backGiftCard.classList.toggle("no-lines", !(giftData.type || hasBackTitle || hasBackMessage || hasBackAmount));


  // принудительный reflow
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

// 3. и только потом меняем экран
setTimeout(() => {

  envelopeScreen.classList.add("hidden");
  envelopeScreen.classList.remove("screen-fade-out");

  frontCardScreen.classList.remove("hidden");
  frontCardScreen.classList.add("screen-fade-in");

  frontCardScreen.classList.remove("hidden");
  backCardScreen.classList.add("hidden");

  animatedEnvelope.classList.remove("flap-open", "card-out", "card-zoom", "fade-out");

  openBtn.disabled = false;
}, 7400);
};



function showFrontSide() {
  frontCardScreen.classList.remove("hidden");
  backCardScreen.classList.add("hidden");
}

function showBackSide() {
  frontCardScreen.classList.add("hidden");
  backCardScreen.classList.remove("hidden");
}

if (frontBackBtn) {
  frontBackBtn.onclick = function () {
    frontCardScreen.classList.add("hidden");
    backCardScreen.classList.add("hidden");
    createScreen.classList.remove("hidden");

    document.body.classList.remove("no-scroll");
  };
}

if (backBackBtn) {
  backBackBtn.onclick = function () {
    frontCardScreen.classList.add("hidden");
    backCardScreen.classList.add("hidden");
    createScreen.classList.remove("hidden");

    document.body.classList.remove("no-scroll");
  };
}

if (frontToggleSideBtn) {
  frontToggleSideBtn.onclick = function () {
    showBackSide();
  };
}

if (backToggleSideBtn) {
  backToggleSideBtn.onclick = function () {
    showFrontSide();
  };
}

if (frontDownloadBtn) {
  frontDownloadBtn.onclick = downloadCard;
}

if (backDownloadBtn) {
  backDownloadBtn.onclick = downloadCard;
}



function resetAllScreens() {
  createScreen.classList.remove("hidden");
  envelopeScreen.classList.add("hidden");
  frontCardScreen.classList.add("hidden");
  backCardScreen.classList.add("hidden");

  showFrontSide();

  resultType.textContent = "";
  resultTitle.textContent = "";
  resultMessage.textContent = "";
  resultAmount.textContent = "";
  resultAddress.textContent = "";
  resultContacts.textContent = "";

  backResultType.textContent = "";
  backResultTitle.textContent = "";
  backResultMessage.textContent = "";
  backResultAmount.textContent = "";
  backResultAddress.textContent = "";
  backResultContacts.textContent = "";

  resultType.style.display = "none";
  resultTitle.style.display = "none";
  resultMessage.style.display = "none";
  resultAmount.parentElement.style.display = "none";

  backResultType.style.display = "none";
  backResultTitle.style.display = "none";
  backResultMessage.style.display = "none";
  backResultAmount.parentElement.style.display = "none";

  resultAddress.classList.add("hidden");
  resultContacts.classList.add("hidden");
  backResultAddress.classList.add("hidden");
  backResultContacts.classList.add("hidden");

  giftCard.classList.remove("has-user-background");
  cardUserBg.classList.add("hidden");
  cardUserBg.style.backgroundImage = "";
  cardUserBg.style.opacity = "1";

  backGiftCard.classList.remove("has-user-background");
  backCardUserBg.classList.add("hidden");
  backCardUserBg.style.backgroundImage = "";
  backCardUserBg.style.opacity = "1";

  cardLogo.removeAttribute("src");
  cardLogoWrap.classList.add("hidden");
  cardLogo.style.opacity = "1";

  backCardLogo.removeAttribute("src");
  backCardLogoWrap.classList.add("hidden");
  backCardLogo.style.opacity = "1";

  animatedEnvelope.classList.remove("flap-open", "card-out", "card-zoom", "fade-out");

  openBtn.disabled = false;
}

async function buildPdfBlob() {
  const { jsPDF } = window.jspdf;

  const wasFrontHidden = frontCardScreen.classList.contains("hidden");
  const wasBackHidden = backCardScreen.classList.contains("hidden");

  frontCardScreen.classList.remove("hidden");
  backCardScreen.classList.add("hidden");

  const frontCanvas = await html2canvas(giftCard, {
    backgroundColor: null,
    scale: 2
  });

  const frontImgData = frontCanvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [frontCanvas.width, frontCanvas.height]
  });

  pdf.addImage(
    frontImgData,
    "PNG",
    0,
    0,
    frontCanvas.width,
    frontCanvas.height
  );

  if (giftData.sidesMode === "double") {
    frontCardScreen.classList.add("hidden");
    backCardScreen.classList.remove("hidden");

    const backCanvas = await html2canvas(backGiftCard, {
      backgroundColor: null,
      scale: 2
    });

    const backImgData = backCanvas.toDataURL("image/png");

    pdf.addPage([backCanvas.width, backCanvas.height], "landscape");
    pdf.addImage(
      backImgData,
      "PNG",
      0,
      0,
      backCanvas.width,
      backCanvas.height
    );
  }

  if (wasFrontHidden) {
    frontCardScreen.classList.add("hidden");
  } else {
    frontCardScreen.classList.remove("hidden");
  }

  if (wasBackHidden) {
    backCardScreen.classList.add("hidden");
  } else {
    backCardScreen.classList.remove("hidden");
  }

  return pdf.output("blob");
}


async function downloadCard() {
  const { jsPDF } = window.jspdf;

  const wasFrontHidden = frontCardScreen.classList.contains("hidden");
  const wasBackHidden = backCardScreen.classList.contains("hidden");
  const wasOpenDisabled = openBtn.disabled;
  const activeElementBefore = document.activeElement;

  try {
    frontDownloadBtn.disabled = true;
    backDownloadBtn.disabled = true;
    openBtn.disabled = true;

    frontCardScreen.classList.remove("hidden");
    backCardScreen.classList.add("hidden");

    const frontCanvas = await html2canvas(giftCard, {
      backgroundColor: null,
      scale: 2
    });

    const frontImgData = frontCanvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [frontCanvas.width, frontCanvas.height]
    });

    pdf.addImage(
      frontImgData,
      "PNG",
      0,
      0,
      frontCanvas.width,
      frontCanvas.height
    );

    if (giftData.sidesMode === "double") {
      frontCardScreen.classList.add("hidden");
      backCardScreen.classList.remove("hidden");

      const backCanvas = await html2canvas(backGiftCard, {
        backgroundColor: null,
        scale: 2
      });

      const backImgData = backCanvas.toDataURL("image/png");

      pdf.addPage([backCanvas.width, backCanvas.height], "landscape");
      pdf.addImage(
        backImgData,
        "PNG",
        0,
        0,
        backCanvas.width,
        backCanvas.height
      );
    }

    pdf.save("certificate.pdf");
  } catch (error) {
    console.error("Ошибка при скачивании PDF:", error);
  } finally {
    if (wasFrontHidden) {
      frontCardScreen.classList.add("hidden");
    } else {
      frontCardScreen.classList.remove("hidden");
    }

    if (wasBackHidden) {
      backCardScreen.classList.add("hidden");
    } else {
      backCardScreen.classList.remove("hidden");
    }

    frontDownloadBtn.disabled = false;
    backDownloadBtn.disabled = false;
    openBtn.disabled = wasOpenDisabled;

    if (activeElementBefore && typeof activeElementBefore.focus === "function") {
      activeElementBefore.focus();
    }
  }
}

async function handleShareClick(event) {
  event.preventDefault();

  const link = await sendCardToServer();
  if (!link) return;

  showShareModal(link);
}
frontShareBtn.onclick = handleShareClick;
backShareBtn.onclick = handleShareClick;


async function shareCard() {
  const wasOpenDisabled = openBtn.disabled;
  const activeElementBefore = document.activeElement;

  try {
    frontDownloadBtn.disabled = true;
    backDownloadBtn.disabled = true;

    if (frontShareBtn) frontShareBtn.disabled = true;
    if (backShareBtn) backShareBtn.disabled = true;
    openBtn.disabled = true;

        if (!navigator.share) {
      alert("Функция «Поделиться» не поддерживается на этом устройстве.");
      return;
    }

    const pdfBlob = await buildPdfBlob();
    const pdfFile = new File([pdfBlob], "certificate.pdf", {
      type: "application/pdf"
    });

    const shareData = {
      title: "Подарочная карта",
      text: "Готовая карта или сертификат",
      files: [pdfFile]
    };

    try {
      await navigator.share(shareData);
    } catch (shareError) {
      console.log("Не удалось передать PDF через share:", shareError);

      if (shareError.name === "AbortError") {
        return;
      }

      await navigator.share({
        title: "Подарочная карта",
        text: "Готовая карта или сертификат",
        url: window.location.href
      });

      alert("Файл PDF не удалось передать, поэтому была отправлена ссылка на страницу.");
    }
    
  } catch (error) {
    if (error && error.name !== "AbortError") {
      console.error("Ошибка при отправке PDF:", error);
    }
  } finally {
    frontDownloadBtn.disabled = false;
    backDownloadBtn.disabled = false;
    if (frontShareBtn) frontShareBtn.disabled = false;
    if (backShareBtn) backShareBtn.disabled = false;
    openBtn.disabled = wasOpenDisabled;

    if (activeElementBefore && typeof activeElementBefore.focus === "function") {
      activeElementBefore.focus();
    }
  }
}


async function sendCardToServer() {
  try {
    const response = await fetch("/api/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(giftData)
    });

    const data = await response.json();

    return data.link;

  } catch (error) {
    console.error("Ошибка:", error);
    alert("Ошибка при отправке");
  }
}




const shareModal = document.getElementById("shareModal");
const shareLinkInput = document.getElementById("shareLinkInput");
const copyShareLinkBtn = document.getElementById("copyShareLinkBtn");
const nativeShareBtn = document.getElementById("nativeShareBtn");
const closeShareModalBtn = document.getElementById("closeShareModalBtn");

let currentShareLink = "";

function showShareModal(link) {
  currentShareLink = link;
  shareLinkInput.value = link;
  shareModal.classList.remove("hidden");
}

async function handleShareClick() {
  const link = await sendCardToServer();

  if (!link) return;

  showShareModal(link);
}

if (frontShareBtn) {
  frontShareBtn.onclick = handleShareClick;
}

if (backShareBtn) {
  backShareBtn.onclick = handleShareClick;
}

if (copyShareLinkBtn) {
  copyShareLinkBtn.onclick = async function () {
    await navigator.clipboard.writeText(currentShareLink);
    copyShareLinkBtn.textContent = "Скопировано";

    setTimeout(() => {
      copyShareLinkBtn.textContent = "Скопировать";
    }, 1500);
  };
}

if (nativeShareBtn) {
  nativeShareBtn.onclick = async function () {
    if (navigator.share) {
      await navigator.share({
        title: "Подарочная карта",
        text: "Откройте вашу подарочную карту",
        url: currentShareLink
      });
    } else {
      await navigator.clipboard.writeText(currentShareLink);
      nativeShareBtn.textContent = "Ссылка скопирована";
    }
  };
}

if (closeShareModalBtn) {
  closeShareModalBtn.onclick = function () {
    shareModal.classList.add("hidden");
  };
}


// === preview SCREEN ===
const startPreviewBtn = document.getElementById("startPreviewBtn");

if (startPreviewBtn) {
  startPreviewBtn.onclick = function () {
    previewScreen.classList.add("hidden");
    container.classList.remove("hidden");
  };
}


// === AUTH SCREEN ===
const container = document.getElementById("container");
const previewScreen = document.getElementById("previewScreen");

const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");

const authFormButtons = document.querySelectorAll(".container .form-container form button");

signUp.onclick = function () {
  container.classList.add("right-panel-active");
};

signIn.onclick = function () {
  container.classList.remove("right-panel-active");
};




const registerSubmitBtn = document.getElementById("registerSubmitBtn");
const loginSubmitBtn = document.getElementById("loginSubmitBtn");

registerSubmitBtn.onclick = async function () {
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const result = await response.json();

  if (response.ok) {
    document.getElementById("container").classList.remove("right-panel-active");
  } else {
    alert(result.error);
  }
};

loginSubmitBtn.onclick = async function () {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const result = await response.json();

  if (response.ok) {
    localStorage.setItem("user", JSON.stringify(result));
    updateAccountPanel();
    showScreen("createScreen");
  } else {
    alert(result.error);
  }
};




document.querySelectorAll(".password-toggle").forEach(button => {
  button.addEventListener("click", function () {
    const input = document.getElementById(this.dataset.target);

    if (!input) return;

    if (input.type === "password") {
      input.type = "text";
      this.textContent = "🙈";
    } else {
      input.type = "password";
      this.textContent = "👁";
    }
  });
});


const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");

if (forgotPasswordBtn) {
  forgotPasswordBtn.onclick = function () {
    alert("Восстановление пароля пока не подключено.");
  };
}



const skip1 = document.getElementById("skipAuthBtn");
const skip2 = document.getElementById("skipAuthBtn2");

function goToScreen() {
  showScreen("createScreen");
}

if (skip1) skip1.onclick = goToScreen;
if (skip2) skip2.onclick = goToScreen;


function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(function (screen) {
    screen.classList.add("hidden");
  });

  const activeScreen = document.getElementById(screenId);

  if (activeScreen) {
    activeScreen.classList.remove("hidden");
    localStorage.setItem("currentScreen", screenId);
  }
}



document.getElementById("backToPreview")?.addEventListener("click", function () {
  showScreen("previewScreen");
});

document.getElementById("backToAuth")?.addEventListener("click", function () {
  showScreen("container");
});

document.getElementById("startPreviewBtn")?.addEventListener("click", function () {
  showScreen("container");
});



const accountEmail = document.getElementById("accountEmail");
const freeCardsInfo = document.getElementById("freeCardsInfo");
const paidCardsInfo = document.getElementById("paidCardsInfo");

function updateAccountPanel() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    accountEmail.textContent = "Аккаунт: гость";
    freeCardsInfo.textContent = "Бесплатные карты: 0/3";
    paidCardsInfo.textContent = "Оплаченные карты: 0";
    return;
  }

  accountEmail.textContent = `Аккаунт: ${user.email}`;
  freeCardsInfo.textContent = `Бесплатные карты: ${user.free_cards_used}/3`;
  paidCardsInfo.textContent = `Оплаченные карты: ${user.paid_cards_balance}`;
}



const openAccountBtn = document.getElementById("openAccountBtn");
const backToCreateFromAccount = document.getElementById("backToCreateFromAccount");

if (openAccountBtn) {
  openAccountBtn.onclick = function () {
    updateAccountPanel();
    showScreen("accountScreen");
  };
}

if (backToCreateFromAccount) {
  backToCreateFromAccount.onclick = function () {
    showScreen("createScreen");
  };
}


window.addEventListener("DOMContentLoaded", function () {
  const savedScreen = localStorage.getItem("currentScreen");

  const allowedStartScreens = [
    "previewScreen",
    "container",
    "createScreen",
    "accountScreen"
  ];

  if (savedScreen && allowedStartScreens.includes(savedScreen)) {
    showScreen(savedScreen);
  } else {
    showScreen("previewScreen");
  }
});






const paymentScreen = document.getElementById("paymentScreen");

const openPaymentBtn = document.getElementById("openPaymentBtn");
const backToAccountFromPayment = document.getElementById("backToAccountFromPayment");

if (openPaymentBtn) {
  openPaymentBtn.onclick = function () {
    showScreen("paymentScreen");
  };
}

if (backToAccountFromPayment) {
  backToAccountFromPayment.onclick = function () {
    showScreen("accountScreen");
  };
}


const paymentPacks =
  document.querySelectorAll(".payment-pack");

paymentPacks.forEach(pack => {

  pack.addEventListener("click", function () {

    const cards =
      Number(this.dataset.cards);

    const user =
      JSON.parse(localStorage.getItem("user"));

    if (!user) return;

    user.paid_cards_balance += cards;

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    updateAccountPanel();

    alert(`Добавлено карт: ${cards}`);

    showScreen("accountScreen");
  });
});

//шаблоны
/*
const templates = {
  classic: {
    className: "layout-classic",
    logoPosition: "top-center"
  },
  left: {
    className: "layout-left",
    logoPosition: "top-right"
  },
  right: {
    className: "layout-right",
    logoPosition: "top-left"
  }
};

const templateClasses = [
  "layout-classic",
  "layout-left",
  "layout-right"
];



function applyTemplate(templateKey) {
  const template = templateMap[templateKey];
  if (!template) return;

  giftData.layoutTemplate = templateKey;

  giftCard.classList.remove(...layoutClasses);
  backGiftCard.classList.remove(...layoutClasses);

  giftCard.classList.add(template.layout);
  backGiftCard.classList.add(template.layout);

  cardLogoWrap.classList.remove(...logoClasses);
  backCardLogoWrap.classList.remove(...logoClasses);

  cardLogoWrap.classList.add(template.logo);
  backCardLogoWrap.classList.add(template.logo);

  document.querySelectorAll(".template-card").forEach(card => {
    card.classList.toggle("active", card.dataset.template === templateKey);
  });

  localStorage.setItem("giftDraft", JSON.stringify(giftData));
}



document.querySelectorAll(".template-card").forEach(card => {
  card.addEventListener("click", function () {
    const newTemplate = this.dataset.template;

    if (!giftData.layoutTemplate) {
      applyTemplate(newTemplate);
      return;
    }

    if (giftData.layoutTemplate === newTemplate) return;

    const result = confirm("Применить настройки с новым шаблоном?");

    if (result) {
      applyTemplate(newTemplate);
    }
  });
});



continueBtn.addEventListener("click", function () {
  if (!giftData.layoutTemplate) {
    document.getElementById("templateError").classList.remove("hidden");
    return;
  }

  document.getElementById("templateError").classList.add("hidden");

  showScreen("envelopeScreen");
});
*/