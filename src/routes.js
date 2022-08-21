import React from 'react';

// const HomePage = React.lazy(() => import('./Pages/HomePage/HomePage'));
// const About = React.lazy(() => import('./Pages/About/About'));
// const Contact = React.lazy(() => import('./Pages/Contact/Contact'));
// const Products = React.lazy(() => import('./Pages/Products/Products'));
// const Services = React.lazy(() => import('./Pages/Service/Service'));

import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';
import Services from './Pages/Service/Service';

const routes = [
    {
        id: 1,
        title: 'homepage',
        component: HomePage,
        path: '/'
    },
    {
        id: 1,
        title: 'about',
        component: About,
        path: '/about'
    },
    {
        id: 1,
        title: 'services',
        component: Services,
        path: '/services'
    },
    {
        id: 1,
        title: 'products',
        component: Products,
        path: '/products/:id'
    },
    {
        id: 1,
        title: 'contact',
        component: Contact,
        path: '/contact'
    }
]

export default routes