// - GET (https://cats.petiteweb.dev/api/single/tatyana_melnick/show) - отобразить всех котиков
// - GET (https://cats.petiteweb.dev/api/single/tatyana_melnick/ids) - отобразить все возможные айди котиков
// - GET (https://cats.petiteweb.dev/api/single/tatyana_melnick/show/:id) - отобразить конкретного котика
// - POST (https://cats.petiteweb.dev/api/single/tatyana_melnick/add) - добавить котика
// - PUT (https://cats.petiteweb.dev/api/single/tatyana_melnick/update/:id) - изменить информацию о котике
// - DELETE (https://cats.petiteweb.dev/api/single/tatyana_melnick/delete/:id)- удалить котика из базы данных by id

const url = "https://cats.petiteweb.dev/api/single/kudesnik";
const getCats = async () => {
  const response = await fetch(`${url}/show`);
  const result = await response.json();
  return result;
}

const getIdsCats = async () => {
  const response = await fetch(`${url}/ids`);
  const result = await response.json();
  return result;
}

const getCatById = async (id) => {
  const response = await fetch(`${url}/show/${id}`);
  const result = await response.json();
  return result;
}

const addCat = async (body) => {
  const response = await fetch(`${url}/add`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
  const { message } = await response.json();
  console.info(message);
}

const editCat = async (id, body) => {
  const response = await fetch(`${url}/update/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(body),
  });
  const { message } = await response.json();
  console.info(message);
}

const deleteCat = async (id) => {
  const response = await fetch(`${url}/delete/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const { message } = await response.json();
  console.info(message);
}
