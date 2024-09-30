class Invoice { 
  constructor(public amount: number) { }

  getAmount() {
    return this.amount;
  }

  printInvoice(): void{ 
    console.log('Invoice amount: ' + this.amount);
  }

  saveToDatabase(): void { 
    console.log('Invoice saved to database');
  }

  description(): string { 
    return 'Invoice amount: ' + this.amount;
  }
}

export default Invoice;