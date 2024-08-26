$(document).ready(function() {
    // Get the current page title
    var currentPageTitle = $('head title').text().trim();

    // Load JSON data from menu.json
    $.getJSON("data/menus.json", function(data) {
        // Start building the menu HTML
        var menuHtml = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">My Portfolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        `;

        // Loop through JSON data and create nav items
        $.each(data.menuItems, function(index, item) {
            // Check if the current menu item matches the page title
            var isActive = currentPageTitle.toLowerCase() === item.name.toLowerCase() ? 'active' : '';

            menuHtml += `
                <li class="nav-item">
                    <a class="nav-link ${isActive}" href="${item.link}">${item.name}</a>
                </li>
            `;
        });

        // Add the search form
        menuHtml += `
                        <li class="nav-item">
                            <form class="form-inline" action="https://www.google.com/search" method="GET" target="_blank">
                                <input type="hidden" name="sitesearch" value="vnexpress.net">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search" name="q">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="submit">Search on vnexpress.net</button>
                                    </div>
                                </div>
                            </form>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;

        // Insert the dynamically generated menu into the header
        $('.header').prepend(menuHtml);
    });
});