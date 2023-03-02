// abstract class Animal
// {
//     abstract makeSound();
// }
// class Tiger extends Animal {
//     makeSound(): string {
//         return "Tiger: roarrrrr!";
//     }
// }
// class Chicken extends Animal {  // Nếu dùng Interface ở trường hợp này có được không ?
//     makeSound(): string {
//         return "Chicken: cluck-cluck!";
//     }
// }
// let animals = []
//
// animals[0] = new Tiger();
// animals[1] = new Chicken();
//
// animals.forEach((item, index) => {   // Indez ở đây ám chỉ gì?
//     console.log(item.makeSound())
// })
// interface Edible
// {
//     howToEat(): string;
// }
// class Chicken extends Animal implements Edible{
//     makeSound(): string {
//         return "Chicken: cluck-cluck!";
//     }
//
//     howToEat(): string {
//         return "Could be fried";
//     }
// }
//
// let animals = []
//
// animals[0] = new Tiger();
// animals[1] = new Chicken();
//
// animals.forEach((item, index) => {
//     console.log(item.makeSound());
//     if (item instanceof Chicken) {
//         console.log(item.howToEat())
//     }
// })
// abstract class Fruit implements Edible
// {
//     abstract howToEat(): string;
// }
// class Apple extends Fruit{
//     howToEat(): string {
//         return "Apple could be slided";
//     }
// }
//
// console.log('---Animals-----')
// let animals = []
//
// animals[0] = new Tiger();
// animals[1] = new Chicken();
//
// animals.forEach((item, index) => {
//     console.log(item.makeSound());
//     if (item instanceof Chicken) {
//         console.log(item.howToEat())
//     }
// })
//
// console.log('---Fruits-----')
// let fruits = []
//
// fruits[0] = new Apple();
// fruits[1] = new Orange();
//
// fruits.forEach(item => {
//     console.log(item.howToEat())
// })
//
