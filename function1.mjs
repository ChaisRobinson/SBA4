export async function getPhotos() {
    const container = document.querySelector(".pokeContainer");
  
    const response = await fetch("https://api.pokemontcg.io/v2/cards?q=name:charizard");
    const photos = await response.json();
  
    photos.forEach(photo => {
      const image = document.createElement("img");
      image.src = photo.images.small;
      container.appendChild(image);
    });
  }
