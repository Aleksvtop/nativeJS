import {users} from "./08associativeArray";


test('should select corresponding user from obj', () => {
    expect(users['101'].name).toBe('Dimych')
    expect(users['1212'].name).toBe('Natasha')
    expect(users['323'].name).toBe('Valera')
    expect(users['1'].name).toBe('Katya')
})