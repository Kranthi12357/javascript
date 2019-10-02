function name( kranthi){
    console.log("print hello how are you")
    console.log(`print hello how are you ${kranthi}`)
}
//var s = name('kranthi')

function  add(first,second) {
    console.log(first+second)
}


for(let i = 1;i<50;i++){
    let  count =0;
    for(let j = 2;j<=i/2;j++){
        if( i%j ==0 ){
            count++;
            break;
        }

    }
    if(count ===0 && i!=1){
        console.log(i)
    }
}


function isPrime(num) {
    if(num===1 ){
        return false
    }else {
        for (let i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                return false
            }
        }

    }
    return true
}

if(isPrime(2)){
    console.log(' prime')
}
else {
    console.log(' not prime')
}