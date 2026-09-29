const pokemons = [
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png",
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/002.png",
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/003.png",
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png",
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/005.png",
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/006.png",
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png",
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/008.png",
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/009.png",
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/010.png"
]

let poke = 0

function modificar_imagem() {
  const pokemonImg = document.getElementById("pokemon-img");
  pokemonImg.src = pokemons[poke];
}

function voltar() {
  if (poke - 1 < 0) {
    console.log("Não é possivel voltar!");
  } else {
    poke = poke - 1;
    modificar_imagem();
  }
}

function desabilitaBotoes() {
  if (poke == 0) {
    const botaoVoltar = document.getElementById("botao-voltar");
    botaoVoltar.disabled = "true";
  } else {
    const botaoVoltar = document.getElementById("botao-voltar");
    botarVoltar.disabled = "false";
  }

  if (poke == pokemons.length) {
    const botaoAdiantar = document.getElementById("botao-adiantar");
    botaoAdiantar.disabled = "true";
  } else {
    const botaoAdiantar = document.getElementById("botao-adiantar");
    botaoAdiantar.disabled = "false";
  } 

function adiantar() {
  if (poke + 1 >= lista.length) {
    console.log("Valor inválido para seta!");
  } else {
    poke = poke + 1;
    modificar_imagem();
  }
