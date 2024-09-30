interface Workable { 
  work(): void;
}

interface Feedable { 
  eat(): void;
}

class Human implements Workable, Feedable {
  work() {
    console.log('Worker is working');
  }

  eat() {
    console.log('Worker is eating');
  }
}

class Robot implements Workable {
  work() {
    console.log('Robot is working');
  }
}