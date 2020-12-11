import * as accionsTodo from './todo.actions';
import { TodoModel } from '../models/todo.model';
import { DELETEALL_TODO } from './todo.actions';
const todo1 = new TodoModel('prueba');
const todo2 = new TodoModel('prueba1');
todo2.completado = true;
const todo3 = new TodoModel('prueba2');
const stadoInicial: TodoModel[] = [todo1, todo2, todo3];

export function todoReducer(
  state = stadoInicial,
  action: accionsTodo.Acciones
) {
  switch (action.type) {
    case accionsTodo.AGREGAR_TODO:
      const todo = new TodoModel(action.text);
      return [...state, todo];
    case accionsTodo.TOGGLE_TODO:
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            completado: !item.completado,
          };
        } else {
          return item;
        }
      });

    case accionsTodo.EDITAR_TODO:
      return state.map((item) => {
        if (item.id === action.todo.id) {
          return {
            ...item,
            text: action.todo.text,
          };
        } else {
          return item;
        }
      });
    case accionsTodo.DELETE_TODO:
      return state.filter((item) => item.id != action.id);

    case accionsTodo.TOGGLE_ALL_TODO:
      return state.map((item) => {
        return {
          ...item,
          completado: action.completado,
        };
      });
    case accionsTodo.DELETEALL_TODO:
      return state.filter((item) => !item.completado);
    default:
      return state;
  }
}
