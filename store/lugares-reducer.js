import { ADD_LUGAR, LISTA_LUGARES } from './lugares-actions'
import Lugar from '../modelo/Lugar'
const estadoInicial = {
    lugares: []
};

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case LISTA_LUGARES:
            return {
                lugares: action.lugares.map(p => new Lugar(p.id.toString(), p.nomeLugar, p.imagem))
            }
        case ADD_LUGAR:
            const l = new Lugar(action.dadosLugar.id.toString(), action.dadosLugar.nomeLugar, action.dadosLugar.imagem);
            console.log('adicionou sim' + JSON.stringify(l))
            return {
                lugares: estado.lugares.concat(l)
            };

        default:
            console.log('aqui' + JSON.stringify(action))
            return estado;
    }
}