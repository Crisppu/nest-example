import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {

    private tasks: any[] = [
        {id:1,name: 'tarea1'},
        {id:2,name: 'tarea2'},
        {id:3,name: 'tarea3'}
    ];
    getTasks(){
        return this.tasks;
    }
}
