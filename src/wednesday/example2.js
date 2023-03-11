const print = (name) => {
    console.log(`hello, ${name}`)
}
const createPrint = (name) => {return () => print(name)}


setTimeout(createPrint('Max'), 1000)
setTimeout(()=> {
    print('Bogdan')
}, 1000)

