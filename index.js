// Add your functions here
function  map(sourceArray,callBack) {
  newArr = [] 
  for ( let i = 0; i < sourceArray.length; i++) {
    let inst = sourceArray[i]
    newArr.push(callBack(inst))   
  }
 return  newArr
}

function usingCb(map){
 map()
}
