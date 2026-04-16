const createScreen = document.getElementById("createScreen");
const envelopeScreen = document.getElementById("envelopeScreen");
const frontCardScreen = document.getElementById("frontCardScreen");
const backCardScreen = document.getElementById("backCardScreen");

const continueBtn = document.getElementById("continueBtn");
const openBtn = document.getElementById("openBtn");

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

/*let giftData = {
  logoSrc: "",
  logoPosition: "top-right",
  imageMode: "logo",
  imageOpacity: "100",
  imageSize: "medium",
  textColor: "#f8e9ef",
  fontFamily: "Arial, sans-serif",
  sidesMode: "single"
};*/

let giftData = {
  logoSrc: "",
  logoPosition: "top-right",
  imageMode: "logo",
  imageOpacity: "100",
  imageSize: "medium",

  backLogoSrc: "",
  backLogoPosition: "top-right",
  backImageMode: "logo",
  backImageOpacity: "100",
  backImageSize: "medium",

  textColor: "#f8e9ef",
  fontFamily: "Arial, sans-serif",
  sidesMode: "single"
};


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
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    giftData.logoSrc = e.target.result;
    updateImageControlsUI();
  };

  reader.readAsDataURL(file);
});

backLogoInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (!file) {
    giftData.backLogoSrc = "";
    updateBackImageControlsUI();
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    giftData.backLogoSrc = e.target.result;
    updateBackImageControlsUI();
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
  giftData.backLogoPosition = backLogoPosition.value;
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
    applyBackLogoPosition(giftData.backLogoPosition);
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


  // 🔥 ВАЖНО: переход ВНЕ if
  createScreen.classList.add("hidden");
  envelopeScreen.classList.remove("hidden");
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
  };
}

if (backBackBtn) {
  backBackBtn.onclick = function () {
    frontCardScreen.classList.add("hidden");
    backCardScreen.classList.add("hidden");
    createScreen.classList.remove("hidden");
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


if (frontShareBtn) {
  frontShareBtn.onclick = shareCard;
}

if (backShareBtn) {
  backShareBtn.onclick = shareCard;
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