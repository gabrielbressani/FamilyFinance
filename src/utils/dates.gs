const YEAR_FOR_INCOMES = 11;
const YEAR_FOR_EXPENSES = 35;

const previousMonthsIncome = () => new Date().getMonth() - 1 + YEAR_FOR_INCOMES;

const previousMonthsExpense = () =>  new Date().getMonth() - 1 + YEAR_FOR_EXPENSES;

const currentMonthName = () => monthNameBy(new Date().getMonth());

const previousMonthName = () => monthNameBy(new Date().getMonth() - 1);

const monthNameBy = (monthNumber) => {
  switch(monthNumber) {
    case 0:
      return "JANEIRO";
    case 1:
      return "FEVEREIRO";
    case 2:
      return "MARÇO";
    case 3:
      return "ABRIL";
    case 4:
      return "MAIO";
    case 5:
      return "JUNHO";
    case 6:
      return "JULHO";     
    case 7:
      return "AGOSTO";
    case 8:
      return "SETEMBRO";
    case 9:
      return "OUTUBRO";
    case 10:
      return "NOVEMBRO";
    default:
      return "DEZEMBRO";
  }
}
