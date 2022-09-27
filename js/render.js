export class Render {
  renderizar(dado, selector, limparAntigos = true) {
    const local = document.querySelector(selector)

    if (Array.isArray(dado)) dado = dado.join('')

    if (limparAntigos) local.innerHTML = dado
    else local.innerHTML += dado
  }

  renderizarResultados(resultado) {
    const { nome, data, concurso, dataProxConcurso, acumuladaProxConcurso } = resultado

    const info = `<h2>${nome} ${concurso} • ${data}</h2>
    <p>Próximo concurso: ${dataProxConcurso} - ${acumuladaProxConcurso}</p>`

    this.renderizar(info, 'div.info')

    const dezenas = resultado.dezenas.map(dezena => `<div class="resultado__item">${dezena}</div>`)
    this.renderizar(dezenas, 'div.resultado')
  }
}