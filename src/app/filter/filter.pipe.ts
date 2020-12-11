import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { filtrosValidos } from './filter.actions';

@Pipe({
  name: 'pipefilter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: TodoModel[], filtro: filtrosValidos): TodoModel[] {
    switch (filtro) {
      case 'completados':
        return todos.filter((todo) => todo.completado);
      case 'pendientes':
        return todos.filter((todo) => !todo.completado);
      default:
        return todos;
    }
    return todos;
  }
}
