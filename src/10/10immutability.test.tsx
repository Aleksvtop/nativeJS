import {makeHairstyle, moveUser, upgradeLaptop, UserType, UserWithLaptopType} from "./10immutability";


test('reference type test', () => {
    let user: UserType = {
        name: 'Aleks',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        }
    }
    const awesomeUser = makeHairstyle(user, 2)
    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Vasya',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Kiev')
})

test('Update laptop to MacBook', () => {
    let user: UserWithLaptopType = {
        name: 'Vasya',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const userWithUpdatedLaptop = upgradeLaptop(user, 'MacBook')

    expect(user).not.toBe(userWithUpdatedLaptop)
    expect(user.address).toBe(userWithUpdatedLaptop.address)
    expect(user.laptop).not.toBe(userWithUpdatedLaptop.laptop)
    expect(userWithUpdatedLaptop.laptop.title).toBe('MacBook')
    expect(user.laptop.title).toBe('ZenBook')
})