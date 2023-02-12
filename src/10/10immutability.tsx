export type UserType = {
    name: string
    hair: number
    address: {
        title: string,
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export function makeHairstyle(u: UserType, power: number) {

    return {...u, hair: u.hair / power}
}

export const moveUser = (u: UserWithLaptopType, title: string) => {
    return {...u, address: {...u.address, title: title}}
}

export const upgradeLaptop = (u: UserWithLaptopType, title: string) => {
    return {...u, laptop: {...u.laptop, title: title}}
}

export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {...u, address: {...u.address, house: house}}
}

/*
export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, books: string[]) => {
    return {...u, books: [...u.books, books}
}*/

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
    return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
}