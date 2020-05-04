import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException, HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateDto, UpdateDto } from './dto';
import { TodoService } from './todo.service';
// import { AppService } from './app.service';

@Controller('rest/todo')
export class TodoController {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll(): Promise<Todo[]> {
    // return 'Todo get all';
    // return this.appService.getHello();
    return this.todoService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Todo> {
    // const myTitle: any = 'Title 1'
    // const isCompleted: boolean = null

    // return this.appService.getHello();

    const todo = await this.todoService.findOne(id)
    if ( todo=== undefined ) {
      throw new HttpException('404 Page not found', HttpStatus.NOT_FOUND);
    }
    return this.todoService.findOne(id);
    /*const  todo = this.todoService.findOne(id)
    console.log(todo)
    if (todo === undefined) {
      console.log(todo)
      throw new NotFoundException("Item id="+ id +" doesn't exist.")
    }
    return todo*/
    // return "Show one id="+ id;
  }

  @Post()
  createAction(@Body() createDto: CreateDto): Promise<Todo> {
    // return 'Todo save';
    // delete todo.id
    const todo = new Todo()
    todo.title = createDto.title
    todo.isCompleted = createDto.isCompleted ? true : false
    console.log(todo.isCompleted)
    return this.todoService.create(todo);
    // return todo;
    // return this.appService.getHello();
  }

  @Put(':id')
  async updateAction(
    @Param(':id') id: string,
    @Body() updateDto: UpdateDto
  ): Promise<Todo> {
    // return 'Todo save';
    console.log("Update for id=="+ id)
    const todo = await this.todoService.findOne(updateDto.id)
    if ( todo=== undefined ) {
      throw new HttpException('404 Page not found', HttpStatus.NOT_FOUND);
    }
    todo.title = updateDto.title
    todo.isCompleted = updateDto.isCompleted ? true : false
    console.log("Update for id="+ todo.id)
    console.log(todo, "Updated")
    // return "Update for id="+ id
    // return todo
    return this.todoService.update(todo);
    // return this.appService.getHello();
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void> {
    // return 'Todo delete id='+ id;
    // return this.appService.getHello();
    return this.todoService.remove(id);
  }
}
