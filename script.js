(function ($) {
  $.fn.visible = function (partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

var win = $(window);

var allMods = $(".slide-in");

allMods.each(function (i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function (event) {
  allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("nav").classList.add("round");
  } else {
    document.getElementById("nav").classList.remove("round");
  }
}

function nav() {
  document.querySelector(".links").classList.toggle("shown");
  document.querySelector("nav").classList.toggle("full");
  document.querySelector(".line1").classList.toggle("changed1");
  document.querySelector(".line2").classList.toggle("changed2");
  document.querySelector(".line3").classList.toggle("changed3");
}

const checkboxes = document.querySelectorAll(
  '.checkbox-container input[type="checkbox"]'
);
const totalAmountSpan = document.querySelector(".total-amount");
const payButton = document.querySelector(".pay-btn");

let totalAmount = 0;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      totalAmount += parseInt(checkbox.value);
    } else {
      totalAmount -= parseInt(checkbox.value);
    }
    totalAmountSpan.textContent = totalAmount;
  });
});
// add event listener to pay button
payButton.addEventListener("click", () => {
  // handle payment logic here
  alert(`Payment of $${totalAmount} has been processed successfully!`);
});
