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
import MainProductsPage from './Pages/MainProductsPage/MainProductsPage';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Services from './Pages/Service/Service';
import ServiceDetailpage from './Pages/ServiceDetailspage/ServiceDetailpage';
import FAQs from './Pages/FAQs/FAQs';

const routes = [
    {
        id: 1,
        title: 'homepage',
        component: HomePage,
        path: '/'
    },
    {
        id: 2,
        title: 'about',
        component: About,
        path: '/about'
    },
    {
        id: 3,
        title: 'services',
        component: Services,
        path: '/services'
    },
    {
        id: 4,
        title: 'service',
        component: ServiceDetailpage,
        path: '/service/:id'
    },
    {
        id: 5,
        title: 'services',
        component: MainProductsPage,
        path: '/products'
    },
    {
        id: 6,
        title: 'products',
        component: Products,
        path: '/products/:id'
    },
    {
        id: 7,
        title: 'products',
        component: ProductDetail,
        path: '/products/product/:id'
    },
    {
        id: 8,
        title: 'contact',
        component: Contact,
        path: '/contact'
    },
    {
        id: 9,
        title: 'faq',
        component: FAQs,
        path: '/faqs'
    }
]

export default routes