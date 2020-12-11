import { filtrosValidos } from './filter.actions';

import * as fromfiltro from './filter.actions';

const stateInicial: fromfiltro.filtrosValidos = 'todos';
export function filtroReducer(
  state = stateInicial,
  action: fromfiltro.accionesFilter
): filtrosValidos {
  switch (action.type) {
    case fromfiltro.SET_FILTRO:
      return action.filtro;

    default:
      return state;
  }
}
