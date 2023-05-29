const arr = [1,7,7,3,4]

const result = arr.filter((elem, index)=> arr.indexOf(elem) !== index)
console.log(result)