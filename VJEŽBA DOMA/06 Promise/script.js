let p = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2) {
        resolve("Success!")
    } else {
        reject("Fail!!!")
    }
})
p.then((message) => {
    console.log(`This is in the ".then" ${message}`)
}).catch((message) => {
    console.log(`This is in the ".catch" ${message}`)

})