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

  // Слайдеры
  // Промо слайдер
  /* Индекс слайда по умолчанию */
  var slideIndex = 1;
  showSlides(slideIndex);

  /* Функция увеличивает индекс на 1, показывает следующй слайд*/
  function goToNextSlide() {
    showSlides(slideIndex += 1);
  }

  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
  function goToPreviousSlide() {
    showSlides(slideIndex -= 1);
  }

  /* Устанавливает текущий слайд */
  function goToChosenSlide(n) {
    showSlides(slideIndex = n);
  }

  /* Основная функция слайдера */
  function showSlides(n) {
    var i;
    var sliderSlides = document.querySelectorAll(".slider__slide");
    var sliderToggles = document.querySelectorAll(".slider__toggle");
    if (n > sliderSlides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = sliderSlides.length
    }
    for (i = 0; i < sliderSlides.length; i++) {
      sliderSlides[i].classList.remove("slide_active");
    }
    for (i = 0; i < sliderToggles.length; i++) {
      sliderToggles[i].classList.remove("slider__toggle_active");
    }
    sliderSlides[slideIndex - 1].classList.add("slide_active");
    sliderToggles[slideIndex - 1].classList.add("slider__toggle_active");
  }

  // Сдайдер сервисов
  /* Индекс слайда по умолчанию */
  var serviceIndex = 1;
  showServices(serviceIndex);

  /* Устанавливает текущий слайд */
  function goToChosenService(n) {
    showServices(serviceIndex = n);
  }

  /* Основная функция слайдера */
  function showServices(n) {
    var i;
    var services = document.querySelectorAll(".service");
    var servicesButtons = document.querySelectorAll(".switch__button");
    for (i = 0; i < services.length; i++) {
      services[i].classList.remove("service_active");
    }
    for (i = 0; i < servicesButtons.length; i++) {
      servicesButtons[i].classList.remove("switch__button_active");
    }
    services[serviceIndex - 1].classList.add("service_active");
    servicesButtons[serviceIndex - 1].classList.add("switch__button_active");
  }


} else if (body.classList.contains("catalog__page")) {
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
