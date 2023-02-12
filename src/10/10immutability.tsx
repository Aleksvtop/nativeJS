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

export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

export type CompanyType = {
    id: number,
    title: string
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

export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, books: string[]) => {
    return {...u, books: u.books.concat(books)}
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
    return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, book: string) => ({
    ...u, books: u.books.filter(b => b !== book)
})

export const addCompany = (u: UserWithLaptopType & WithCompaniesType, id: number, title: string) => ({
    ...u, companies: [...u.companies, {id: 3, title: title}]
})

export const updateCompany = (u: UserWithLaptopType & WithCompaniesType, oldTitle: string, newTitle: string) => ({
    ...u, companies: u.companies.map(c => c.title === oldTitle ? {...c, title: newTitle} : c)
})

export const updateCompanyTitle = (companies: { [key: string]: Array<CompanyType> }, userName: string,
                                   companyId: number, newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ?
        {...c, title: newTitle} : c)
    return companyCopy
}