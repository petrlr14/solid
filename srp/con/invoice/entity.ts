class Invoice { 
  constructor(public amount: number) {}

  getAmount() {
    return this.amount;
  }

  description(): string { 
    return 'Invoice amount: ' + this.amount;
  }
}

export default Invoice;

export class InvoicePrinter { 
  static printInvoice(invoice: Invoice): void {
    console.log('Invoice amount: ' + invoice.getAmount());
  }
}