import { Route, Routes } from 'react-router-dom';
import { HomePage } from './assets/pages/Home';
import { Header } from './assets/sections/NavBar';
import { ProductData } from "./assets/sections/dataContent";
import { Footer } from './assets/sections/Footer';
import { About } from './assets/pages/About';
import { Contact } from './assets/pages/Contact';
import { Product } from './assets/pages/Product';
import { ProductDetails } from './assets/pages/ProductDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      chacheTime: Infinity,
    }
  }
});


const App = () => {

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <ProductData>
          <header className='p-3 shadow-2xl fixed w-full bg-white z-50'>
            <Header />
          </header>
          <main>
            <Routes>
              <Route path={'/'} element={<HomePage />} />
              <Route path={'/about'} element={<About />} />
              <Route path={'/product'} element={<Product />} />
              <Route path={'product/:id'} element={<ProductDetails />} />
              <Route path={'/contact'} element={<Contact />} />
            </Routes>
          </main>
          <footer className="bg-sky-950 px-3">
            <Footer />
          </footer>
        </ProductData>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}
export default App;