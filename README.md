1. Colocarmos el browser router en el `main.jsx` ennvolviendo `App.jsx`. Esto se hace para que el paquete encargado de las rutas (`react-router-dom`), pueda funcionar correctamente

```
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

2. Creamos un nuevo componente llamados `routes.jsx`. Aquí definiremos todas las rutas, también crearemos una carpeta que tendrá toda la información que tendra la ruta que definamos. Por ejemplo, si queremos tener una página llamada pagina1 debemos crear un componentes llamado `Pagina1`, definir su path (que enlace va a tener) y una propiedad llamada element que tendrá el archivo que creamos (pagina1). Por ejemplo

`En el archivo AppRoutes.jsx`

```
<Route path="pagina1" element={<Nosotros/>}/>
```

`En el archivo routes.jsx, Agremos 2 páginas más`

```
<Route path="pagina1" element={<Pagina1/>}/>
<Route path="pagina2" element={<Pagina2/>}/>
<Route path="pagina3" element={<Pagina3/>}/>
```

`Ahora debemos encerrarlas dentro de un componente llamado` **Routes** `para que la librería de rutas, entienda que son Rutas`

```
<Routes>
    <Route path="pagina1" element={<Pagina1/>}/>
    <Route path="pagina2" element={<Pagina2/>}/>
    <Route path="pagina3" element={<Pagina3/>}/>
</Routes>
```

Para poder cambiar de ruta, debemos crear una barra de navegación, en este caso haremos una sidebar

`Creamos un componente llamado llamado sidebar.jsx`, dicho componente tiene que habilitar la opción de navegación entre rutas para hacerlo debemos crear componetes llamados **Link**, la propiedad **to** indica a que ruta iremos cuando se haga click en el boton

```
<div>
    <Link to="./pagina1"> Página 1</Link>
    <Link to="./pagina2"> Página 2</Link>
    <Link to="./pagina3"> Página 3</Link>
</div>
```

Ahora para que aparezcan los botones de navegación en la página principal, debemos agregarlos antes del Routes en el archivo `AppRouter.jsx` quedando así

```
export const AppRoutes = () => {
  return (
    <>
        <Sidebar/>
        <Routes>
            <Route path="pagina1"  element={<Pagina1/>}/>
            <Route path="pagina2"  element={<Pagina2/>}/>
            <Route path="pagina3"  element={<Pagina3/>}/>
        </Routes>
    </>
  )
}
```

`Además debemos Agregar las rutas al componente App.jsx`

```
function App() {

  return (
    <div className="App">
        <AppRoutes/>
    </div>
  )
}
```

Ahora que funcionan las rutas, pero nos falta:

- Colocar los estilos para que la sidebar quede a la izquierda, y todo el contenido de las páginas a la derecha. Para eso en el componente de la sidebar debemos crear una clase llamada `SidebarContainer`.

```
export const Sidebar = () => {
  return (
    <div className='SidebarContainer'>
        <Link to="./pagina1"> Página 1</Link>
        <Link to="./pagina2"> Página 2</Link>
        <Link to="./pagina3"> Página 3</Link>
    </div>
  )
}
```

Ahora que tenemos definida la clase podemos modificarla con css, lo primero que haremos sera usar flex, que es una propiedad que nos sirve para que los elementos se posicionen como nosotros queramos, por ejemplo en este caso queremos que los elementos de la sidebar se despleguen como un stack, y no como una al lado del otro.

`App.css`

```
.SidebarContainer{
    display: flex;
    flex-direction: column;
    background-color: blueviolet;
    width: 200px;
    height: 100vh;
}
```

- **height: 100vh;** Le dice que ocupe todo el largo que se ve en la pantalla.

Ahora estilemos un poco los componentes link

```
a {
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    text-align: center;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
}
```

- Por ahora podemos ver que la sidebar esta a la derecha, pero tenemos un problema, el contenido de las páginas no se esta mostrando a la derecha, para arreglarlo debemos usar flex (también se puede utilizar grid.)

```
.App {
    display: flex;
    flex-direction: row;
}
```
