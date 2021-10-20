let myMap = new Map();
   myMap.set('зеленое','яблоко');
   myMap.set('orange', 'orange');
   myMap.set('region', 26);
  for (let [key, value] of myMap) {
    console.log(`ключ - ${key}, значение - ${value}`)
  }