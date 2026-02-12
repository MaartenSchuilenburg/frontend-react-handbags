import "./App.css";
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Title from "./components/Title.jsx";

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
        {/* <article>
          <img src="src/assets/bag_1.png" alt="handbag" />
          <span role="img" aria-label="handbag">
            Best Seller
          </span>
          <p>The handy bag</p>
          <h4>€400,-</h4>
        </article>
        <article>
          <img src="src/assets/bag_2.png" alt="handbag" />
          <span role="img" aria-label="handbag">
            Best Seller
          </span>
          <p>The stylish bag</p>
          <h4>€250,-</h4>
        </article>
        <article>
          <img src="src/assets/bag_3.png" alt="handbag" />
          <span role="img" aria-label="handbag">
            New Collection
          </span>
          <p>The simple bag</p>
          <h4>€300,-</h4>
        </article>
        <article>
          <img src="src/assets/bag_4.png" alt="handbag" />
          <span role="img" aria-label="handbag">
            New Collection
          </span>
          <p>The trendy bag</p>
          <h4>€150,-</h4>
        </article> */}
            <Product name="The handy bag" price="€400,-" image="src/assets/bag_1.png" badge="Best Seller" />
            <Product name="The stylish bag" price="€250,-" image="src/assets/bag_2.png" badge="Best Seller" />
            <Product name="The simple bag" price="€300,-" image="src/assets/bag_3.png" badge="New Collection" />
            <Product name="The trendy bag" price="€150,-" image="src/assets/bag_4.png" badge="New Collection" />
        
      </main>

      <footer>
        <section>
          <h2>The Brand</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <section>
          <img src="src/assets/brand.png" alt="logo" />
        </section>
        <section>
          <img src="src/assets/our_story.png" alt="logo" />
        </section>
        <section>
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <Title title="The Brand" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit." img="src/assets/brand.png" />   
        <Title img="src/assets/brand.png" />   
        <Title title="Our Story" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />  
        <Title img="src/assets/our_story.png" />   
      </footer>


    </div>
  );
}

export default App;
