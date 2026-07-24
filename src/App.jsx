import { useState } from 'react';
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [products, setProducts] = useState([])

function addProduct(event){
  event.preventDefault();
  setProducts(
    [...products, name] // Create a new list copying the content of the original list and add the new product
  );
  setName('');
}

  return (
    <>
      <section id="center">
        <div>
          <h1>Lista de compras</h1>
          <p>
            Agrega un producto
          </p>
        </div>

        <form id="input" onSubmit={addProduct}>
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Agregar</button>
        </form>
      </section>

      <section id="list">
        <ul type="checkbox">
          {
            products.map((product) => { // For each product in products add a new li element:
            return <li>{product}</li>
            })
          }
        </ul>
      </section>
    </>
  )
}

export default App
