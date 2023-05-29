const island = [[1,1,1,0,0],[1,1,0,0,1],[0,0,1,0,1],[0,0,0,1,1]]

function numOfIslands(){
    let count = 0
    for(let i=0; i<island.length;i++){
        for(let j=0; j<island[i].length;j++){
            if(island[i][j]==='1'){
                count +=1
                callBFS(island,i,j)
            }
        }
    }
    return count
}
function callBFS(island, i, j){
       if(i < 0 || i>=island.length || j<0 || j>=island[i].legth || island[i][j] == '0')return 
           island[i][j] = '0'
           callBFS(island, i+1,j) 
           callBFS(island, i-1,j) 
           callBFS(island, i,j-1) 
           callBFS(island, i,j+1) 
}

const result = numOfIslands()
console.log(result)