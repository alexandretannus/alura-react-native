
const pegarImgLike = (quantidadeLikes: boolean) => {    
    if (quantidadeLikes) {
        return require("../../resources/img/s2-checked.png")
    } else {
        return require("../../resources/img/s2.png" )
    }
}

const curtirFoto = (like: boolean, likes: number): [like: boolean, likes: number] => {
    like ? likes-- : likes++

    return [!like, likes]
}

export {pegarImgLike, curtirFoto}