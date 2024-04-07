// fetch('https://api.pokemontcg.io/v2/cards', {
//   headers: {
//     'X-Api-Key': '04ca77ed-0f1b-4688-8f33-7ba0f71897c1'
//   },
// })
//   .then(response => response.json())
//   .then(data => console.log(data));

///// Fetch Charizard Card Info
// fetch("https://api.pokemontcg.io/v2/cards?q=name:charizard", {
//   headers: {
//     "X-Api-Key": "04ca77ed-0f1b-4688-8f33-7ba0f71897c1",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// ////// Fetch Mew Card Info
// fetch("https://api.pokemontcg.io/v2/cards?q=name:mew", {
//   headers: {
//     "X-Api-Key": "04ca77ed-0f1b-4688-8f33-7ba0f71897c1",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));




  ////////Fetch Base Set 1 Card Info
  
  fetch("https://api.pokemontcg.io/v2/cards?q=name:base1", {
    headers: {
      "X-Api-Key": "04ca77ed-0f1b-4688-8f33-7ba0f71897c1",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

/* This code defines an asynchronous function getGengar that fetches data about Gengar Pokemon cards from an API,
then extracts the image URLs from the fetched data, and appends the images to an HTML element with the class name gengarContainer*/
    export async function getGengar() {
      const container = document.querySelector(".gengarContainer");
      const response = await fetch(
        "https://api.pokemontcg.io/v2/cards?q=name:gengar",
        {
          headers: {
            "X-Api-Key": "04ca77ed-0f1b-4688-8f33-7ba0f71897c1",
          },
        }
      );
      const data = await response.json();
      data.data.forEach((card) => {
        const image = document.createElement("img");
        image.src = card.images.small;
        container.appendChild(image);
      });
    }
    