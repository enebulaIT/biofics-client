import React from 'react';

const HomePage = React.lazy(() => import('./Pages/HomePage/HomePage'));
const About = React.lazy(() => import('./Pages/About/About'));

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
    }
]

export default routes