const array = [1,'eating','sleeping','playing']

array.forEach(function(value, index, name) {
    console.log(`${index+1}--${value}${name}`)
})

const ar = []
ar.unshift('eating')
ar.unshift('watching')
ar.unshift('nothing')

for(let i = 0;i<ar.length;i++){
    console.log(ar[i])
}