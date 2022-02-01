const frenchUsers = () => {
  let loader = `<div class="boxLoading">LOADING</div>`;
  document.querySelector(".placeholder").innerHTML = loader;

  fetch("https://randomuser.me/api/?results=10&gender=male&nat=fr")
    .then((resp) => resp.json())
    .then(
      (resp) =>
        (document.querySelector(".placeholder").innerHTML = `
          <div>
          ${resp.info.seed}
          </div>
          `)
    );
};

frenchUsers();
