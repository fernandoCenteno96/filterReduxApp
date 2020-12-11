import { ActionReducerMap } from '@ngrx/store';
import { filtroReducer } from './filter/filter.reducer';
import { TodoModel } from './models/todo.model';
import { todoReducer } from './todo/todo.reducer';
import { filtrosValidos } from './filter/filter.actions';

export interface AppState {
  todos: TodoModel[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer,
};
