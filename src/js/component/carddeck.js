import React from "react";

function Carddeck() {
	const cards = [
		{
			title: "Cats on Instagram",
			description:
				"Some quick example text to build on the card title and make up the bulk of the card's content.",
			imageUrl:
				"https://www.sciencenews.org/wp-content/uploads/2019/07/072319_ee_cat-allergy_feat.jpg"
		},
		{
			title: "Cats doing things",
			description:
				"Some quick example text to build on the card title and make up the bulk of the card's content.",
			imageUrl:
				"https://www.sciencenews.org/wp-content/uploads/2020/03/033120_HT_covid-cat_feat-1028x579.jpg"
		},
		{
			title: "Cats love playing",
			description:
				"Some quick example text to build on the card title and make up the bulk of the card's content.",
			imageUrl:
				"https://i.guim.co.uk/img/media/7d04c4cb7510a4bd9a8bec449f53425aeccee895/289_287_1442_866/master/1442.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6b7cb2d2ab7847fb0623d2757c1260ba"
		},
		{
			title: "Cats from around the world",
			description:
				"Some quick example text to build on the card title and make up the bulk of the card's content.",
			imageUrl:
				"https://s.marketwatch.com/public/resources/images/MW-HP036_CatOnC_ZH_20190808094806.jpg"
		}
	];
	return (
		<div className="container-fluid d-flex justify-content-between mb-3">
			{cards.map((card, index) => {
				return (
					<div key={index} className="card cardstyle">
						<img
							src={card.imageUrl}
							className="cardImage"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{card.title}</h5>
							<p className="card-text">{card.description}</p>
							<a
								href="#"
								className="btn btn-link border border-primary badge badge-pill badge-light p-3 text-primary">
								{"Find out more!"}
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Carddeck;
