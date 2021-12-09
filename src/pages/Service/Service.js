import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className="container">
      <div className="row">

        <h2>Our Services</h2>
        <div className="col-md-2 bg-dark h-100">
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link to="/service/seo" className="nav-link">
                SEO
              </Link>
            </li>
            <li>
              <Link to="/service/web" className="nav-link">
                WEB
              </Link>
            </li>
            <li>
              <Link to="/service/web" className="nav-link">
                APP
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Service;