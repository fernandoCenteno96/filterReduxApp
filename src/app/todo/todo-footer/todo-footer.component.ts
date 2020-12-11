import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromFiltro from '../../filter/filter.actions';
import { AppState } from '../../app.reducers';
import { TodoModel } from '../../models/todo.model';
import { DeleteAllTodoAction } from '../todo.actions';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: fromFiltro.filtrosValidos[] = [
    'todos',
    'completados',
    'pendientes',
  ];
  filtroActual: fromFiltro.filtrosValidos;
  pendientes: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    });
  }
  cambiarFiltro(filtro: fromFiltro.filtrosValidos) {
    const accion = new fromFiltro.SetFilterAction(filtro);
    this.store.dispatch(accion);
  }
  contarPendientes(todos: TodoModel[]) {
    this.pendientes = todos.filter((todo) => !todo.completado).length;
  }
  limpiarCompletados() {
    const accion = new DeleteAllTodoAction();
    this.store.dispatch(accion);
  }
}
