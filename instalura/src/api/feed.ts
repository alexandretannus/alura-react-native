import { Dispatch } from "react";

const fetchUrl = "http://192.168.0.2:3030/feed"

const lerFotos = async(callback: Dispatch<React.SetStateAction<never[]>>) => {
    const fotosHttp = await fetch(fetchUrl);
    const fotosJson = await fotosHttp.json();
    callback(fotosJson);
}

export default lerFotos