import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TodoModel } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import {
  ToggleTodoAction,
  EditarTodoAction,
  DeleteTodoAction,
} from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;
  editando: boolean;
  chkfiel: FormControl;
  textInput: FormControl;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkfiel = new FormControl(this.todo.completado);
    this.textInput = new FormControl(this.todo.text, Validators.required);
    this.chkfiel.valueChanges.subscribe(() => {
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });
  }
  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }
  terminarEdicion() {
    this.editando = false;
    if (this.textInput.invalid) return;
    if (this.textInput.value === this.todo.text) return;

    const body: TodoModel = {
      id: this.todo.id,
      text: this.textInput.value,
    };
    const accion = new EditarTodoAction(body);
    this.store.dispatch(accion);
  }
  delete() {
    const accion = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }
}
