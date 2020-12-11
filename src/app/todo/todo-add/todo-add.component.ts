import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { AgregarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  textInput: FormControl;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.textInput = new FormControl('', Validators.required);
  }
  agregarTodo() {
    if (this.textInput.invalid) return;
    const accion = new AgregarTodoAction(this.textInput.value);
    this.store.dispatch(accion);
    this.textInput.setValue('');
  }
}
