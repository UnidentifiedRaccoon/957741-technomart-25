var writeUsLink = document.querySelector(".map-section__link");
var writeUsPopup = document.querySelector(".write-us");
var writeUsClose = writeUsPopup.querySelector(".modal-close");
var writeUsForm =  writeUsPopup.querySelector(".write-us__form");
var writeUsName = writeUsPopup.querySelector(".write-us__user-name");
var writeUsEmail = writeUsPopup.querySelector(".write-us__user-email");
var writeUsMessage = writeUsPopup.querySelector(".write-us__user-message");
var isStorageSupport = true;

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem('email')
} catch (err) {
  isStorageSupport = false;
}

var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");

writeUsLink.addEventListener ("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal_show");
  if (storageName) {
    writeUsName.value = storageName;
    writeUsEmail.focus();
  } else {
    writeUsName.focus();
  }
  if (storageEmail) {
    writeUsEmail.value = storageEmail;
    writeUsMessage.focus();
  }
});

writeUsClose.addEventListener ("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal_show");
  writeUsPopup.classList.remove("modal_error");
});

writeUsForm.addEventListener ("submit", function (evt) {
  if (!writeUsName.value || !writeUsEmail.value || !writeUsMessage.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal_error");
    writeUsPopup.offsetWidth = popup.offsetWidth;
    writeUsPopup.classList.add("modal_error")

  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("name", writeUsName.value);
      localStorage.setItem("email", writeUsEmail.value);
    }
  }
});

var windowBigMapLink = document.querySelector(".map-section__map-link");
var windowBigMapPopup = document.querySelector(".window-big-map");
var windowBigMapClose = windowBigMapPopup.querySelector(".modal-close");

windowBigMapLink.addEventListener ("click", function (evt) {
  evt.preventDefault();
  windowBigMapPopup.classList.add("window-big-map_show");
});

windowBigMapClose.addEventListener ("click", function (evt) {
  evt.preventDefault();
  windowBigMapPopup.classList.remove("window-big-map_show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      if (writeUsPopup.classList.contains("modal_show")) {
        evt.preventDefault();
        writeUsPopup.classList.remove("modal_show");
        writeUsPopup.classList.remove("modal_error");
      }
      else if (windowBigMapPopup.classList.contains("window-big-map_show")) {
        evt.preventDefault();
        windowBigMapPopup.classList.remove("window-big-map_show");
      }
      else if (addToBasketPopup.classList.contains("modal_show")) {
        evt.preventDefault();
        addToBasketPopup.classList.remove("modal_show");
      }
    }
});

var addToBasketLink = document.querySelectorAll(".products-item__basket-btn");
var addToBasketPopup = document.querySelector(".add-to-basket");
var addToBasketClose = addToBasketPopup.querySelectorAll(".modal_close");

// for (var i = 0; i <= addToBasketLink.length; i++) {
//   addToBasketLink[i].addEventListener ("click", function (evt) {
//   evt.preventDefault();
//   addToBasketPopup.classList.add("modal_show");
//   });
//   addToBasketClose[i].addEventListener ("click", function (evt) {
//   evt.preventDefault();
//   addToBasketPopup.classList.remove("modal_show");
//   });
// };
