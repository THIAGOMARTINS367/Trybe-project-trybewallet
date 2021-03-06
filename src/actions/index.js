import { USER_EMAIL } from '../reducers/user';

export const COINS = 'COINS';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE_ID = 'EDIT_EXPENSE_ID';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const saveUserEmailInReduxStore = (email) => ({
  type: USER_EMAIL,
  email,
});

const saveCurrencyInStoreRedux = (data) => {
  const dataKeys = Object.keys(data);
  const dataFormatted = dataKeys.filter((element) => element !== 'USDT');
  localStorage.setItem('COINS', dataFormatted);
  return {
    type: COINS,
    data: dataFormatted,
  };
};

export const fetchAwesomeAPI = () => (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  return fetch(url)
    .then((resonse) => resonse.json())
    .then((data) => dispatch(saveCurrencyInStoreRedux(data)))
    .catch((error) => error);
};

export const saveExpenseInRedux = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const deleteExpense = (expenses, idExpense) => {
  const filteredExpenses = expenses.filter(
    (expenseObject) => expenseObject.id !== idExpense,
  );
  return {
    type: DELETE_EXPENSE,
    filteredExpenses,
  };
};

export const editExpense = (expensesRedux, componentState) => {
  const newExpensesArray = [];
  expensesRedux.forEach((objectExpense) => {
    if (objectExpense.id === componentState.id) {
      newExpensesArray.push(componentState);
    } else {
      newExpensesArray.push(objectExpense);
    }
  });
  return {
    type: EDIT_EXPENSE,
    newExpensesArray,
  };
};

export const saveIdOfExpenseToBeEdited = (idExpense) => ({
  type: EDIT_EXPENSE_ID,
  idExpense,
});
