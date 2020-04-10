import { PipeTransform, Pipe } from '@angular/core';
import { User } from '../models/users';

@Pipe({
    name: 'userFilter'
}) 

export class UserFilterPipe implements PipeTransform {
    transform(users: User[], firstNameSearch: string, lastNameSearch: string, userNameSearch: string, userEmailSearch: string, userPhoneSearch: string): User[] {
        if (!users || users.length) {
            return users.filter(user => {
                if (user){
                    if (firstNameSearch && (user.firstName && user.firstName.toLowerCase().indexOf(firstNameSearch && firstNameSearch.toLowerCase()) === -1)) {
                        return false;
                    }
                    if (lastNameSearch && (user.lastName && user.lastName.toLowerCase().indexOf(lastNameSearch && lastNameSearch.toLowerCase()) === -1)) {
                        return false;
                    }
                    if (userNameSearch && (user.userName && user.userName.toLowerCase().indexOf(userNameSearch && userNameSearch.toLowerCase()) === -1)) {
                    return false;
                    }
                    if (userEmailSearch && (user.email && user.email.toLowerCase().indexOf(userEmailSearch && userEmailSearch.toLowerCase()) === -1)) {
                        return false;
                    }
                    if (userPhoneSearch && (user.phone && user.phone.toLowerCase().indexOf(userPhoneSearch && userPhoneSearch.toLowerCase()) === -1)) {
                        return false;
                    }
                return true;
            }
            })
        }
        else {
            return users;
        }
    }
}