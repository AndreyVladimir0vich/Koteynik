const popup = document.querySelector(".popup-wrap");
const open = document.getElementById("open-popup");
const close = document.getElementById("popup-close");

// открытие модального окна
const handleOpen = async () => {
  popup.style.zIndex = 5;
  popup.style.opacity = 1;
  // если режим редактирования, заполняем форму данными
  if (editId) {
    const editCat = await getCatById(editId);
    const btn = document.querySelector(".form__btn");
    btn.innerText = "Изменить данные";
    formImg.src = editCat.image;
    [...form.elements].forEach((input) => {
      if (input.type === 'submit') return;
      if (input.type !== 'checkbox') input.value = editCat[input.name];
      if (input.type === 'checkbox') input.checked = editCat.favorite;
    });
  }
}
// закрытие модального окна
const handleClose = () => {
  setTimeout(() => {
    popup.style.zIndex = -10;
  }, 300)
  popup.style.opacity = 0;
  // отчищаем форму
  const btn = document.querySelector(".form__btn");
  formImg.src = "";
  editId = null;
  btn.innerText = "Добавить кота";
  [...form.elements].forEach((input) => {
    if (input.type === 'submit') return;
    if (input.type !== 'checkbox') input.value = "";
    if (input.type === 'checkbox') input.checked = false;
  })
}

open.addEventListener("click", handleOpen);
close.addEventListener("click", handleClose);

popup.addEventListener("click", (e) => {
  if (e.target === popup) handleClose();
});
