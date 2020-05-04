import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateDto, UpdateDto } from './dto';
// import { AppService } from './app.service';

@Controller('rest/todo')
export class TodoController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): string {
    return 'Todo get all';
    // return this.appService.getHello();
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    // const myTitle: any = 'Title 1'
    // const isCompleted: boolean = null

    /*return {
      'id': id,
      'title': myTitle,
      'isCompleted': isCompleted
    };*/
    // return this.appService.getHello();
    return "Show one id="+ id;
  }

  @Post()
  createAction(@Body() todo: CreateDto): CreateDto {
    // return 'Todo save';
    // delete todo.id
    console.log(todo);
    return todo;
    // return this.appService.getHello();
  }

  @Put(':id')
  updateAction(
    @Param(':id') id: string,
    @Body() todo: UpdateDto
  ): UpdateDto {
    // return 'Todo save';
    console.log("Update for id="+ todo.id)
    console.log(todo, "Updated")
    // return "Update for id="+ id
    return todo
    // return this.appService.getHello();
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): string {
    return 'Todo delete id='+ id;
    // return this.appService.getHello();
  }
}
