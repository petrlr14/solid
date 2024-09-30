import { BackendDeveloper, FrontendDeveloper, QAEngineer, UIUXDesigner } from './developer';
import { Project } from './project';

function main() { 
  const Hipolito = new BackendDeveloper();
  const Pedro = new FrontendDeveloper();
  const Blanca = new UIUXDesigner();
  const Piera = new QAEngineer();
  const project = new Project(
    [
      Hipolito,
      Pedro,
      Blanca,
      Piera
    ]
  );

  project.deliver();
}

main();