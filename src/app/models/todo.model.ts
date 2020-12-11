export class TodoModel {
  id?: number;
  text?: string;
  completado?: boolean;
  constructor(text: string) {
    this.text = text.charAt(0).toUpperCase() + text.slice(1);

    this.completado = false;
    this.id = Math.random();
  }
}
