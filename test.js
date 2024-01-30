const checkNumber = (num) => {
    const arr = Array.from(num.toString())
    if (arr[0] === '-') return('<0')
    else if (!arr[0]) {
        if (arr[1] === '.') return('>0')
        return('=0')
    } else return('>0')
}

for (let i = -100; i < 100; i++) {
    console.log(checkNumber(i));
}