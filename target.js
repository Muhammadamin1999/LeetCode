function twoSum(arr, target){
    const compMap = new Map()
    
    for(let i = 0; i< arr.length; i++){
        const num = arr[i]
        const complement = target - num

        if(compMap.has(complement)){
            return [compMap.get(complement), i]
        }
        compMap.set(num, i)
    }
    return []
}

const arr = [1,2,3,4,7]  
const target = 6
const result = twoSum(arr, target)
console.log(result)
