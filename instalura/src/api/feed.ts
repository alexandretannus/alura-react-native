import { Dispatch } from "react";
import { Platform } from "react-native";

const lerFotos = async(callback: Dispatch<React.SetStateAction<never[]>>) => {
    const fetchUrl = Platform.OS === "ios" ? "localhost" : "192.168.0.2"
    const fotosHttp = await fetch(`http://${fetchUrl}:3030/feed`);
    const fotosJson = await fotosHttp.json();
    callback(fotosJson);
}

export default lerFotos