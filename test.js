function findMinMax([firstElement, ...restElements]) {
    console.log(`firstElement ${firstElement}`, typeof(firstElement))
    console.log(`rest ${restElements}`, typeof(restElements))

  }
  
  console.log("Завдання 6 ====================================");
  findMinMax([5, 2, 8, 1, 9, 3]); // Виведе Min: 1 Max: 9
  

  let guest = "Дмитро";
let admin = "Іван";

console.log(guest);
console.log(admin);
[guest, admin] = [admin, guest];

console.log(guest);
console.log(admin);
// Буде: "Іван"
// Буде: "Дмитро"