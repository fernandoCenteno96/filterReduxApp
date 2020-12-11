import { Action } from '@ngrx/store';
import { TodoModel } from '../models/todo.model';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO]Toggle todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const DELETE_TODO = '[TODO] Eliminar todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all todo';

export const DELETEALL_TODO = '[TODO] Eliminar All todo';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;
  constructor(public text: string) {}
}
export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public id: number) {}
}
export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;
  constructor(public todo: TodoModel) {}
}
export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;
  constructor(public id: number) {}
}
export class DeleteAllTodoAction implements Action {
  readonly type = DELETEALL_TODO;
}
export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;
  constructor(public completado: boolean) {}
}
export type Acciones =
  | AgregarTodoAction
  | ToggleTodoAction
  | EditarTodoAction
  | DeleteTodoAction
  | ToggleAllTodoAction
  | DeleteAllTodoAction;
