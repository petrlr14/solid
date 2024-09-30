import Invoice from './entity';

class InvoiceRepository { 
  static save(invoice: Invoice): void {
    console.log('Invoice saved to database: ', invoice.description());
  } 
}

export default InvoiceRepository;