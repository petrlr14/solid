export interface Developer { 
  develop(): void;
}

export class BackendDeveloper implements Developer {
  develop() { 
    console.log('Developing backend');
  }
}

export class FrontendDeveloper implements Developer {
  develop() {
    console.log('Developing frontend');
  }
}

export class UIUXDesigner implements Developer {
  develop() {
    console.log('Designing UI/UX');
  }
}

export class QAEngineer implements Developer {
  develop() {
    console.log('Testing');
  }
}