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
    let stn = document.getElementById("stn").value;
    let area = document.getElementById("area").value;
    const amount = ((120.0 - stn) * area) / 0.3;
    document.getElementById("my-form").reset();
    Swal.fire({
      title: "تحتاج",
      text: (Math.round(amount * 100) / 100).toFixed(2) + " kg",
      icon: "success",
    });
  };
})();
