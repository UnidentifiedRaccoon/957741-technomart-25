var body = document.querySelector("body");

if (body.classList.contains("index__page")) {
    var writeUsLink = document.querySelector(".map-section__link");
    var writeUsPopup = document.querySelector(".write-us");
    var writeUsClose = writeUsPopup.querySelector(".modal-close");
    var writeUsForm = writeUsPopup.querySelector(".write-us__form");
    var writeUsName = writeUsPopup.querySelector(".write-us__user-name");
    var writeUsEmail = writeUsPopup.querySelector(".write-us__user-email");
    var writeUsMessage = writeUsPopup.querySelector(".write-us__user-message");
    var isStorageSupport = true;
    var storageName = "";
    var storageEmail = "";

    try {
      storageName = localStorage.getItem("login");
      storageEmail = localStorage.getItem("email");
    } catch (err) {
      isStorageSupport = false;
    }

    writeUsLink.addEventListener("click", function(evt) {
      evt.preventDefault();
      writeUsPopup.classList.add("modal_show");
      if (storageName && storageEmail) {
        writeUsName.value = storageName;
        writeUsEmail.value = storageEmail;
        writeUsMessage.focus();
      } else if (storageName) {
        writeUsName.value = storageName;
        writeUsEmail.focus();
      } else if (storageEmail) {
        writeUsEmail.value = storageEmail
        writeUsName.focus();
      } else {
        writeUsName.focus();
      }
    });

    writeUsClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal_show");
      writeUsPopup.classList.remove("modal_error");
    });

    writeUsForm.addEventListener("submit", function(evt) {
      if (!writeUsName.value || !writeUsEmail.value || !writeUsMessage) {
        evt.preventDefault();
        writeUsPopup.classList.remove("modal_error");
        writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
        writeUsPopup.classList.add("modal_error");

      } else {
        if (isStorageSupport) {
          localStorage.setItem("login", writeUsName.value);
          localStorage.setItem("email", writeUsEmail.value);
        }
      }
    });

    var windowBigMapLink = document.querySelector(".map-section__map-link");
    var windowBigMapPopup = document.querySelector(".window-big-map");
    var windowBigMapClose = windowBigMapPopup.querySelector(".modal-close");

    windowBigMapLink.addEventListener("click", function(evt) {
      evt.preventDefault();
      windowBigMapPopup.classList.add("window-big-map_show");
    });

    windowBigMapClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      windowBigMapPopup.classList.remove("window-big-map_show");
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (writeUsPopup.classList.contains("modal_show")) {
          evt.preventDefault();
          writeUsPopup.classList.remove("modal_show");
          writeUsPopup.classList.remove("modal_error");
        } else if (windowBigMapPopup.classList.contains("window-big-map_show")) {
          evt.preventDefault();
          windowBigMapPopup.classList.remove("window-big-map_show");
        } else if (addToBasketPopup.classList.contains("modal_show")) {
          evt.preventDefault();
          addToBasketPopup.classList.remove("modal_show");
        }
      }
    });

    var addToBasketLinks = document.querySelectorAll(".products-item__basket-btn");
    var addToBasketPopup = document.querySelector(".add-to-basket");
    var addToBasketClose = addToBasketPopup.querySelector(".modal-close");
    var addToBasketContinue = addToBasketPopup.querySelector(".add-to-basket__continue-btn");

    function addListenerOnLink(item) {
      var basketLink = item;
      basketLink.addEventListener('click', function(evt) {
        evt.preventDefault();
        addToBasketPopup.classList.add("modal_show")
      });
    };

    for (var i = 0; i < addToBasketLinks.length; i++) {
      addListenerOnLink(addToBasketLinks[i]);
    }

    addToBasketClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      addToBasketPopup.classList.remove("modal_show");
    });

    addToBasketContinue.addEventListener("click", function(evt) {
      evt.preventDefault();
      addToBasketPopup.classList.remove("modal_show");
    });

}  else if (body.classList.contains("catalog__page")) {
      var addToBasketLinks = document.querySelectorAll(".products-item__basket-btn");
      var addToBasketPopup = document.querySelector(".add-to-basket");
      var addToBasketClose = addToBasketPopup.querySelector(".modal-close");
      var addToBasketContinue = addToBasketPopup.querySelector(".add-to-basket__continue-btn");

      function addListenerOnLink(item) {
        var basketLink = item;
        basketLink.addEventListener('click', function(evt) {
          evt.preventDefault();
          addToBasketPopup.classList.add("modal_show")
        });
      };

      for (var i = 0; i < addToBasketLinks.length; i++) {
        addListenerOnLink(addToBasketLinks[i]);
      }

      addToBasketClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        addToBasketPopup.classList.remove("modal_show");
      });

      addToBasketContinue.addEventListener("click", function(evt) {
        evt.preventDefault();
        addToBasketPopup.classList.remove("modal_show");
      });

      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          if (addToBasketPopup.classList.contains("modal_show")) {
            evt.preventDefault();
            addToBasketPopup.classList.remove("modal_show");
          }
        }
      });
}
