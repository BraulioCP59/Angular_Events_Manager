import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService
{
    currentUser:any

    loginUser(userName:string, password:string)
    {
        this.currentUser = {
            id: 1, 
            userName: 'userName',
            firstName: 'John',
            lastName: 'Papa',
        }
    }

    isAuthenticated()
    {
        return !!this.currentUser;
    }

    updateUser(firstName:string, lastName:string):void
    {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName;
    }
}