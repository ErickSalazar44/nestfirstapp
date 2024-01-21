import { TaskStatus } from '../tasks.entity';
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

// para saber lo que viene del cliente
export class CreatTaskDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(3)
	title: string;

	@IsString()
	description: string;
}

export class UpdateTaskDto {
	@IsString()
	@IsOptional()
	title?: string;

	@IsString()
	@IsOptional()
	description?: string;

	@IsString()
	@IsOptional()
	@IsIn([TaskStatus.PENDING, TaskStatus.DONE, TaskStatus.IN_PROGRESS])
	status?: TaskStatus;
}
