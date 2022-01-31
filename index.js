const frenchUsers = () => {
  let loader = `<div class="boxLoading">LOADING</div>`;
  document.querySelector(".placeholder").innerHTML = loader;
  console.log(loader);
  fetch("https://randomuser.me/api/?results=10&gender=male&nat=fr")
    .then((resp) => resp.json())
    .then((resp) => console.log(resp));
};

frenchUsers();
