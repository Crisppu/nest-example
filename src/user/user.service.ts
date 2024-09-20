import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUsers(){
        return [{id:1,name: 'cris'}, {id:2,name: 'budita'}, {id:3,name: 'messi'}]
    }
    otroService(){
        return 'otro servicio'
    }
}
