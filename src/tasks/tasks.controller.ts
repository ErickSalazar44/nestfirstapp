import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreatTaskDto, UpdateTaskDto } from './dto/task.dto';
// Cuando solicites la ruta tasks
@Controller('tasks')
export class TasksController {
	// crea una propiedad dentro de esta clase
	constructor(private tasksService: TasksService) {}

	@Get()
	getAllTasks() {
		return this.tasksService.getAllTasks();
	}

	@Post()
	createTask(@Body() newTask: CreatTaskDto) {
		return this.tasksService.createTacks(newTask.title, newTask.description);
	}

	// ruta dinamica
	@Delete(':id')
	deleteTask(@Param('id') id: string) {
		this.tasksService.deleteTask(id);
	}

	@Patch(':id')
	updateTask(@Param('id') id: string, @Body() newTask: UpdateTaskDto) {
		return this.tasksService.updateTask(id, newTask);
	}
}
