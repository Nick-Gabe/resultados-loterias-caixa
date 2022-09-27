const urlBase = "https://loteriascaixa-api.herokuapp.com/api/"

async function getApi(url) {
  return await (await (fetch(urlBase + url))).json()
}

export class LoteriasApi {
  async pegarLoterias() {
    return getApi('')
  }

  async pegarResultados(loteria, concurso = '') {
    if (!loteria) return new Error('Nome da loteria não especificado')

    return getApi(`${loteria}/${concurso}`)
  }

}