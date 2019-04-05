import uuidv1 from 'uuid/v1'

const LOCAL_STORAGE_KEY = 'users'

export class User {
    constructor(name, email, avatar) {
        this.name = name
        this.email = email
        this.avatar = avatar
        this.uuid = uuidv1()
    }
}


const loadUsers = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []

export const saveUser = (user) => {
    const currentUsers = loadUsers()
    const newUsers = currentUsers.concat(user)

    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(newUsers)
    )
}

export const deleteUser = (uuid) => {
    const currentUsers = loadUsers()
    const newUsers = currentUsers.filter((user) => user.uui !== uuid)

    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(newUsers)
    )
}
