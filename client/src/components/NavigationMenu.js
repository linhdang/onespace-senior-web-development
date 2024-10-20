import React, { useEffect, useState } from 'react';

function NavigationMenu() {
  const [menuItems, setMenuItems] = useState([]);
  const [currentPageTitle, setCurrentPageTitle] = useState('');

  useEffect(() => {
    // Set the current page title
    const pageTitle = document.title.trim();
    setCurrentPageTitle(pageTitle);

    // Fetch the menu data from menus.json
    fetch('/data/menus')
      .then(response => response.json())
      .then(data => {
        setMenuItems(data.menuItems);
      })
      .catch(error => console.error('Error fetching menu data:', error));
  }, []);

  return (
      <div class="header clearfix">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">My Portfolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {menuItems.map((item, index) => {
                  const isActive = currentPageTitle.toLowerCase() === item.name.toLowerCase() ? 'active' : '';
                  return (
                    <li className="nav-item" key={index}>
                      <a className={`nav-link ${isActive}`} href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
                <li className="nav-item">
                  <form className="form-inline" action="https://www.google.com/search" method="GET" target="_blank">
                    <input type="hidden" name="sitesearch" value="vnexpress.net" />
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search" name="q" />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Search on vnexpress.net</button>
                      </div>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default NavigationMenu;