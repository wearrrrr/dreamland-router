const ROUTERS = [];
let IS_ROUTER_REGISTERED = false;

function getCurrentURLPathname() {
    return window.location.pathname;
}

function registerRouter(route) {
    ROUTERS.push(route); // Add the route to the array
    if (IS_ROUTER_REGISTERED) {
        return;
    }
    IS_ROUTER_REGISTERED = true;
    window.addEventListener("popstate", () => {
        handleRoute();
    });
}

function handleRoute() {
    const currentURL = getCurrentURLPathname();
    const currentRoute = ROUTERS.find((router) => router.path === currentURL);
    if (currentRoute) {
        currentRoute.callback();
    }
}

function routeTo(path) {
    window.history.pushState({}, "", path);
    handleRoute();
}

registerRouter({
    path: "/",
    callback: () => {
        console.log("Home page");
    },
});

registerRouter({
    path: "/about",
    callback: () => {
        console.log("About page");
    },
});

registerRouter({
    path: "/contact",
    callback: () => {
        console.log("Contact page");
    },
});

handleRoute();

Array.from(document.getElementsByClassName('nav-button')).forEach((button) => {
    button.addEventListener('click', () => {
        routeTo(button.getAttribute('data-destination'));
    }); 
});