
  // Ao clicar em uma categoria
  document.querySelectorAll('.categoria-card').forEach(card => {
    card.addEventListener('click', function () {
      const categoriaSelecionada = this.dataset.categoria;

      // Oculta todas as seções de produtos
      document.querySelectorAll('.secao-produtos').forEach(secao => {
        secao.classList.add('d-none');
      });

      // Mostra a seção correspondente
      const secaoSelecionada = document.getElementById(`produtos-${categoriaSelecionada}`);
      if (secaoSelecionada) {
        secaoSelecionada.classList.remove('d-none');
        secaoSelecionada.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

