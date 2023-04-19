import "./BigCardBeer.css";

function BigCardBeer() {
  return (
    <div className="main">
      <div className="price">
        <strong>€€€</strong>
      </div>
      <article className="card">
        <div className="slogan">
          <h3>A Real Bitter Experience</h3>
        </div>
        <div className="imageMain">
          <img src="" alt="ceci est une bière, glou glou" />
        </div>
        <p>x12</p>
      </article>
      <nav className="panierMain">
        <ul>
          <li>
            <strong>Ajouter au panier</strong>
          </li>
          <li>
            <button className="buttonMain" type="button">
              +
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default BigCardBeer;
