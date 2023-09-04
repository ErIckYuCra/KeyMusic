export function getNumberIndex(index){

    let caracteres = index.toString()

    if(caracteres.length < 2){
        caracteres = "0"+caracteres
    }

    return caracteres

}