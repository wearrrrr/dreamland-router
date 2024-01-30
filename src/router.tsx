type Router = DLComponent<{
    paths: Map<string, Element>
    route: (path: string) => void
    children: any[],
  }>;
  function Router(this: Router) {
    if ((globalThis as any).dlRouter)
      throw "Can't be two routers!!!";
    (globalThis as any).dlRouter = this;
  
    this.paths = new Map();
  
    for (let child of this.children) {
      this.paths.set(child.$.path, child);
    }
  
    return (
      <div style="display:none;"></div>
    );
  }

  Router.prototype.route = function(path: string) {
    history.pushState({}, "", path)
    let elm = this.paths.get(path);
    this.root.replaceWith(elm);
    this.root = elm;
    
    if (typeof elm.$.present === "function") {
      elm.$.present();
    }
  }

  export default Router;