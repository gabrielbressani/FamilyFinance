const CONSOLIDATION_SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("CONSOLIDAÇÃO");

const ConsolidateCurrentMonth = () => {
  consolidate(previousMonthsIncome);
  consolidate(previousMonthsExpense);
}

const consolidate = (previousMonthsRow) => {
  let range = CONSOLIDATION_SHEET.getRange(previousMonthsRow(), 2, 2, 10);
     
  for (let column = 1; column < range.getNumColumns(); column++) {
    let previusMonthsFormula = range.getCell(1, column).getFormula();

    let currentMonthsFormula = previusMonthsFormula.replace(new RegExp(previousMonthName(), 'g'), currentMonthName());
 
    range.getCell(2, column).setValue(currentMonthsFormula);
    
  }
}
