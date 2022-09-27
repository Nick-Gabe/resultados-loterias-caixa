import { LoteriasApi } from "./api.js";
import { Render } from "./render.js";

let loteriaSelecionada = null;

(async function () {
  const api = new LoteriasApi()
  const render = new Render()

  // renderiza as opções de loterias
  let loterias = await api.pegarLoterias()
  loteriaSelecionada = loterias[0]

  loterias = loterias.map(nome => `<option value="${nome}">${nome
    .replace(/^\w|(?<=-)\w/ig, letra => letra.toUpperCase())
    .replace(/-/g, ' ')
    }
    </option>`)

  render.renderizar(loterias, '#loterias')

  // renderiza os resultados da loteria
  let resultado = await api.pegarResultados(loteriaSelecionada, 'latest')

  render.renderizarResultados(resultado)

  document.getElementById('loterias').onchange = async (event) => {
    const { target } = event
    loteriaSelecionada = target.value

    let resultado = await api.pegarResultados(loteriaSelecionada, 'latest')

    render.renderizarResultados(resultado)
  }
})()
