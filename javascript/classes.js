class Animal {
  constructor(name, type, age) {
    this.type = type;
    this.name = name;
    this.age = age;
  }

  walks() {
    console.log(`${this.name} can walk`);
  }
}

class Dog extends Animal {
  constructor(name, type, age) {
    super(name, type, age);
  }

  bark() {
    console.log(`${this.name} can bark`);
  }
}

class Cat extends Animal {
  constructor(name, type, age) {
    super(name, type, age);
  }

  meow() {
    console.log(`${this.name} can meow`);
  }
}

class BlackCat extends Cat {
  constructor(color, name, type, age) {
    super(name, type, age);
    this.color = color;
  }

  canBlackOut() {
    console.log('can black out');
  }
}

const cat = new Cat('cat', 'mammal', 2);
const dog = new Dog('dog', 'mammal', 4);

const blackCat = new BlackCat('deepBlack', 'cat', 'mammal', 2);

console.log(dog.bark());
console.log(cat.meow());

console.log(dog.walks());
console.log(cat.walks());

console.log(blackCat);
