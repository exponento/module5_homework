let myMap = new Map();
myMap.set('зеленое','яблоко');
myMap.set('orange', 'orange');
myMap.set('region', 26);
for (let i of myMap.keys()){
 console.log('Ключ -', i, 'значение -',myMap.get(i))
}