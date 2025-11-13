function calcAverageCalories(days) {
  // 1. Перевіряємо, чи порожній масив. Якщо так, повертаємо 0.
  if (days.length === 0) {
    return 0;
  }

  // 2. Обчислюємо загальну суму калорій.
  let totalCalories = 0;

  // Використовуємо цикл for...of для ітерації по масиву об'єктів
  for (const day of days) {
    // Додаємо значення 'calories' кожного дня до загальної суми
    totalCalories += day.calories;
  }

  // 3. Обчислюємо середнє значення.
  // Середнє = Загальна сума / Кількість днів (довжина масиву)
  const averageCalories = totalCalories / days.length;

  // 4. Повертаємо середнє значення.
  return averageCalories;
}

// Перевірка коректності роботи
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0