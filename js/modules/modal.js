function openModal(modalSelector, modalTimer) {
  modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  console.log(modalTimer);
  if (modalTimer) {
    clearInterval(modalTimer);
  }
}

function closeModal(modalSelector) {
  modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimer) {
  //MODAL

  const allModalBtn = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);
  // const modalClose = document.querySelector("[data-close]");

  allModalBtn.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalSelector, modalTimer));
  });

  // modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") === "") {
      closeModal(modalSelector);
    }
  });

  function showMyModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, modalTimer);
      window.removeEventListener("scroll", showMyModalByScroll);
    }
  }

  window.addEventListener("scroll", showMyModalByScroll);
}

export default modal;
export { closeModal };
export { openModal };
