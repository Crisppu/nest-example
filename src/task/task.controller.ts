import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
    constructor(private taskService: TaskService) {}
    @Get('/tasks')
    getAllTasks(){
        return this.taskService.getTasks();
    }

}
