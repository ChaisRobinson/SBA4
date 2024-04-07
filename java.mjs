/* Import function1.mjs, function2.mjs, and test.mjs */
import { getCharizard } from "./function1.mjs";
import { getMew } from "./function2.mjs";
import { getGengar } from "./test.mjs";

/////////////Call Functions//////////////
getMew();
getCharizard();
getGengar();

//////////////Search Pokemon Function////////////
/* This code defines an asynchronous function searchPokemon that retrieves Pokemon cards data from an API 
based on the user's input, then displays the card images on the webpage. It handles errors if the API call fails 
and updates the UI accordingly*/
async function searchPokemon() {
  const pokemonNameInput = document.getElementById("pokemonName");
  const searchButton = document.getElementById("searchButton");
  const userCardsContainer = document.querySelector(".userCardsContainer");

  const pokemonName = pokemonNameInput.value.toLowerCase();

  try {
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`,
      {
        headers: {
          "X-Api-Key": "04ca77ed-0f1b-4688-8f33-7ba0f71897c1",
        },
      }
    );

    const data = await response.json();

    userCardsContainer.innerHTML = ""; // Clear the container before adding new images

    if (data.data.length === 0) {
      const noResultsMessage = document.createElement("p");
      noResultsMessage.textContent = `No results found for "${pokemonName}".`;
      userCardsContainer.appendChild(noResultsMessage);
    } else {
      data.data.forEach((card) => {
        const image = document.createElement("img");
        image.src = card.images.small;
        userCardsContainer.appendChild(image);
      });
    }
  } catch (error) {
    console.error("Error searching for Pokemon:", error);
  }
}

searchButton.addEventListener("click", searchPokemon);
