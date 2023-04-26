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



