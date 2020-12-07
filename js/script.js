var link = document.querySelector(".contacts-button");

var popup = document.querySelector(".write-us");

var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".modal-form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  username.focus();

  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!username.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      mapPopup.classList.remove("modal-show");
    }
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});


var mapLink = document.querySelector(".contacts-button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});


// переключатель табов в блоке "Сервисы"
var servicesItem = document.querySelectorAll('.services-item');
var servicesItemDelivery = document.querySelector('.services-item--delivery');
var servicesItemGuarantee = document.querySelector('.services-item--guarantee');
var servicesItemCredit = document.querySelector('.services-item--credit');

var servicesDelivery = document.querySelector('.services-delivery');
var servicesGuarantee = document.querySelector('.services-guarantee');
var servicesCredit = document.querySelector('.services-credit');


var removeActiveHandler = function() {  
  for (var i=0; i < servicesItem.length; i++) {
    servicesItem[i].classList.remove('active');
  }
}

var visuallyHidddenHandler = function () {
  var servicesBlock = document.querySelectorAll(".services-block");
  for (var j = 0; j < servicesBlock.length; j++) {
    servicesBlock[j].classList.add("visually-hidden");
  }
}

var tabClickHandler = function(item, it) {
  item.classList.add('active');
  it.classList.remove('visually-hidden');
};

servicesItemDelivery.addEventListener('click', function() {
  removeActiveHandler();
  visuallyHidddenHandler();
  tabClickHandler(servicesItemDelivery, servicesDelivery);   
});

servicesItemGuarantee.addEventListener('click', function() {  
  removeActiveHandler();
  visuallyHidddenHandler();
  tabClickHandler(servicesItemGuarantee, servicesGuarantee);  
});

servicesItemCredit.addEventListener('click', function() {   
  removeActiveHandler();
  visuallyHidddenHandler();
  tabClickHandler(servicesItemCredit, servicesCredit);  
});



// var zzz = function() {  
//   servicesItem.forEach("click", function(evt) {
//     removeActiveHandler();
//     visuallyHidddenHandler();
//     if (evt.target === servicesItemDelivery) {
//       tabClickHandler(servicesItemDelivery, servicesDelivery);
//     } else if (evt.target === servicesItemGuarantee) {
//       tabClickHandler(servicesItemGuarantee, servicesGuarantee);
//     } else if (evt.target === servicesItemCredit) {
//       tabClickHandler(servicesItemCredit, servicesCredit); 
//     }
//  });
// }


