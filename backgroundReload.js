const backgroundReload = () => {
  if (localStorage.counter >= 1) {
    let counter = parseInt(localStorage.getItem("counter")) + 1;
    localStorage.setItem("counter", counter);

    if (localStorage.counter % 5 == 0) {
      document.querySelector(".background").style.backgroundColor = "red";
    }
  } else {
    window.localStorage.setItem("counter", 1);
  }
};

backgroundReload();
