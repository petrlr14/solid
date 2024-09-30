import Invoice, { InvoicePrinter } from './invoice/entity';
import InvoiceRepository from './invoice/repository';

function main() {
  const invoice = new Invoice(100);
  InvoiceRepository.save(invoice);
  InvoicePrinter.printInvoice(invoice);
}

main();