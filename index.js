function generatePoem(event) {
  event.preventDefault();

  let poetryText = document.querySelector(".poetry-text");
  new Typewriter(poetryText, {
    strings: ["Roses are red, Violets are blue"],
    autoStart: true,
    cursor: " ",
    delay: 1,
  });
}

let formGenerator = document.querySelector("#form-generator");
formGenerator.addEventListener("submit", generatePoem);
