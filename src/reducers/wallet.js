// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas.
import { ADD_EXPENSE, COINS, DELETE_EXPENSE } from '../actions'

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
}

const ADD_CURRENCIES = 'ADD_CURRENCIES';

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CURRENCIES:
      return {
        ...state,
        currencies: action
      };
    case COINS:
      return {
        ...state,
        currencies: [...state.currencies, ...action.data],
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.expense],
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: action.filteredExpenses,
      }
    default:
      return state;
  }
}

export default wallet;