function recomendar() {

  const preferencias = [...document.querySelectorAll("input:checked")]
    .map(i => i.value);

  let livrosPontuados = livros.map(livro => {

    let pontos = 0;

    // gênero
    livro.generos.forEach(g => {
      if (preferencias.includes(g)) pontos++;
    });
    // tamanho
    livro.tamanho.forEach(t => {
      if (preferencias.includes(t)) pontos++;
    });
   // protagonista
    livro.protagonista.forEach(p => {
      if (preferencias.includes(p)) pontos++;
    });
    // público
    livro.publico.forEach(p => {
      if (preferencias.includes(p)) pontos++;
    });
    // outros campos
    if (preferencias.includes(livro.tamanho)) pontos++;
    if (preferencias.includes(livro.protagonista)) pontos++;
    if (preferencias.includes(livro.publico)) pontos++;

    return { ...livro, pontos };
  });

  // ordena do maior pro menor
  livrosPontuados.sort((a, b) => b.pontos - a.pontos);

  let texto = "<h2>Livros recomendados:</h2>";

  let encontrou = false;

  livrosPontuados.forEach(livro => {

    if (livro.pontos > 3) {
      encontrou = true;

      texto += `    
        <p>
          📖 ${livro.nome}<br>
          ${"⭐".repeat(livro.pontos)} (${livro.pontos})
        </p>
      `;
    }
  });

  if (!encontrou) {
    texto += "<p>Nenhum livro encontrado.</p>";
  }

  document.getElementById("resultado").innerHTML = texto;
}