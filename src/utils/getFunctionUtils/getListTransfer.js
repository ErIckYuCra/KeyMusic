export function getListTransfer(data,transfer){
    let listData = []

    data.forEach(element => {
        listData.push(transfer(element))
    });
    
    return listData
}