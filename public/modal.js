document.addEventListener("DOMContentLoaded", function () {
    const openModalLink = document.getElementById("openModalLink");
    const modal = document.getElementById("getModal");
    const closeButton = document.querySelector(".close");
  
    const openModal = () => {
      modal.style.display = "block";
    };
  
    const closeModal = () => {
      modal.style.display = "none";
    };
  
    openModalLink.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
  });
