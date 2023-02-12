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

export function makeHairstyle(u: UserType, power: number) {

    return {...u, hair: u.hair / power}
}

export const moveUser = (u: UserWithLaptopType, title: string) => {
    return {...u, address: {...u.address, title: title}}
}

export const upgradeLaptop = (u: UserWithLaptopType, title: string) => {
    return {...u, laptop: {...u.laptop, title: title}}
}
