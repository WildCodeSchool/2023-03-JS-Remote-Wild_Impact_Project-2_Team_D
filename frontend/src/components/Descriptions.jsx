import "@components/Descriptions.css";

function Descriptions({ beer }) {
  return (
    <div>
      <div>
        <article className="descriptionCard">
          <h5 className="descriptionTitle">Description de la "{beer.name}"</h5>
          <p className="descriptionItem">{beer.brewers_tips}</p>
          <p className="descriptionItem">
            Premier brassage : {beer.first_brewed}{" "}
          </p>
          <p className="descriptionItem">{beer.description}</p>
          <p className="descriptionItem">
            Degré :{beer.abv}° PH :{beer.ph}
          </p>
          <p className="descriptionItem">Prix/Litre :{beer.price_per_liter}€</p>
        </article>
      </div>
    </div>
  );
}
export default Descriptions;
