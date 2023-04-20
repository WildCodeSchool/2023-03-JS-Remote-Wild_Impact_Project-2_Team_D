import "@components/Descriptions.css";

function Descriptions({ beer }) {
  return (
    <div>
      <div>
        <article className="descriptionCard">
          <h5 className="descriptionTitle">Description de la "{beer.name}"</h5>
          <p>{beer.brewers_tips}</p>
          <p>Premier brassage : {beer.first_brewed} </p>
          <p>{beer.description}</p>
          <p>
            Degré :{beer.abv}° PH :{beer.ph}
          </p>
          <p>Prix/Litre :{beer.price_per_liter}€</p>
        </article>
      </div>
    </div>
  );
}
export default Descriptions;
