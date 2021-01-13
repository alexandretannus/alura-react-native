import { Dimensions, StyleSheet } from "react-native";


const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
    imagem: {
        width: largura*0.95, 
        height: largura*0.95,
        margin: 10
    },

    like: {
        width: 40,
        height: 40,
        margin: 5
    },
    viewLike: {
        flexDirection: "row",
        alignItems: "center"
    }
});

export default estilo;