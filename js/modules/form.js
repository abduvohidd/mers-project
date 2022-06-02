import { closeModal, openModal } from "./modal";

function form(modalTimer) {
  //AJAX

  const forms = document.querySelectorAll("form");

  const message = {
    loading: "img/form/spinner.svg",
    success: "Murojatingiz qabul qilindi",
    failure: "Error",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: data,
    });

    //async await
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display:block;
        margin: 0 auto;
      `;

      form.append(statusMessage);
      const formData = new FormData(form);

      // const request = new XMLHttpRequest();
      // request.open("POST", "server.php");

      // request.setRequestHeader("Content-type", "application/json");

      // const object = {};
      // formData.forEach(function (value, key) {
      //   object[key] = value;
      // });

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // const json = JSON.stringify(object);

      // fetch("server.php", {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(object),
      // })
      //   .then((data) => data.text())
      postData("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          // form.reset();
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });

      // request.send(json);
      // request.send(formData);

      // request.addEventListener("load", () => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     showThanksModal(message.success);
      //     form.reset();
      //   } else {
      //     showThanksModal(message.failure);
      //   }
      // });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");

    openModal(".modal", modalTimer);

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `<div class="modal__content">
        <div class="modal__close" data-close>x</div>
        <div class="modal__title">${message}</div>
    </div>`;

    document.querySelector(".modal").append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal(".modal", modalTimer);
    }, 3000);
  }
}

export default form;
