import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className="row">

      <h2>Service</h2>
      <Outlet />
      <div className="col-md-3">
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link to="/service/seo" class="nav-link">
              SEO
            </Link>
          </li>
          <li>
            <Link to="/service/web" class="nav-link">
              WEB
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-md-8"></div>

    </div>
  );
};

export default Service;