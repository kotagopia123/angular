import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
    export class UserService implements OnDestroy{
  existingUsernames: any;  

  constructor() { } 

   getUsers() {
      return [
        {id: 1,name: 'gopi', email: 'kotagopi97@gmail.com' , phone: '8500718971',adderss: {line1: 'street',city: 'sattenapalli',state: 'Andhra pradesh'}},
        {id: 2,name: 'sai kiran', email: 'saikiran97@gmail.com' , phone: '966969696',adderss: {line1: 'street',city: 'sattenapalli',state: 'Andhra pradesh'}},
        {id: 3,name: 'leela ram', email: 'leela@gmail.com' , phone: '8585858585'},
        {id: 4,name: 'chary', email: 'chary@gmail.com' , phone: '9595959595',adderss: {line1: 'street',city: 'sattenapalli',state: 'Andhra pradesh'}}
      ];
   } 

   getUser(id: any) {
        const users = this.getUsers();
        return users.find((user: any) => user.id == id);
   } 


   // Observables
    // sub = new Subject();
     user: any;
     userSub = new BehaviorSubject<any>(null);
    

      ngOnDestroy(): void {
       }
     
    

    validateUser(userName: string, password: string) {
      // if(userName === 'test123' && password === 'test123') {
      //   return true;
      // } else {
      //   return false;
      // }
      // return this.http.post('https://jsonplaceholder.typicode.com/validate', data);
      if(userName === 'test123' && password === 'test123') {
        return of(true);
      } else {
        return of(false);
      }
    } 
    
    checkIfUsernameExists(value: string) {
      return of(this.existingUsernames.some((a:any) => a === value)).pipe(
        delay(1000)
      );
    } 


    getRegData() {
      return of({
        "firstName": "Venkata",
        "lastName": "Palisetty",
        "email": "venkatp257@gmail.com",
        "gender": "male",
        "hobbies": "",
        "age": "30",
        "address": {
            "address1": "H.No: 3-43, near Land mark",
            "address2": "",
            "city": "1",
            "state": "1",
            "country": "1"
        },
        "desc": "",
        "terms": "",
        "companies": [
            {
                "name": "HP",
                "location": "Hyderabad",
                "phone": "0989890890"
            },
            {
              "name": "HCL",
              "location": "Hyderabad",
              "phone": "0989890890"
          },
          {
            "name": "FTI",
            "location": "Hyderabad",
            "phone": "0989890890"
        }
        ]
    });
    }

}
