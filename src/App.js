import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Layout from './Layouts/Layout1/Layout1';
import AuthLayout from './Layouts/AuthLayout/AuthLayout';
import NotFound from './Pages/NotFound/NotFound';
import './App.css';
import { Suspense } from 'react';
import Loading from './Pages/Loading/Loading';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';

function App() {

  const getRoutes = () => {
    return routes.map(route => {
      const Component = route.component;
      return <Route path = {route.path} exact element = {<Component/>}/>
    })
  }

  return (
    <div className='App'>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              {getRoutes()}
            </Route>
            <Route path='/' element={<AuthLayout />}>
              <Route path='/signup' exact element={<SignUp />} />
              <Route path='/signin' exact element={<SignIn />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
