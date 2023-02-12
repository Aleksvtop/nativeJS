const increaseAge = (u: UserType) => {
    u.age++
}

type UserType = {
    name: string,
    age: number
}

test ('Reference type test', () => {
    let user = {
        name: 'Aleks',
        age: 38
    }
    increaseAge(user)

    expect(user.age).toBe(39)
})

test ('Array test type', () => {
    let users = [{
        name: 'Aleks',
        age: 38
    }, {
        name: 'Yaugen',
        age: 30
    }
    ]
    let admins = users
    admins.push({name: 'Pasha', age: 19})
    expect(users[2]).toEqual({name: 'Pasha', age: 19})
})