class ProductManager {
  constructor() {
    this.products = [];
  }
  static id = 0;
  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Por favor, rellene todos los campos");
      return;
    }
    if (this.products.some( (product) => product.code === code)) {
      console.log(`El codigo ${code} del producto ingresado ya existe`);
      return;
    }
this.products.push({
      title, description, price, thumbnail, code, stock, id: ++ProductManager.id, });
  }
  getProducts() {
    return this.products;
  }  
  getProductById(id) {
    if (this.products.find((product) => product.id === id)) {
      return this.products.find((product) => product.id === id);
    } else {
      return "Not found";
    }
  }
}
//Probando...
const productosLider = new ProductManager();
console.log("Inicia con un arreglo vacio");
console.log(productosLider.getProducts());
console.log("Agregamos un par de productos");
productosLider.addProduct("Arroz", "Grado1", 1150, "imagen1.jpg", "P001", 70);
productosLider.addProduct(" Leche", "Semidescremada", 950, "imagen2.jpg", "P002", 95 );
console.log(productosLider.getProducts());
console.log("Intentando ingresar un producto con un codigo repetido (P002)");
productosLider.addProduct(" Lentejas", "6mm", 2950, "imagen3.jpg", "P002", 98 );
console.log("Imprime el producto que coincida con el id 2:");
console.log(productosLider.getProductById(2));
console.log("Al tratar de imprimir el producto que coincida con el id 777 que no existe");
console.log(productosLider.getProductById(777));
