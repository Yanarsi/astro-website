const registerButtons = document.querySelectorAll(
  ".register-button , .header-button"
); // Обращаемся ко всем элементам с классом
const bookingModal = document.getElementById("booking-modal");
const closeModal = document.querySelector(".close-modal");

registerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    bookingModal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  bookingModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == bookingModal) {
    bookingModal.style.display = "none";
  }
});
