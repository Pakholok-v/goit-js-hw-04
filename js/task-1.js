
function isEnoughCapacity(products, containerSize) {
  let totalProducts = 0;

  // Отримуємо масив значень (кількості) товарів з об'єкта products
  const quantities = Object.values(products);

  // Ітеруємося по кількості кожного товару і додаємо до загальної суми
  for (const quantity of quantities) {
    totalProducts += quantity;
  }

  // Повертаємо результат порівняння: чи поміститься загальна кількість у контейнер
  return totalProducts <= containerSize;
}

// Перевірка коректності роботи
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false