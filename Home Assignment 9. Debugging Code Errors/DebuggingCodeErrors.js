var invoiceDocument = [
    {
        InvoiceID: 001,
        DocumentName: "Invoice 001",
        DocumentType: "invoice",
        Name: "Fly High Business Inc.",
        Product: [{
            Description: `24" Monitor`,
            QTY: 5,
            Price: 10000,
        },
        {
            Description: `Keyboard and Mouse set`,
            QTY: 4,
            Price: 1500,
        }],
    },
    {
        InvoiceID: 002,
        DocumentName: "Invoice 002",
        DocumentType: "invoice",
        Name: "Bracket Logic Appliances Inc.",
        Product: [{
                Description: `Projector`,
                QTY: 2,
                Price: 15000,
            },
            {
                Description: `Speakerphone`,
                QTY: 1,
                Price: 5500,
            },
            {
                Description: `Aircon`,
                QTY: 3,
                Price: 25200,
        }]
    }
];
 
function totalPerInvoice() {
  let total = 0
  let totalPricePerProduct = 0
  
  invoiceDocument.forEach((data) => {
    console.log(`Invoice Name: ${data.DocumentName}`);
        
    let ProductDescription = data.Product.map((prod) => {
        totalPricePerProduct = prod.Price * prod.QTY
        total += totalPricePerProduct
        return prod.Description.concat(` - P${prod.Price} X ${prod.QTY}`)
    });
 
    console.log(`${ProductDescription.join("\n")}`);
    console.log(`-------------`);
    console.log(`Total: ₱${total} \n`);
  });

}
 
totalPerInvoice();