/* This code defines an asynchronous function getMew that fetches data about Mew Pokemon cards from an API,
 then extracts the image URLs from the fetched data, and appends the images to an HTML element with the class name mewContainer */

export async function getMew() {
  const container = document.querySelector(".mewContainer");
  const response = await fetch(
    "https://api.pokemontcg.io/v2/cards?q=name:mew",
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
