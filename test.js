const levelUp = (currentLevel) => {
    if (!currentLevel) return 0
    let experience = currentLevel * 375
    arr.push(experience)
    return experience
}

let currentLevel = 0;
let arr = []

for (let i = 0; i < 100; i++) {
    console.log(levelUp(currentLevel))
    currentLevel++
}

console.log(arr)