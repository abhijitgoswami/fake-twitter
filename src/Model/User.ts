export class User{
    FisrtName: string
    LastName: string
    Mobile: number
    Email: string
    Password: string

    constructor(firstname: string, lastname: any, mob: number, email: string, pswd: string){
        this.FisrtName = firstname
        this.LastName = lastname
        this.Mobile = mob
        this.Email = email
        this.Password = pswd
    }
}