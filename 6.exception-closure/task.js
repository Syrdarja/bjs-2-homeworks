﻿function parseCount(count) {
	const result = Number.parseFloat(count);
	if (Number.isNaN(parseFloat(count))) {
		throw new Error(`Невалидное значение`);
	}
	return result;
}


function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return error
	}
}


class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((a + b < c) || (a + c < b) || (b + c < a)) {
			throw new Error(`Треугольник с такими сторонами не существует`);
		}
	}
	get perimeter() {
		return (this.a + this.b + this.c);
	}

	get area() {
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return +area.toFixed(3);
	}
}

function getTriangle(a, b, c) {

	try {
		return new Triangle(a, b, c)
	} catch (error) {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}

