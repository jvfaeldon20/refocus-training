import { sort, search, newsList } from "../../main.js";

document.addEventListener("DOMContentLoaded", function () {
  reloadDOM(newsList);

  document.getElementById("search-btn").addEventListener("click", () => {
    let inputValue  = document.getElementById("search-input").value
    var result      = search(inputValue.trim());

    reloadDOM(result);
    document.getElementById("search-input").value = ""
  });

  document.getElementById("filter-btn-1").addEventListener("click", () => {
    var result = sort("ascending");

    reloadDOM(result);
  });

  document.getElementById("filter-btn-2").addEventListener("click", () => {
    var result = sort("descending");

    reloadDOM(result);
  });
});

function reloadDOM(newArray) {
  if (typeof newArray != "undefined") {
    let constructedDOM = "";
    newArray.forEach(
      (value) =>
        (constructedDOM += `<div class="news-list-item">${value}</div>`)
    );

    document.getElementById("news-list-container").innerHTML = constructedDOM;
  }
}
