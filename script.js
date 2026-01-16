// Select category buttons and gallery items
const categoryButtons = document.querySelectorAll(".categories button");
const galleryItems = document.querySelectorAll(".gallery-item");

// Category filter logic
categoryButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove active class from all buttons
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;

    galleryItems.forEach(item => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

