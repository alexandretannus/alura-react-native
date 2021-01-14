import {Dimensions, StyleSheet} from 'react-native'

const largura = Dimensions.get("screen").width

const estilo = StyleSheet.create({
    container: {
        flexGrow: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputs: {
        width: largura*0.75,
        textAlign: 'center',
        marginTop: 40,
        fontSize:25
    },

    buttonView: {
        marginBottom: 35
    }
})

export default estilo