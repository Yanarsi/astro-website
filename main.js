//Модпльное окно для формы
function openModal(modal) {
  modal.style.display = "block";
}

function closeModal(modal) {
  modal.style.display = "none";
}

// Функция для настройки модального окна
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

// Выпадающее меню
const toggleBtn = document.querySelector(".toggle_btn");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
});

//Модальное окно бронирования
const registerButtons = document.querySelectorAll(
  ".register-button, .header-button"
);
const bookingModal = document.getElementById("booking-modal"); // Модальное окно бронирования по ID
const closeBookingModal = document.querySelector(".close-modal");

setupModal(registerButtons, bookingModal, closeBookingModal);

//Фотогалерея
const imageItems = document.querySelectorAll(".image-item"); // Все элементы с изображениями
const lightbox = document.querySelector(".lightbox"); // Лайтбокс
const lightboxImage = document.querySelector(".lightbox-image"); // Изображение внутри лайтбокса
const closeLightbox = document.querySelector(".close-lightbox"); // Кнопка закрытия лайтбокса

imageItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Получаем путь к изображению из элемента
    const imgSrc = item.querySelector("img").src;
    lightboxImage.src = imgSrc;
    lightbox.style.display = "flex";
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Добавляем обработчик события клика на фон лайтбокса
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});
