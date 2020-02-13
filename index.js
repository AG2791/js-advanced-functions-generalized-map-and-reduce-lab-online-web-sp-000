// Add your functions here
function  map(sourceArray,callBack) {
  newArr = [] 
  for ( let i = 0; i < sourceArray.length; i++) {
    let inst = sourceArray[i]
    newArr.push(callBack(inst))   
  }
return newArr
}


function map(src, cb) {
  let r = []

  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    r.push(cb(theElement))
  }

  return r;
}
