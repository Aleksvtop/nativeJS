
type UserType = {
    [key: string]: {id: number, name: string}
}

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}
export const users: UserType = {
    '101': {id: 101, name: 'Dimych'},
    '1212': {id: 1212, name: 'Natasha'},
    '323': {id: 323, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}
let user = {id: 100500, name: 'Igor'}
users[user.id] = user

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 1212, name: 'Natasha'},
    {id: 323, name: 'Valera'},
    {id: 1, name: 'Katya'}
]

//var usersCopy = [...usersArray.filter(), user]