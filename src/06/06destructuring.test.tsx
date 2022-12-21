import {ManType} from "./06destructuring";

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})

test('destructuring object test', () => {

    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Nezavisimosti street')
})

test('destructuring array test', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(ls1.title).toBe('1')
    expect(restLessons.length).toBe(2)
})

