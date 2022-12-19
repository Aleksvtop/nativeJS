import {createGreetingMessage, createMessages, ManType} from "./05";
import {CityType, HouseType} from "../02/02";
import {city} from "../02/02.test";

let people: Array<ManType>

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]
})

test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello, Andrew ')
    expect(messages[1]).toBe('Hello, Alexander ')
    expect(messages[2]).toBe('Hello, Dmitry ')
})

test('create greeting messages for streets', () => {
    let messages = createMessages(city.houses);
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')
})