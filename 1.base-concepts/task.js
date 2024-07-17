"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	} else if (d === 0) {
		arr[0] = -b / (2 * a);
	} else if (d < 0) {
		arr = [];
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let persentMonths = percent / 100 / 12; //процентная ставка
	let loanBody = amount - contribution; //тело кредита

	let monthlyPayment = loanBody * (persentMonths + (persentMonths / (Math.pow(1 + persentMonths, countMonths) - 1))); //ежемесячный платеж
  
	let totalAmount = (monthlyPayment * countMonths).toFixed(2); //общая сумма кредита

	return totalAmount = parseFloat(totalAmount);
}