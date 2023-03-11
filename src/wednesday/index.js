const createCounter = (initialValue) => {
    const counter = {
        increment() {initialValue++},
        getCounter() {return initialValue}
    }
    return counter
}
const counter1 = createCounter(10)
const counter2 = createCounter(20)

counter1.increment()
console.log(counter2.getCounter())