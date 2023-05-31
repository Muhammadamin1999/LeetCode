const target = 123321

const result = target.toString().split('').reverse().join('')

console.log(result)
if(target === parseInt(result)){console.log('palindrome')} else{
    console.log('not palindrome')
}
