import { BackendDeveloper, FrontendDeveloper } from './developer';
import { Project } from './project';

function main() { 
  const Hipolito = new BackendDeveloper();
  const Pedro = new FrontendDeveloper();
  const project = new Project(
    Hipolito,
    Pedro
  );

  project.deliver();
}

main();