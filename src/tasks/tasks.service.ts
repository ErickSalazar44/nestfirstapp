import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';
// podemos reutilizar esta clase
@Injectable()
export class TasksService {
	// sirve para crear metodos que podamos reutilizar

	// Simula database
	private tasks: Task[] = [
		{
			id: '1',
			title: 'firts task',
			description: 'some task',
			status: TaskStatus.PENDING,
		},
	];

	getAllTasks() {
		return this.tasks;
	}
	createTacks(title: string, description: string) {
		const newTask = {
			id: v4(),
			title,
			description,
			status: TaskStatus.PENDING,
		};
		this.tasks.push(newTask);
		return newTask;
	}

	updateTask(id: string, updateFields: UpdateTaskDto): Task {
		const taskIndex = this.tasks.findIndex((task) => task.id === id);

		if (taskIndex === -1) return;

		const updatedTask = { ...this.tasks[taskIndex], ...updateFields };

		this.tasks = this.tasks.map((task, index) => (index === taskIndex ? updatedTask : task));

		return updatedTask;
	}
	deleteTask(id: string) {
		this.tasks = this.tasks.filter((task) => task.id !== id);
	}
}
