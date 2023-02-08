import { HashRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Layout from './Layouts/Layout1/Layout1';
import AuthLayout from './Layouts/AuthLayout/AuthLayout';
import NotFound from './Pages/NotFound/NotFound';
import './App.css';
import { Suspense } from 'react';
import Loading from './Pages/Loading/Loading';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FloatingButton from './Components/FloatingButton/FloatingButton';
import FloatingWhatsApp from 'react-floating-whatsapp';
import img from './assets/images/shortLogo.jpg';
import {PHONE} from './constants';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


function App() {
  const getRoutes = () => {
    return routes.map((route) => {
      const Component = route.component;
      return <Route path={route.path} exact element={<Component />} />;
    });
  };

  return (
    <div className='App'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense fallback={<Loading />}>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Layout />}>
              {getRoutes()}
            </Route>
            <Route path='/' element={<AuthLayout />}>
              <Route path='/signin' exact element={<SignIn />} />
              <Route path='/signup' exact element={<SignUp />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </HashRouter>
      </Suspense>
      <FloatingButton />
      <FloatingWhatsApp phoneNumber={PHONE.P1_FOR_LINK} accountName="Biofics" avatar={img}/>

    </div>
    
  );
}

export default App;
