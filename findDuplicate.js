const arr = [1,7,7,3,4]
const duplcates = []

// const result = arr.filter((elem, index)=> arr.indexOf(elem) !== index)
// console.log(result)
for(let i =0; i<arr.length; i++){
    if(duplcates.includes(arr[i])){
        duplcates.push(arr[i])
    }
}
