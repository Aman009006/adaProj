const button = document.getElementById("button");
const burgerButton = document.getElementById("burder__open");
const modal = document.getElementById("burder__modal");
const closeModalButton = document.getElementById("close__modal");

const openModal = () => {
    modal.style.right = 0;
}

const closeModal = () => {
    modal.style.right = "-375px";
}

burgerButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);