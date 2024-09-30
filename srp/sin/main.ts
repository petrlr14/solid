import Invoice from './invoice';

function main() { 
  const invoice = new Invoice(100);
  invoice.printInvoice();
  invoice.saveToDatabase();
}

main();