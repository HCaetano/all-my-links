document.addEventListener("DOMContentLoaded", function () {
  fetch("content.json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementsByClassName("content__image")[0].src = data.avatar;
      document.getElementsByClassName("content__name")[0].textContent = data.name;
      document.getElementsByClassName("content__description")[0].textContent = data.description;

      // render links block
      const linksList = document.getElementsByClassName("content__link-container")[0];
      linksList.innerHTML = "";

      data.links.forEach((link) => {
        const line = document.createElement("li");
        linksList.appendChild(line);

        const listItem = document.createElement("a");
        listItem.className = "content__link";
        listItem.href = link.url;

        const itemText = document.createElement("p");
        itemText.className = "content__link-text";
        itemText.textContent = link.name;

        listItem.appendChild(itemText);
        line.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error fetching content from JSON", error));
});
