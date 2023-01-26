let ingresos = prompt('Escribe tus ingresos:');
let gastos = prompt('Escribe tus gastos:');
let impuestos = prompt('Escribe porcentaje de impuestos');
impuestos = ((impuestos * ingresos)/100);
document.write(ingresos - impuestos - gastos);