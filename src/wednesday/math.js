const func1 = () => {
    return () => {
        console.log(10)
    }
}
func1()()

const sum = (a, b) => {
    return a + b
}

const someValue = sum(1,20)

console.log(someValue)

const func2 = (a) => (b) => (c) => (d) => console.log(a+b+c+d)
func2(1)(2)(3)(4)

const planetGravityCalculator = (a, b, c) => (d) => sum1(a,b,c) + d
const sum1=(a,b,c) => a+b+c
console.log(planetGravityCalculator(10,10,8)(6))