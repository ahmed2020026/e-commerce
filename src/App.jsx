import { Route, Routes } from 'react-router-dom';
import { HomePage } from './assets/pages/Home';
import { Header } from './assets/sections/NavBar';
import { Footer } from './assets/sections/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CartProvider } from './assets/sections/addToCart';
import { lazy, Suspense } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { RingLoader } from 'react-spinners'
const ProductData = lazy(() => import('./assets/sections/dataContent'))
const About = lazy(() => import('./assets/pages/About'));
const Contact = lazy(() => import('./assets/pages/Contact'));
const Product = lazy(() => import('./assets/pages/Product'));
const ProductDetails = lazy(() => import('./assets/pages/ProductDetails'));
const CartCheckOut = lazy(() => import('./assets/pages/CartCheckOut'));

const notify = () => toast('Wellcome to G-Store.');
notify()
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
          <Suspense fallback={<div className='w-full h-dvh flex justify-center items-center'><RingLoader color="#00a6f4" /></div>}>
            <CartProvider>
              <header className='p-3 shadow-xl fixed w-full bg-white z-50'>
                <Header />
              </header>
              <main>
                <Toaster containerStyle={{top: '100px'}} />
                <Routes>
                  <Route path={'/'} element={<HomePage />} />
                  <Route path={'/about'} element={<About />} />
                  <Route path={'/product'} element={<Product />} />
                  <Route path={'/:id'} element={<ProductDetails />} />
                  <Route path={'product/:id'} element={<ProductDetails />} />
                  <Route path={'/checkout'} element={<CartCheckOut />} />
                  <Route path={'/contact'} element={<Contact />} />
                </Routes>
              </main>
              <footer className="bg-sky-950 px-3">
                <Footer />
              </footer>
            </CartProvider>
          </Suspense>
        </ProductData>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}
export default App;