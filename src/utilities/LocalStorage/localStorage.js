import Swal from "sweetalert2";
const getFromLocalStorage = () => {
  const dataFromLS = localStorage.getItem("read");
  if (dataFromLS) {
    return JSON.parse(dataFromLS);
  } else {
    return [];
  }
};

const setToLocalStorage = (id) => {
  const data = getFromLocalStorage();
  if (data.includes(id)) {
    Swal.fire({
      icon: "error",
      title: "Exist!",
      text: "Book is already added",
    });
    return false;
  } else {
    data.push(id);
    localStorage.setItem("read", JSON.stringify(data));
  }
};
export { setToLocalStorage, getFromLocalStorage };
