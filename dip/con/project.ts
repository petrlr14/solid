import { Developer } from './developer';

export class Project { 
  developers: Developer[];

  constructor(developers: Developer[]) {
    this.developers = developers;
  }

  deliver() { 
    this.developers.forEach(developer => developer.develop());
  }
}