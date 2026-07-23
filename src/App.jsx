import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div>
          <h1>Lista de compras</h1>
          <p>
            Agrega un producto
          </p>
        </div>

        <form id="input">
          <input type="text"/>
          <button type="submit">Agregar</button>
        </form>
      </section>

      <section id="list">

      </section>
    </>
  )
}

export default App
