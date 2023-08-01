// src/common/models/user/user.interface.ts
export interface IUserCredential {
    username: string
    password: string
}

export interface IUserAuth {
    username: string
    roles: string[]
}
