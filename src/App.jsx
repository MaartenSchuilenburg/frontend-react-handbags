import "./App.css";
import Button from "./components/Button.jsx";

function App() {
  // const logInConsole = (message) => {
  //   console.log(message);
  // };

  return (
    <div>
      <h1>Handbags & Purses</h1>
      <nav>
        <ul>
          {/* <button href="/" onClick={() => logInConsole("to the collection")}>
            to the collection
          </button>
          <button href="/" onClick={() => logInConsole("shop all bags")}>
            shop all bags
          </button>
          <button href="/" onClick={() => logInConsole("pre-orders")} disabled>
            pre-orders
          </button>
          <br></br> */}
          <Button text="to the collection" />
          <Button text="shop all bags" />
          <Button text="pre-orders" disabled={true} />
        </ul>
      </nav>

      <main>
        <h2>Our Collection</h2>
        {/* <p>Discover our latest handbags and purses.</p> */}
      </main>
    </div>
  );
}

export default App;
