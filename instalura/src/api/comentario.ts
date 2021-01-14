import { ComentarioInfo } from './../interfaces/ComentarioInfo';
const adicionarComentario = (conteudo: string, usuario: string) => {        
        
    const novoComentario: ComentarioInfo = {
        date: Date.now(),
        text: conteudo,
        userName: usuario

    }

    return novoComentario
    
}

export default adicionarComentario;