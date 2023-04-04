document.getElementById("nextJoke").addEventListener("click", getJokes);

function getJokes() {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((data) => data.json())
    .then((jokeData) => {
      const joketext = jokeData.joke;
      const jokeElement = document.getElementById("jokeElement");

      jokeElement.innerHTML = joketext;
    });
}
getJokes();
