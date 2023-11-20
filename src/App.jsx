import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App