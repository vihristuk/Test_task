function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
  }
});

// Модификация времен отправления

var departureTimes = document.querySelectorAll(".description-element__departure-time");
var description = document.querySelector(".description-element_departure-times");

if (departureTimes.length > 3) {
  var moreButton = document.createElement("span");
  moreButton.innerHTML = "еще...";
  moreButton.classList.add("description-element__departure-time");
  var thirdItem = document.querySelector(".third-item");             
  thirdItem.before(moreButton);
}


moreButton.addEventListener("click", function(e) {
  description.style.overflow = "visible";
  moreButton.remove();
})