const tableRender = () => {
  let loader = `LOADING`;
  document.querySelector(".table").innerText = loader;

  fetch("https://randomuser.me/api/?results=1000&gender=male&nat=fr")
    .then((resp) => resp.json())
    .then(
      (resp) =>
        (document.querySelector(".table").innerText = `
        
        `)
    );
};

tableRender();
