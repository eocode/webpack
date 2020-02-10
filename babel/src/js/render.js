function render(data) {
  const pokemon = document.createElement("img");
  if (data !== undefined) {
    pokemon.setAttribute('src', data.sprites.front_default)
    document.body.append(pokemon);
  } else {
    console.log('No data');
  }
}

export default render();
