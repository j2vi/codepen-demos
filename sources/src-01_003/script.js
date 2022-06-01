"use strict";

/* -- Инициализация функций -- */

// Расчет площади квадрата
function squarecalc(number) {
  return number * number;
}

// Расчет площади прямоугольника
function rectanglecalc(number_a, number_b) {
  return number_a * number_b;
}

// Расчет площади круга и длины окружности (по радиусу)

// Расчет площади треугольника по трем сторонам.

/* -- Объявление и/или вывод функций -- */

let num_a = 4,
  num_b = 5;

console.log("Исходное значение: a:", num_a, "b:", num_b);

console.log("Площадь квадрата:", squarecalc(num_a));
console.log("Площадь прямоугольника:", rectanglecalc(num_a, num_b));

/* По урокам Трепачёва Д.П. code.mu */
