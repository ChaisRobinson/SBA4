fetch('https://api.pokemontcg.io/v2/cards', {
  headers: {
    'X-Api-Key': '04ca77ed-0f1b-4688-8f33-7ba0f71897c1'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));