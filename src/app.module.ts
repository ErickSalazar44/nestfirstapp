import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

// decorador
@Module({
	imports: [TaskModule], // añadir funcionalidad extra
	controllers: [TasksController], // conteneder archivos rutas GET - POST - DELETE ...
	providers: [TasksService], // puede obtener funciones que se encargan de comunicar con la base de datos
})
export class AppModule {}
