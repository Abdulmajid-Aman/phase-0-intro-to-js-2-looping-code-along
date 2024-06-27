// Code your solutions in this file
let array = ["Guadalupe" , "Ollie" , "Aki"]
let what = 'surprise'

function writeCards(array ,what) {
    let newArray = []
    for (let i = 0; i < array.length ; i ++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${what} gift!`)
    }
    return newArray

}

writeCards(["Guadalupe" , "Ollie" , "Aki"] , 'surprise')


function countDown() {
    let count = 0
    while (count < 11) {
        console.log(count)
        count ++
    }

}