function showPoem(response) {
  let poetryText = document.querySelector(".poetry-text");
  new Typewriter(poetryText, {
    strings: [`${response.data.answer}`],
    autoStart: true,
    cursor: " ",
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poemTopic = document.querySelector("#poem-topic");
  let apiKey = "19fa4a86457804tcabc33b0a088f366o";
  let context =
    "You are an expert at romantic and love poems. Please generate a short love poem of 5 lines, please use the <br/> so that each sentence can start on a new line, please also include a title of the poem on top and use CSS fontweight: bold so that it can be bold, can you please use <br/> again after the title.";
  let prompt = `Please generate a short love poem according to ${poemTopic}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showPoem);
}

let formGenerator = document.querySelector("#form-generator");
formGenerator.addEventListener("submit", generatePoem);
