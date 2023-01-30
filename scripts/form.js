const form = document.querySelector(".form");
const input = document.getElementById("img-link");
const formImg = document.getElementById("img-form");
let editId = null;

const generateId = () => Math.ceil(Math.random() * 899999 + 100000);

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  let id = null;

  if (!editId) {
    const ids = await getIdsCats();
    id = generateId();
    while (ids.indexOf(id) !== -1) {
      id = generateId();
    }
  } else id = editId;

  const data = { id };
  [...form.elements].forEach((input) => {
    if (input.type === 'submit') return;
    if (input.type !== 'checkbox') data[input.name] = input.value;
    if (input.type === 'checkbox') data[input.name] = input.checked;
  });

  if (editId) await editCat(id, data)
  else await addCat(data);

  let catCard = template.content.cloneNode(true);
  if (editId)
    catCard = document.querySelector(`[data-id="${id}"]`).parentElement;

  const cat = await getCatById(id);
  addCard(catCard, cat, !!editId);

  handleClose();
})

input.addEventListener("input", (e) => {
  formImg.src = e.target.value;
});