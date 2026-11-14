import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router"


// Refer App Component
// import App from "./App"
import { appRoutes } from "./appRoutes"
import { AuthProvider } from "./context/AuthProvider"
import { ProductProvider } from "./context/ProductProvider"


//1. Acquire root DOM element
const rootElement = document.getElementById("root")
if(!rootElement) {
    throw new Error("No root element found in HTML")
}


//2. Create a VDOM Container area
const root = ReactDOM.createRoot(rootElement)


// Render ROOT component
// root.render(<App />)
root.render(
  <AuthProvider>
    <ProductProvider>
      <RouterProvider router={appRoutes} />
    </ProductProvider>
  </AuthProvider>
)


//3. Render in VDOM area (container)
// root.render("Hello Deloitte - React Training")
/*root.render(<>
    <h1>My Shopping App </h1>
    <b> { 10+30 } </b>
    <p>This is Para</p>
  </>
)*/


console.log("Main TS File Executed....")

