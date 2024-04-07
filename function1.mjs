/* This code defines an asynchronous function getCharizard that fetches data about Charizard Pokemon cards from an API,
then extracts the image URLs from the fetched data, and appends the images to an HTML element with the class name charizardContainer*/

export async function getCharizard() {
  const container = document.querySelector(".charizardContainer");
  const response = await fetch(
    "https://api.pokemontcg.io/v2/cards?q=name:charizard",
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
