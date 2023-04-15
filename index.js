// code your solution here

function superbowlWin(array){
    if(array.find(obj => obj.result === 'W')) {
        return array.find(obj => obj.result === 'W').year
    } else {
        return undefined
    }
}
