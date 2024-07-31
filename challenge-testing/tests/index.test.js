const {CarritoCompra} = require("../index");

let nuevoCarrito;
let resultado;
let producto;
let productos;

beforeEach( () => {
  nuevoCarrito = new CarritoCompra()
  resultado = {
    array: []
  }
  producto = {
    name: "Producto A",
    price: 10
  }
  productos = [
    {
      name: "Producto A",
      price: 10
    },
    {
      name: "Producto B",
      price: 20
    },
    {
      name: "Producto C",
      price: 30
    }
  ]
})

function llenarCarrito(){
  productos.forEach((producto) => nuevoCarrito.agregarProducto(producto))
}

describe("Clase carrito de compra", () => {
    it("la clase CarritoCompra debe ser una clase", ( ) => {
        expect(typeof CarritoCompra).toBe("function")
      })
    it("una instancia de CarritoCompra sea un CarritoCompra", ( ) => {
      expect(nuevoCarrito).toBeInstanceOf(CarritoCompra)
 })
    it("la clase debe tener los métodos constructor,agregarProducto,calcularTotal,aplicarDescuento", ( ) => {
      expect(CarritoCompra.prototype.constructor).toBeDefined()
      expect(CarritoCompra.prototype.agregarProducto).toBeDefined()
      expect(CarritoCompra.prototype.calcularTotal).toBeDefined()
      expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined()
})
})

describe("Constructor", () => {
  it("el constructor debe inicializar el carrito como un array vacío", ( ) => {
      expect(nuevoCarrito).toEqual(resultado)
      expect(nuevoCarrito.array).toEqual([])
    })
})
describe("agregarProducto", () => {
  it("debe recibir un objeto representando un producto y agregarlo al carrito", ( ) => {
    nuevoCarrito.agregarProducto(producto)
    expect(nuevoCarrito.array).toContainEqual(producto)
    expect(nuevoCarrito.array.length).toBe(1)
  })
  it("debe recibir muchos objetos representando productos y agregarlos al carrito", ( ) => {
    llenarCarrito()
    expect(nuevoCarrito.array).toContainEqual({
      name: "Producto C",
      price: 30
    })
    expect(nuevoCarrito.array).toEqual(productos)
  })
})

describe("calcularTotal", () => {
  it("debe calcular el total de la compra sumando los precios de todos los productos en el carrito", ( ) => {
    llenarCarrito()
    expect(nuevoCarrito.calcularTotal()).toBe(60)
  }) 
})

describe("aplicarDescuento", () => {
  it("debe aplicar un descuento al total de la compra según el porcentaje especificado", ( ) => {
    llenarCarrito()
    expect(nuevoCarrito.aplicarDescuento(0)).toBe(60)
    expect(nuevoCarrito.aplicarDescuento(10)).toBe(54)
    expect(nuevoCarrito.aplicarDescuento(50)).toBe(30)
    expect(nuevoCarrito.aplicarDescuento(100)).toBe(0)
  }) 
})
