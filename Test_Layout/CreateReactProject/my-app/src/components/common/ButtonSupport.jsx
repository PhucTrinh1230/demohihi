
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import routes from './routesConfig';
import './ButtonSupport.css'
const Btn = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentRouteIndex = routes.findIndex(route => route.path === location.pathname);

    const handleNext = () => {
        const nextRoute = routes[currentRouteIndex + 1];
        if (nextRoute) {
            navigate(nextRoute.path);
        }
    };

    const handlePrev = () => {
        const prevRoute = routes[currentRouteIndex - 1];
        if (prevRoute) {
            navigate(prevRoute.path);
        }
    };

    const nextRouteName = routes[currentRouteIndex + 1]?.name;
    const prevRouteName = routes[currentRouteIndex - 1]?.name;

    return (
        <div className='btn-group'>
            {prevRouteName && (
                <button className='btn btn-primary btnPrev m-3' onClick={handlePrev}>
                    Trở về {prevRouteName}
                </button>
            )}
            
            {nextRouteName && (
                <button  className='btn btn-primary btnNext m-3' onClick={handleNext}>
                    Đến {nextRouteName}
                </button>
            )}
        </div>
    );
};

export default Btn;

