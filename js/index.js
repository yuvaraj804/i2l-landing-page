function toggleActiveBtn(item) {
  // const myButton = document.getElementByClass('item');
  const insurance = document.getElementById("insurance");
  const aboutUs = document.getElementById("about-us");
  const become = document.getElementById("become-insurance");

  switch (item) {
    case "insurance":
      {
        insurance.classList.add("active");
        aboutUs.classList.remove("active");
        become.classList.remove("active");
      }

      break;
    case "about-us":
      {
        insurance.classList.remove("active");
        aboutUs.classList.add("active");
        become.classList.remove("active");
      }
      break;
    case "become-insurance":
      {
        insurance.classList.remove("active");
        aboutUs.classList.remove("active");
        become.classList.add("active");
      }
      break;
    default:
      break;
  }
}
