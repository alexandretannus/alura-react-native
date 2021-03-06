import { Platform } from "react-native";

const efetuarLogin = async (usuario: string, senha: string) => {
    const fetchUrl = Platform.OS === "ios" ? "localhost" : "192.168.0.2"

    const cabecalhoHttp = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            userName: usuario,
            password: senha
        })
    }

    const resposta = await fetch(`http://${fetchUrl}:3030/users/login`, cabecalhoHttp);

    if (resposta.ok) {
        return resposta.headers.get("x-access-token")
    } else {        
        throw new Error("Não foi possível logar")
    } 
    
}

export default efetuarLogin