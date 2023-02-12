import {
    addCompany,
    addNewBooksToUser,
    makeHairstyle,
    moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompanyTitle,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
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

test('Add new books to user', () => {
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
})

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

test('Remove book', () => {
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
    const newUser = removeBook(user, 'js')

    expect(user).not.toBe(newUser)
    expect(user.address).toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.books).not.toBe(newUser.books)
    expect(newUser.books[2]).toBe('react')
    expect(newUser.books.length).toBe(3)
    expect(user.books.length).toBe(4)
})

test('Companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'
        }]}
        let newUserSkill = addCompany (user, 3,'ABC-IT')

        expect(user).not.toBe(newUserSkill)
        expect(user.companies.length).not.toBe(newUserSkill.companies.length)
        expect(newUserSkill.companies.length).toBe(3)
        expect(newUserSkill.companies[2].title).toBe('ABC-IT')

})

test('Update company title', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'
        }]}
        let newUserSkill = updateCompany (user, 'Epam','EPAM')

        expect(user).not.toBe(newUserSkill)
        expect(user.companies).not.toBe(newUserSkill.companies)
        expect(newUserSkill.companies[0].title).toBe('EPAM')

})

test('Update company name', () => {

        let companies = {
            'Dimych': [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}],
            'Artem' : [{id: 3, title: 'IT-INCUBATOR'}]
        }

        const copy = updateCompanyTitle(companies, 'Dimych', 1, 'EPAM')
        expect(copy['Dimych']).not.toBe(companies['Dimych'])
        expect(copy['Artem']).toBe(companies['Artem'])
        expect(copy['Dimych'][0].title).toBe('EPAM')
})