-- SQLBook: Code
CREATE TABLE beers (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  type varchar(255) NOT NULL,
  tagline varchar(255) NOT NULL,
  first_brewed varchar(255) NOT NULL,
  description varchar(500) NOT NULL,
  image_url varchar(255) NOT NULL,  
  price_per_liter INT NOT NULL,
  abv INT NOT NULL,
  ph INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO beers (name, type, tagline, first_brewed, description, image_url, price_per_liter, abv, ph) VALUES 
('Buzz', 'Braun', 'A Real Bitter Experience.','09/2007', 'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.','https://images.punkapi.com/v2/keg.png', 9.7, 4.1,4.4),
('Trashy Blonde', 'Black', "You Know You Shouldnt", '04/2008', 'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.', 'https://images.punkapi.com/v2/2.png', 10, 4.1, 4.4),
('Berliner Weisse With Yuzu - B-Sides', 'Black', 'Japanese Citrus Berliner Weisse.', '11/2015', 'Japanese citrus fruit intensifies the sour nature of this German classic.', 'https://images.punkapi.com/v2/keg.png', 12.6, 4.2, 3.2 ),
('Pilsen Lager', 'IPA', 'Unleash the Yeast Series.', '09/2013', 'Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.', 'https://images.punkapi.com/v2/4.png', 7.3, 6.3, 4.4);

