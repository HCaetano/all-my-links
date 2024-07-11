document.addEventListener("DOMContentLoaded", function () {
  fetch("content.json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementsByClassName("content__image")[0].src = data.avatar;
      document.getElementsByClassName("content__name")[0].textContent = data.name;
      document.getElementsByClassName("content__description")[0].textContent = data.description;
    })
    .catch((error) => console.error("Error fetching JSON data:", error));
});
