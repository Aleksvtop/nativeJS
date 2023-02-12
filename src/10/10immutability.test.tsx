import {
    /*addNewBooksToUser,*/
    makeHairstyle,
    moveUser, moveUserToOtherHouse, updateBook,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10immutability";


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

test('User with books in other house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Aleks',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 4
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const newUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(newUser)
    expect(user.books).toBe(newUser.books)
    expect(user.address).not.toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.address.house).toBe(4)
    expect(newUser.address.house).toBe(99)
})

/*test('Add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Aleks',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 4
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const newUser = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(newUser)
    expect(user.address).toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.books).not.toBe(newUser.books)
    expect(newUser.books.length).toBe(6)
    expect(newUser.books[4]).toBe('ts')
    expect(newUser.books[5]).toBe('rest api')
})*/

test('Change book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Aleks',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 4
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const newUser = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(newUser)
    expect(user.address).toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.books).not.toBe(newUser.books)
    expect(newUser.books[2]).toBe('ts')
})