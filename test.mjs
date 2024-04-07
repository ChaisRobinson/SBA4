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


    export async function getBase1() {
      const container = document.querySelector(".base1Container");
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
    