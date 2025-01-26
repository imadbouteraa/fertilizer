(() => {
  "use strict";

  const numerics = document.querySelectorAll(".numeric");

  Array.from(numerics).forEach((numeric) => {
    numeric.onkeydown = function (event) {
      if (isNaN(numeric.value + event.key) && event.key !== "Backspace") {
        event.preventDefault();
      }
    };
  });

  const btn = document.getElementById("mybutton");
  btn.onclick = function () {
    // المدخلات
    var nitrogen = document.getElementById("nitrogen").value;
    var area = document.getElementById("area").value;

    // المعالجة
    var amount = ((120.0 - nitrogen) * area) / 0.3;

    // المخرجات
    Swal.fire({
      title: "تحتاج",
      text: (Math.round(amount * 100) / 100).toFixed(2) + " kg",
      icon: "success",
    });
    document.getElementById("my-form").reset();
  };
})();
