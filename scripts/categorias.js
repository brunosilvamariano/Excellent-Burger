document.addEventListener('DOMContentLoaded', function () {
  const botoes = document.querySelectorAll('.categoria-link');
  const secoes = document.querySelectorAll('.categoria-produto');

  botoes.forEach(botao => {
    botao.addEventListener('click', function (e) {
      e.preventDefault();
      const categoria = this.dataset.categoria;

      // Exibe apenas a categoria selecionada e oculta as outras
      secoes.forEach(secao => {
        secao.style.display = secao.dataset.categoria === categoria ? 'block' : 'none';
      });
    });
  });

  // Exibe a primeira categoria por padrão
  if (secoes.length) {
    secoes.forEach(secao => secao.style.display = 'none');
    secoes[0].style.display = 'block';
  }
});
