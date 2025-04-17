import Swal from "sweetalert2";
const getFromLocalStorage2 = () => {
  const dataFromLS = localStorage.getItem("wishlist");
  if (dataFromLS) {
    return JSON.parse(dataFromLS);
  } else {
    return [];
  }
};
const setToLocalStorage2 = (id) => {
  const data = getFromLocalStorage2();
  if (data.includes(id)) {
    Swal.fire({
      icon: "error",
      title: "Exist!",
      text: "Already added to wishlist",
    });
    return false;
  } else {
    data.push(id);
    localStorage.setItem("wishlist", JSON.stringify(data));
  }
  console.log(localStorage.getItem("wishlist"));
};
export { setToLocalStorage2, getFromLocalStorage2 };
