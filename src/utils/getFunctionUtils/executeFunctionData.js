export function executeFunctionData(idData,functionData,idDefault){
    if (idData === '*') {
        functionData(idDefault)
    }
    else {
        functionData(idData)
    }
}