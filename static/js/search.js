document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const titles = document.querySelectorAll(".item div .title a");

  searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    titles.forEach((noteTitle) => {
      const title = noteTitle.textContent.toLowerCase();
      const item = noteTitle.closest(".item");
      if (title.includes(filter)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});
