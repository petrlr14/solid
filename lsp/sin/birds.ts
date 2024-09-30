export class Bird { 
  fly() { 
    console.log('Bird is flying...');
  }
}

export class Penguin extends Bird { 

  fly(): void {
    throw new Error('Penguin cannot fly');
  }

  swim() { 
    console.log('Penguin is swimming...');
  }
}