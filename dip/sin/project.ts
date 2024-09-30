import { BackendDeveloper, FrontendDeveloper } from './developer';

export class Project { 
  backendDeveloper: BackendDeveloper;
  frontendDeveloper: FrontendDeveloper;

  constructor(
    backendDeveloper: BackendDeveloper,
    frontendDeveloper: FrontendDeveloper
  ) {
    this.backendDeveloper = backendDeveloper;
    this.frontendDeveloper = frontendDeveloper;
  }
  

  deliver() { 
    this.backendDeveloper.develop();
    this.frontendDeveloper.develop();
  }
}