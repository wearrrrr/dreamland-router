import Router from "./router"

let router = (
    <Router root="root-ele">
        <Home path="/" />
        <About path="/about" />
        <QueryParamTest path="/query-param-test" />
    </Router>
);

  function Home() {
    return <div className="home">
        <h1>Dreamland Router</h1>
        <button on:click={() => router.$.route("/about")}>About</button>
        <button on:click={() => router.$.route("/query-param-test?foo=bar&baz=qux")}>Query param test</button>
      </div>
  }

  function About() {
    return <div className="about">
      <h1>About dreamland-router</h1>
      <button on:click={() => router.$.route("/")}>Home</button>
    </div>
  }

  function QueryParamTest() {
    return <div className="query-param-test">
      <h1>Query param test</h1>
      <button on:click={() => router.$.route("/")}>Home</button>
    </div>
  }
  
window.addEventListener("load", () => {
    document.body.appendChild(router);
    router.$.route("/")
});