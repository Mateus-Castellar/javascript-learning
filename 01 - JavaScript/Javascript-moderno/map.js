//com map não precisamos gerar uma nova const para armazenar os items corresponte a condição, é
//modificado o proprio array atual

const products = [
  { name: "casaco de couro", price: 10.99, category: "roupas" },
  { name: "camiseta", price: 15.99, category: "roupas" },
  { name: "blusa de frio", price: 16.99, category: "roupas" },
  { name: "calça", price: 17.99, category: "roupas" },
  { name: "panela de pressão", price: 51.99, category: "eletros" },
  { name: "fritadeira", price: 17.99, category: "eletros" },
  { name: "talheres", price: 4.99, category: "eletros" },
];

products.map((item) => {
  if (item.category === "roupas") {
    item.onSale = true;
  }
});

console.log(products);
