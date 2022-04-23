import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Layout from './Layouts/Layout1/Layout1';
import NotFound from './Pages/NotFound/NotFound';
import './App.css';

function App() {

  const getRoutes = () => {
    return routes.map(route => {
      const Component = route.component;
      return <Route path = {route.path} exact element = {<Component/>}/>
    })
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Layout/>}>
            { getRoutes() }
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
