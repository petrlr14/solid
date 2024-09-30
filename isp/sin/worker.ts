interface IWorker { 
  work(): void;
  eat(): void;
}

export class Human implements IWorker {

  work() {
    console.log('Human is working');
  }

  eat() {
    console.log('Human is eating');
  }
}

export class Robot implements IWorker {

  work() {
    console.log('Robot is working');
  }

  eat() {
    console.log('Robot does not eat, duh!');
  }
}