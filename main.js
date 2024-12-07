function openModal(modal) {
  modal.style.display = "block";
}

function closeModal(modal) {
  modal.style.display = "none";
}

function setupModal(openButtons, modal, closeButton) {
  openButtons.forEach((button) => {
    button.addEventListener("click", () => openModal(modal));
  });

  closeButton.addEventListener("click", () => closeModal(modal));

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
}

const registerButtons = document.querySelectorAll(
  ".register-button, .header-button"
);
const bookingModal = document.getElementById("booking-modal");
const closeBookingModal = document.querySelector(".close-modal");

setupModal(registerButtons, bookingModal, closeBookingModal);

const imageItems = document.querySelectorAll(".image-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeLightbox = document.querySelector(".close-lightbox");

imageItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector("img").src;
    lightboxImage.src = imgSrc;
    lightbox.style.display = "flex";
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});
