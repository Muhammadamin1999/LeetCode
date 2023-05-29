const arr = []
const row = 5
for(let i =0; i<row; i++){
    arr[i]=[]
    arr[i][0]=1
    for(let j = 1; j<i; j++){
        arr[i][j]= arr[i-1][j-1] + arr[i-1][j]
    }
    arr[i][i] = 1
}

for(let i = 0; i<row; i++){
    console.log(arr[i].join(" "))
}