const beers = [
  {
    type: "Braun",
    id: 1,
    name: "Buzz",
    tagline: "A Real Bitter Experience.",
    first_brewed: "09/2007",
    description:
      "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.5,
    ibu: 60,
    target_fg: 1010,
    target_og: 1044,
    ebc: 20,
    srm: 10,
    ph: 4.4,
    price_per_liter: 9.7,
    attenuation_level: 75,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Black",
    id: 2,
    name: "Trashy Blonde",
    tagline: "You Know You Shouldn't",
    first_brewed: "04/2008",
    description:
      "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
    image_url: "https://images.punkapi.com/v2/2.png",
    abv: 4.1,
    ibu: 41.5,
    target_fg: 1010,
    target_og: 1041.7,
    ebc: 15,
    srm: 15,
    ph: 4.4,
    price_per_liter: 10,
    attenuation_level: 76,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 18,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Black",
    id: 3,
    name: "Berliner Weisse With Yuzu - B-Sides",
    tagline: "Japanese Citrus Berliner Weisse.",
    first_brewed: "11/2015",
    description:
      "Japanese citrus fruit intensifies the sour nature of this German classic.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.2,
    ibu: 8,
    target_fg: 1007,
    target_og: 1040,
    ebc: 8,
    srm: 4,
    ph: 3.2,
    price_per_liter: 12.6,
    attenuation_level: 83,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist:
        "Soured naturally using the kettle souring technique, Yuzu fruit: 50g at middle, Yuzu juice: 200ml at FV",
    },
    brewers_tips:
      "Clean everything twice. All you want is the clean sourness of lactobacillus.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 4,
    name: "Pilsen Lager",
    tagline: "Unleash the Yeast Series.",
    first_brewed: "09/2013",
    description:
      "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
    image_url: "https://images.punkapi.com/v2/4.png",
    abv: 6.3,
    ibu: 55,
    target_fg: 1012,
    target_og: 1060,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    price_per_liter: 7.3,
    attenuation_level: 80,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 9,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.",
    contributed_by: "Ali Skinner <AliSkinner>",
  },
  {
    type: "Abbey",
    id: 5,
    name: "Avery Brown Dredge",
    tagline: "Bloggers' Imperial Pilsner.",
    first_brewed: "02/2011",
    description:
      "An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.",
    image_url: "https://images.punkapi.com/v2/5.png",
    abv: 7.2,
    ibu: 59,
    target_fg: 1027,
    target_og: 1069,
    ebc: 10,
    srm: 5,
    ph: 4.4,
    price_per_liter: 8.5,
    attenuation_level: 67,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 10,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 6,
    name: "Electric India",
    tagline: "Vibrant Hoppy Saison.",
    first_brewed: "05/2013",
    description:
      "Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.",
    image_url: "https://images.punkapi.com/v2/6.png",
    abv: 5.2,
    ibu: 38,
    target_fg: 1005,
    target_og: 1045,
    ebc: 15,
    srm: 7.5,
    ph: 4.4,
    price_per_liter: 11.2,
    attenuation_level: 88.9,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 22,
          unit: "celsius",
        },
      },
      twist: "Honey: 62.5g at End (WP), Coriander Seeds: 8.5g at 45mins",
    },
    brewers_tips:
      "Source some really good heather honey to get the right spicy esters in the beer.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Black",
    id: 7,
    name: "AB:12",
    tagline: "Imperial Black Belgian Ale.",
    first_brewed: "07/2012",
    description:
      "An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.",
    image_url: "https://images.punkapi.com/v2/7.png",
    abv: 11.2,
    ibu: 35,
    target_fg: 1017,
    target_og: 1108,
    ebc: 80,
    srm: 40,
    ph: 5.3,
    price_per_liter: 16,
    attenuation_level: 84,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist:
        "Aged in whisky barrels with raspberries, tayberries and blackberries",
    },
    brewers_tips:
      "Don't worry too much about controlling the temperature with the Belgian yeast strain - just make sure it doesn't rise above 30°C!",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 8,
    name: "Fake Lager",
    tagline: "Bohemian Pilsner.",
    first_brewed: "03/2013",
    description:
      "Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.",
    image_url: "https://images.punkapi.com/v2/8.png",
    abv: 4.7,
    ibu: 40,
    target_fg: 1010,
    target_og: 1046,
    ebc: 12,
    srm: 6,
    ph: 4.4,
    price_per_liter: 5.4,
    attenuation_level: 78,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 10,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Once the primary fermentation is complete get this beer as cold as you can and let it mature for as long as you've got.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 9,
    name: "AB:07",
    tagline: "Whisky Cask-Aged Scotch Ale.",
    first_brewed: "03/2010",
    description:
      "Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways. Liquorice, plum and raisin temper the warming alcohol, producing a beer capable of holding back the Scottish chill.",
    image_url: "https://images.punkapi.com/v2/9.png",
    abv: 12.5,
    ibu: 30,
    target_fg: 1020,
    target_og: 1106,
    ebc: 84,
    srm: 42,
    ph: 5.6,
    price_per_liter: 8.9,
    attenuation_level: 83,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 11,
          unit: "celsius",
        },
      },
      twist:
        "Scottish Heather Honey: 62.5g at middle, Add honey during the boil. After fermentation, age in a Scottish whisky cask",
    },
    brewers_tips:
      "Authentic heather honey adds a beautiful floral top note that is unachievable any other way.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 10,
    name: "Bramling X",
    tagline: "Single Hop IPA Series - 2011.",
    first_brewed: "01/2011",
    description:
      "Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.",
    image_url: "https://images.punkapi.com/v2/10.png",
    abv: 7.5,
    ibu: 75,
    target_fg: 1013,
    target_og: 1068,
    ebc: 22,
    srm: 11,
    ph: 4.4,
    price_per_liter: 9.9,
    attenuation_level: 80.9,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Getting good Bramling Cross is key. Most English hops are in leaf form (not pelletised), so getting fresh hops close to harvest (September) will give this beer the right amount of dark berry intensity.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 11,
    name: "Misspent Youth",
    tagline: "Milk & Honey Scotch Ale.",
    first_brewed: "04/2013",
    description:
      "The brainchild of our small batch brewer, George Woods. A dangerously drinkable milk sugar- infused Scotch Ale.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 7.3,
    ibu: 30,
    target_fg: 1020,
    target_og: 1079,
    ebc: 120,
    srm: 60,
    ph: 4.4,
    price_per_liter: 13.2,
    attenuation_level: 74.7,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: "See honey and lactose additions",
    },
    brewers_tips:
      "Lots of malt in this one. Mash-in in stages, and spread the pale ale malt throughout the mash to provide stability. If the mash starts to sink, stop, wait a few minutes while mixing, then start again.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Braun",
    id: 12,
    name: "Arcade Nation",
    tagline: "Seasonal Black IPA.",
    first_brewed: "12/2015",
    description:
      "Running the knife-edge between an India Pale Ale and a Stout, this particular style is one we truly love. Black IPAs are a great showcase for the skill of our brew team, balancing so many complex and twisting flavours in the same moment. The citrus, mango and pine from the hops – three of our all-time favourites – play off against the roasty dryness from the malt bill at each and every turn.",
    image_url: "https://images.punkapi.com/v2/12.png",
    abv: 5.3,
    ibu: 60,
    target_fg: 1012,
    target_og: 1052,
    ebc: 200,
    srm: 100,
    ph: 4.2,
    price_per_liter: 12.5,
    attenuation_level: 77,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Be as accurate as possible when weighing out your malts to ensure you strike the right balance.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Braun",
    id: 13,
    name: "Movember",
    tagline: "Moustache-Worthy Beer.",
    first_brewed: "11/2009",
    description:
      "A deliciously robust, black malted beer with a decadent dark, dry cocoa flavour that provides an enticing backdrop to the Cascade hops.",
    image_url: "https://images.punkapi.com/v2/13.png",
    abv: 4.5,
    ibu: 50,
    target_fg: 1012,
    target_og: 1047,
    ebc: 140,
    srm: 70,
    ph: 5.2,
    price_per_liter: 9.6,
    attenuation_level: 74.5,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "If you can’t find really fresh cascade, substitute it for Amarillo or Ahtanum.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Black",
    id: 14,
    name: "Alpha Dog",
    tagline: "Existential Red Ale.",
    first_brewed: "02/2010",
    description:
      "A fusion of caramel malt flavours and punchy New Zealand hops. A session beer you can get your teeth into.",
    image_url: "https://images.punkapi.com/v2/14.png",
    abv: 4.5,
    ibu: 42,
    target_fg: 1025,
    target_og: 1046,
    ebc: 62,
    srm: 31,
    ph: 4.4,
    price_per_liter: 12.6,
    attenuation_level: 72.8,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 22,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Crush the malt as close to brewing time as possible. The fresher the malt, the more intense caramel flavours will be released in the wort.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Abbey",
    id: 15,
    name: "Mixtape 8",
    tagline:
      "An Epic Fusion Of Old Belgian, American New Wave, And Scotch Whisky.",
    first_brewed: "01/2012",
    description:
      "This recipe is for the Belgian Tripel base. A blend of two huge oak aged beers – half a hopped up Belgian Tripel, and half a Triple India Pale Ale. Both aged in single grain whisky barrels for two years and blended, each beer brings its own character to the mix. The Belgian Tripel comes loaded with complex spicy, fruity esters, and punchy citrus hop character.",
    image_url: "https://images.punkapi.com/v2/15.png",
    abv: 14.5,
    ibu: 50,
    target_fg: 1014,
    target_og: 1093,
    ebc: 40,
    srm: 20,
    ph: 4.4,
    price_per_liter: 11.4,
    attenuation_level: 85,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist: "Barrel aged and blended with Anarchist Alchemist",
    },
    brewers_tips:
      "Brew twice as much Belgian Tripel as you were planning on ageing - it's awesome on its own too!",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Blonde",
    id: 16,
    name: "Libertine Porter",
    tagline: "Dry-Hopped Aggressive Porter.",
    first_brewed: "01/2012",
    description:
      "An avalanche of cross-continental hop varieties give this porter a complex spicy, resinous and citrusy aroma, with a huge malt bill providing a complex roasty counterpoint. Digging deeper into the flavour draws out cinder toffee, bitter chocolate and hints of woodsmoke.",
    image_url: "https://images.punkapi.com/v2/16.png",
    abv: 6.1,
    ibu: 45,
    target_fg: 1020,
    target_og: 1067,
    ebc: 219,
    srm: 109.5,
    ph: 4.4,
    price_per_liter: 7.8,
    attenuation_level: 70.1,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 18,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Mash in at a higher temperature to leave more unfermentable sugars in the wort. This gives the beer a sweeter porter profile.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Blonde",
    id: 17,
    name: "AB:06",
    tagline: "Imperial Black IPA.",
    first_brewed: "04/2011",
    description:
      "Our sixth Abstrakt, this imperial black IPA combined dark malts with a monumental triple dry-hop, using an all-star team of some of our favourite American hops. Roasty and resinous.",
    image_url: "https://images.punkapi.com/v2/17.png",
    abv: 11.2,
    ibu: 150,
    target_fg: 1013,
    target_og: 1098,
    ebc: 70,
    srm: 35,
    ph: null,
    price_per_liter: 6.9,
    attenuation_level: 87,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 17,
          unit: "celsius",
        },
      },
      twist: "White cane sugar: 150g at middle",
    },
    brewers_tips: "Boil down to desired OG (about 17 litres).",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Black",
    id: 18,
    name: "Russian Doll – India Pale Ale",
    tagline: "Nesting Hop Bomb.",
    first_brewed: "08/2014",
    description:
      "The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses, but by tweaking the amount of each hop used later in the boil and during dry- hopping, we can balance the malty backbone with some unexpected flavours. Simcoe is used in the whirlpool for all four beers, and yet still lends different characters to each",
    image_url: "https://images.punkapi.com/v2/18.png",
    abv: 6,
    ibu: 70,
    target_fg: 1012,
    target_og: 1058,
    ebc: 25,
    srm: 12.5,
    ph: 5.2,
    price_per_liter: 10.3,
    attenuation_level: 79.3,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Create balance through experimentation with the hop amounts and malt backbone.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Abbey",
    id: 19,
    name: "Hello My Name Is Mette-Marit",
    tagline: "Lingonberry Double IPA.",
    first_brewed: "06/2013",
    description:
      "We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.",
    image_url: "https://images.punkapi.com/v2/19.png",
    abv: 8.2,
    ibu: 70,
    target_fg: 1013,
    target_og: 1076,
    ebc: null,
    srm: null,
    ph: 4.4,
    price_per_liter: 12.7,
    attenuation_level: 83,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist:
        "Infusion of lingonberries alongside the dry hops, Cranberry Juice: 5.5g at 30mins, Lingonberries: 10g Twist",
    },
    brewers_tips:
      "Using crushed cranberries will dry out the beer further, drawing out their natural astringent character.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Black",
    id: 20,
    name: "Rabiator",
    tagline: "Imperial Wheat Beer",
    first_brewed: "03/2011",
    description:
      "Imperial Wheat beer / Weizenbock brewed by a homesick German in leather trousers. Think banana bread, bubble gum and David Hasselhoff.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 10.27,
    ibu: 26,
    target_fg: 1014,
    target_og: 1092,
    ebc: 24,
    srm: 12,
    ph: 4.4,
    price_per_liter: 10.6,
    attenuation_level: 85,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "If you are struggling to get that authentic head retention increase your mash temperature to about 70°C.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Abbey",
    id: 21,
    name: "Vice Bier",
    tagline: "Hoppy Wheat Bier.",
    first_brewed: "04/2013",
    description:
      "Our take on the classic German Kristallweizen. A clear German wheat beer, layers of bubblegum and vanilla perfectly balanced with the American and New Zealand hops.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.3,
    ibu: 25,
    target_fg: 1010,
    target_og: 1043,
    ebc: 30,
    srm: 15,
    ph: 4,
    price_per_liter: 12.5,
    attenuation_level: 81.8,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 22,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Ferment at higher or lower temperatures to select the esters that will create clove- like or banana-like flavours.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Abbey",
    id: 22,
    name: "Devine Rebel (w/ Mikkeller)",
    tagline: "Oak-aged Barley Wine.",
    first_brewed: "12/2008",
    description:
      "Two of Europe's most experimental, boundary-pushing brewers, BrewDog and Mikkeller, combined forces to produce a rebellious beer that combined their respective talents and brewing skills. The 12.5% Barley Wine fermented well, and the champagne yeast drew it ever closer to 12.5%. The beer was brewed with a single hop variety and was going to be partially aged in oak casks.",
    image_url: "https://images.punkapi.com/v2/22.png",
    abv: 12.5,
    ibu: 100,
    target_fg: 1030,
    target_og: 1093,
    ebc: 36,
    srm: 18,
    ph: 4.4,
    price_per_liter: 11.1,
    attenuation_level: 68,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: "Part-aged in oak barrels, finished with champagne yeast",
    },
    brewers_tips:
      "Rack off to a secondary fermenter before pitching in some champagne.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Abbey",
    id: 23,
    name: "Storm",
    tagline: "Islay Whisky Aged IPA.",
    first_brewed: "12/2007",
    description:
      "Dark and powerful Islay magic infuses this tropical sensation of an IPA. Using the original Punk IPA as a base, we boosted the ABV to 8% giving it some extra backbone to stand up to the peated smoke imported directly from Islay.",
    image_url: "https://images.punkapi.com/v2/23.png",
    abv: 8,
    ibu: 60,
    target_fg: 1010,
    target_og: 1082,
    ebc: 12,
    srm: 6,
    ph: 4.4,
    price_per_liter: 9.7,
    attenuation_level: 86,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: "Oak chips soaked in Islay whisky 50g",
    },
    brewers_tips:
      "After primary fermentation is complete, rack off into a secondary fermeter and add the oak chips to replicate the authentic Islay barrel experience.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 24,
    name: "The End Of History",
    tagline: "The World's Strongest Beer.",
    first_brewed: "06/2011",
    description:
      "The End of History: The name derives from the famous work of philosopher Francis Fukuyama, this is to beer what democracy is to history. Complexity defined. Floral, grapefruit, caramel and cloves are intensified by boozy heat.",
    image_url: "https://images.punkapi.com/v2/24.png",
    abv: 55,
    ibu: null,
    target_fg: 1000,
    target_og: 1112,
    ebc: null,
    srm: null,
    ph: 4.4,
    price_per_liter: 8.4,
    attenuation_level: 100,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 20,
          unit: "celsius",
        },
      },
      twist: "Nettles: 25g at end, Juniper: 25g at end",
    },
    brewers_tips:
      "You'll have to get this one all the way down to -70°C. Taxidermy is not optional.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Braun",
    id: 25,
    name: "Bad Pixie",
    tagline: "Spiced Wheat Beer.",
    first_brewed: "10/2008",
    description:
      "2008 Prototype beer, a 4.7% wheat ale with crushed juniper berries and citrus peel.",
    image_url: "https://images.punkapi.com/v2/25.png",
    abv: 4.7,
    ibu: 45,
    target_fg: 1010,
    target_og: 1047,
    ebc: 8,
    srm: 4,
    ph: 4.4,
    price_per_liter: 7.9,
    attenuation_level: 79,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: "Crushed juniper berries: 12.5g, Lemon peel: 18.8g",
    },
    brewers_tips:
      "Make sure you have plenty of room in the fermenter. Beers containing wheat can often foam aggressively during fermentation.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 26,
    name: "Skull Candy",
    tagline: "Pacific Hopped Amber Bitter.",
    first_brewed: "02/2010",
    description:
      "The first beer that we brewed on our newly commissioned 5000 litre brewhouse in Fraserburgh 2009. A beer with the malt and body of an English bitter, but the heart and soul of vibrant citrus US hops.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 3.5,
    ibu: 33,
    target_fg: 1012,
    target_og: 1038,
    ebc: 50,
    srm: 25,
    ph: 4.4,
    price_per_liter: 11.2,
    attenuation_level: 68.4,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Make sure your hops are well broken up and mixed in when added to the kettle for aroma additions. The wort is not boiling so is not agitating the hops to allow mixing. If the hops aren't steeped properly in the wort you won't get the maximum flavour impact.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Braun",
    id: 27,
    name: "Dog B",
    tagline: "Cacao, Coffee Chili Anniversary Stout.",
    first_brewed: "05/2013",
    description:
      "Our anniversary stout was based on AB:04, one of our most sought after beers ever. This beer is slightly different each year, with subtle variations coming into play purely down to environmental and fermentation factors. What doesn't change is the rich dark chocolate, bitter coffee and chilli warmth of this monumental Stout.",
    image_url: "https://images.punkapi.com/v2/27.png",
    abv: 15,
    ibu: 90,
    target_fg: 1003,
    target_og: 1120,
    ebc: 100,
    srm: 50,
    ph: 4.4,
    price_per_liter: 8.9,
    attenuation_level: 98,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: "Based on AB:04, but with added vanilla and 3.5 times the chilli.",
    },
    brewers_tips:
      "Be really careful when mashing, as this amount of malts can get tough to sparge! Add honey into the boil, and naga chili and vanilla in maturation (soak them in some neutral spirit to sanitise).",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Braun",
    id: 28,
    name: "HBC 369",
    tagline: "Single Hop India Pale Ale – 2012.",
    first_brewed: "02/2012",
    description:
      "HBC 369 brings rich fruity flavours with the tiniest layer of candy coating on top. HBC 369 (the hop) can bring notes of blueberries, pear, and possibly even sweet potato. HBC 369 (the beer) was balanced, with just one hop providing a complex aroma, and a dry bitterness.",
    image_url: "https://images.punkapi.com/v2/28.png",
    abv: 6.7,
    ibu: 67,
    target_fg: 1064,
    target_og: 1013,
    ebc: 19,
    srm: 9.5,
    ph: 4.4,
    price_per_liter: 10.8,
    attenuation_level: 79.7,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips: "HBC 369 is now known as Mosaic!",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Blonde",
    id: 29,
    name: "10 Heads High",
    tagline: "Imperial Red Ale.",
    first_brewed: "04/2013",
    description:
      "10 Heads High is loosely based on our awesome 2011 Prototype beer Hops Kill Nazis. This is an uncompromising 7.8% Imperial Red Ale loaded high with American Hops. Think of this as an Imperial India Red Ale, or a super-charged version of 5am Saint. Either way this is a seriously good beer!",
    image_url: "https://images.punkapi.com/v2/29.png",
    abv: 7.8,
    ibu: 70,
    target_fg: 1015,
    target_og: 1074,
    ebc: 90,
    srm: 45,
    ph: 4.4,
    price_per_liter: 10.9,
    attenuation_level: 79.7,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 18,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Achieve the red colour by using the ratio of Caramalt, Crystal and Dark Crystal malts. The trick is to get the colour, without too much dried fruit character.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Abbey",
    id: 30,
    name: "Dana - IPA Is Dead",
    tagline: "Single Hop India Pale Ale.",
    first_brewed: "02/2013",
    description:
      "Hailing from Slovenia, Dana was originally cross bred from the German Hallertau Magnum and native Slovenian varieties. Like any good faux noble hop should, it infuses a rustic, musty spiciness into a toasty beast of a malt base.",
    image_url: "https://images.punkapi.com/v2/30.png",
    abv: 6.7,
    ibu: 70,
    target_fg: 1015,
    target_og: 1066,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    price_per_liter: 11.5,
    attenuation_level: 77.3,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Noble hops (and their offspring) have a fundamentally different profile to many other hops, down to their different oil fractions. Chill your hops to retain all of the spicy, delicate volatile hop oils!",
    contributed_by: "Matt Ball <GeordieMatt>",
  },
  {
    type: "Abbey",
    id: 31,
    name: "Nanny State",
    tagline: "Alcohol Free Hoppy Ale.",
    first_brewed: "08/2009",
    description:
      "Brewing a full flavoured craft beer at 0.5% is no easy task. Packed with loads of Centennial, Amarillo, Columbus, Cascade and Simcoe hops, dry hopped to the brink and back and sitting at 55 IBUs, Nanny State is a force to be reckoned with. With a backbone of 8 different specialty malts, Nanny State will tantalise your taste buds and leave you yearning for more.",
    image_url: "https://images.punkapi.com/v2/31.png",
    abv: 0.5,
    ibu: 55,
    target_fg: 1005,
    target_og: 1007,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    price_per_liter: 12.9,
    attenuation_level: 28.6,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Get hops in every stage of the brewing process - mash, run off boil and flame off. There's not too much malt body, so the more hops the better.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Abbey",
    id: 32,
    name: "AB:05",
    tagline: "Belgian Imperial Stout.",
    first_brewed: "12/2010",
    description:
      "Belgian Imperial Stout aged on toasted coconut and cacao. The Belgian yeast strain introduces a whole new dimension to the Imperial Stout style resulting in a beer that resembles a marshmallow toasted on a smouldering barbeque then smothered in dark chocolate. Massively seductive and encapsulating this blacker than midnight beer pours with coffee brown head so thick you could almost stand on it, and with an epic lacing on your glass.",
    image_url: "https://images.punkapi.com/v2/32.png",
    abv: 12.5,
    ibu: 40,
    target_fg: 1030,
    target_og: 1126,
    ebc: 180,
    srm: 90,
    ph: 4.4,
    price_per_liter: 14.5,
    attenuation_level: 76,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: "Toasted coconut flakes: 75g, Cacao Nibs: 25g",
    },
    brewers_tips:
      "Add the coconut and cacao nibs after primary fermentation and let infuse for at least 6 months at a low temperature.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Blonde",
    id: 33,
    name: "Sorachi Ace",
    tagline: "Single Hop IPA Series - 2011.",
    first_brewed: "01/2011",
    description:
      "A hop that tastes of bubble gum? Seriously? No, we did not believe it either. But it does! This is one unique, son of a bitch of a hop. Lemony, deep, musty with a smoothness that belies its power. This hop is lemony like a lemon who was angry earlier but is now tired because of all the rage. This hop of Japanese origin is best enjoyed trying to make sushi from your gold fish, or trying to persuade your girlfriend (or boyfriend maybe) to dress up as a Geisha for Valentine’s Day.",
    image_url: "https://images.punkapi.com/v2/33.png",
    abv: 7.5,
    ibu: 75,
    target_fg: 1013,
    target_og: 1068,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    price_per_liter: 9.8,
    attenuation_level: 82.1,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Sorachi Ace is hop best handled with care. Too much and your beer may taste like dill pickle and lemons.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 34,
    name: "Bourbon Baby",
    tagline: "Barrel-Aged Scotch Ale.",
    first_brewed: "01/2014",
    description:
      "Santa Paws Scotch ale aged in bourbon barrels - light, dry and toasty, with vanilla, hints of chocolate and ginger biscuit, and a faint spicy hoppiness.",
    image_url: "https://images.punkapi.com/v2/34.png",
    abv: 5.8,
    ibu: 35,
    target_fg: 1005,
    target_og: 1049,
    ebc: 44,
    srm: 22,
    ph: 4.4,
    price_per_liter: 11.5,
    attenuation_level: 90,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Use bourbon-soaked oak chips in secondary to achieve barrel character.",
    contributed_by: "Ali Skinner <AliSkinner>",
  },
  {
    type: "Blonde",
    id: 35,
    name: "Berliner Weisse With Raspberries And Rhubarb - B-Sides",
    tagline: "Fruity Berliner Weisse.",
    first_brewed: "11/2015",
    description:
      "Tart, dry and acidic with a punch of summer berry as rhubarb crumble.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 3.6,
    ibu: 8,
    target_fg: 1007,
    target_og: 1040,
    ebc: null,
    srm: null,
    ph: 3.2,
    price_per_liter: 13.1,
    attenuation_level: 83,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist:
        "Raspberries in the boil, rhubarb at maturation. Soured naturally using the kettle souring technique, Raspberries at middle",
    },
    brewers_tips:
      "Fruits added at the end of the boil for 10 mins and additional added in maturation. Boil for no more than 15 mins.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Abbey",
    id: 36,
    name: "Shipwrecker Circus (w/ Oskar Blues)",
    tagline: "American Barley Wine - Oskar Blues Collab.",
    first_brewed: "09/2013",
    description:
      "In collaboration with the awesome Oskar Blues from Colorado, we created this big, twisted 10.5% American style barley wine. Big boozy aromas and a sweet viscosity, packed in with some heavy-hitting C-hops, for an intense bitterness to balance this full-bodied malt monster.",
    image_url: "https://images.punkapi.com/v2/36.png",
    abv: 10.5,
    ibu: 85,
    target_fg: 1022,
    target_og: 1102,
    ebc: 64,
    srm: 32,
    ph: 4.4,
    price_per_liter: 12.8,
    attenuation_level: 102,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Age this beer in the cellar for a few months to allow the warm alcohol flavours to reduce.",
    contributed_by: "Ali Skinner <AliSkinner>",
  },
  {
    type: "Black",
    id: 37,
    name: "Zephyr",
    tagline: "There’s A Storm Brewing.",
    first_brewed: "10/2008",
    description:
      "A 9.2% Double IPA aged for 21 months in a 1965 Invergordon cask with 30 kg of fresh highland strawberries. This beer is a riot of whisky, caramel and strawberry, all tempered by a toe curling bitterness enducing rapture in all who taste it. Who needs champagne?",
    image_url: "https://images.punkapi.com/v2/37.png",
    abv: 12.5,
    ibu: 125,
    target_fg: 1016,
    target_og: 1087,
    ebc: 40,
    srm: 20,
    ph: 4.4,
    price_per_liter: 9.9,
    attenuation_level: 81.2,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist: "Oak chips: 15g, Fresh strawberries: 3kg",
    },
    brewers_tips:
      "Rack into a secondary fermenter and add your strawberries. Use a blow-off rather than an airlock as the fermentation can get pretty wild as the yeast starts using the sugar from the strawberries.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 38,
    name: "Belgian Trappist",
    tagline: "Unleash the Yeast Series.",
    first_brewed: "09/2013",
    description:
      "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Abbey style yeasts add distinctive spicy and fruity notes, and dry out the finished beer.",
    image_url: "https://images.punkapi.com/v2/38.png",
    abv: 6.3,
    ibu: 55,
    target_fg: 1012,
    target_og: 1060,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    price_per_liter: 8.5,
    attenuation_level: 80,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 25,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.",
    contributed_by: "Ali Skinner <AliSkinner>",
  },
  {
    type: "Black",
    id: 39,
    name: "Kohatu - IPA Is Dead",
    tagline: "Single Hop India Pale Ale.",
    first_brewed: "02/2014",
    description:
      "As you’d expect from a New Zealand hop variety, Kohatu contributes bags of tropical fruit, but with loads of lime notes, & pineapple hits. Seriously fruity, with sweet, juicy melon and stonefruit notes.",
    image_url: "https://images.punkapi.com/v2/39.png",
    abv: 7.2,
    ibu: 70,
    target_fg: 1012,
    target_og: 1067,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    price_per_liter: 7.8,
    attenuation_level: 82.1,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "New Zealand hops are in short supply - club together with other brewers to try and get hold of some, or ask your local brewery if you can buy small amounts from them.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Blonde",
    id: 40,
    name: "Hello My Name is Vladimir",
    tagline: "Limonnik Infused Imperial IPA (Not for Gays).",
    first_brewed: "01/2014",
    description:
      "A Limonnik-infused, triple dry- hopped double IPA. Dry berry tartness and intense citrus hop character meld with a dry bready malt base, boosted by a hint of alcohol warmth. This beer was brewed as a protest against the anti-LGBT legislation in Russia surrounding the Sochi Olympics.",
    image_url: "https://images.punkapi.com/v2/40.png",
    abv: 8.2,
    ibu: 70,
    target_fg: 1013,
    target_og: 1076,
    ebc: 16,
    srm: 8,
    ph: 4.4,
    price_per_liter: 11.2,
    attenuation_level: 83,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist:
        "Fruit in the boil, berries in the fermenter. Limonnik Berries: 2.5, Twist.",
    },
    brewers_tips:
      "If you can't get hold of Limonnik berries, rose hips make an accessible alternative!",
    contributed_by: "Ali Skinner <AliSkinner>",
  },
  {
    type: "Blonde",
    id: 41,
    name: "AB:17",
    tagline: "Three Coffee Rye Imperial Porter.",
    first_brewed: "10/2014",
    description:
      "A triple whammy of coffee from HasBean gives our 17th Abstrakt concept beer an intense and roasty, dark mocha character. We brewed with espresso in the mash, cafetiere in the boil, and whole roast beans in the whirlpool and the fermenter.",
    image_url: "https://images.punkapi.com/v2/41.png",
    abv: 10.7,
    ibu: 100,
    target_fg: 1025,
    target_og: 1105,
    ebc: 300,
    srm: 150,
    ph: 4.3,
    price_per_liter: 10.6,
    attenuation_level: 76.2,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist:
        "Coffee: 25g at end, Coffee: 25g at end, Dark Muscavado Sugar: 250g at end",
    },
    brewers_tips: "Use freshly ground coffee for the best aromatic hit.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Blonde",
    id: 42,
    name: "Hardcore IPA",
    tagline: "Explicit Imperial Ale. Citrusy. Resinous. Intense.",
    first_brewed: "12/2009",
    description:
      "Pounding a triple payload of the biggest North American hops humanity has devised, braced by a backbone of caramel malt, this beer is deep, astringent and resinous, pushing to the extremes of lupulin thresholds. There’s nothing inscrutable going on; no mystery in the backstory. It doesn’t seek to be understood. A beer incapable of empathy; only hop overload.",
    image_url: "https://images.punkapi.com/v2/42.png",
    abv: 9.2,
    ibu: 125,
    target_fg: 1016,
    target_og: 1085,
    ebc: 40,
    srm: 20,
    ph: 4.4,
    price_per_liter: 10.4,
    attenuation_level: 81.2,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "There are so much hops in this beer it may break your gear! Watch out for the end of casting (or knockout for our American brethern), you don’t want to pull too much trub into the fermenter.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Blonde",
    id: 43,
    name: "American Wheat",
    tagline: "Hoppy American Wheat.",
    first_brewed: "07/2014",
    description:
      "A luscious blend of peach, blood orange and banana to make a suitably refreshing beverage that happily straddles the Atlantic.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.5,
    ibu: 17,
    target_fg: 1013,
    target_og: 1047,
    ebc: 10,
    srm: 5,
    ph: 5.3,
    price_per_liter: 11.1,
    attenuation_level: 72,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Using a starter to get your yeast as vibrant and healthy as possible will make all the difference here.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 44,
    name: "Dog Wired (w/8 Wired)",
    tagline: "New Zealand Imperial Pilsner.",
    first_brewed: "06/2013",
    description:
      "Brewed in collaboration with Soren from New Zealand’s stellar 8-Wired brewery, this is an Imperial Pilsner featuring two of our favourite New Zealand hops: Nelson Sauvin and Motueka. Sitting at a dangerously drinkable 7.1% ABV there’s a touch of Munich malt which gives this beer that little extra caramel biscuit bite to compliment the lip smackingly tropical hops. Expect an all out NZ hoppy riot.",
    image_url: "https://images.punkapi.com/v2/44.png",
    abv: 7.1,
    ibu: 65,
    target_fg: 1010,
    target_og: 1065,
    ebc: 13,
    srm: 6.5,
    ph: 4.4,
    price_per_liter: 9.7,
    attenuation_level: 85,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 9,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Hold the mash for longer at 63-64°C to get more fermentability from the wort.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Abbey",
    id: 45,
    name: "The Physics",
    tagline: "Laid Back Amber Beer.",
    first_brewed: "04/2007",
    description:
      "A hoppy Amber Ale that won World's Best Amber Beer in the World Beer Awards 2007. Malt and hops are in perfect harmony in this incredibly balanced beer. Biscuity, bitter and packing a surprisingly hoppy punch, this beer ultimately morphed into 5AM Saint.",
    image_url: "https://images.punkapi.com/v2/45.png",
    abv: 5,
    ibu: 47,
    target_fg: 1010,
    target_og: 1048.5,
    ebc: 65,
    srm: 32.5,
    ph: 4.4,
    price_per_liter: 10.8,
    attenuation_level: 79.4,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Keep the fermentation temperature as close to 19°C as possible. This will ensure the yeast creates a more neutral flavour profile, allowing the hops to really shine through.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 46,
    name: "Anarchist Alchemist",
    tagline: "Triple Hopped Triple Ipa.",
    first_brewed: "03/2012",
    description:
      "About as far as you can push an IPA; Anarchist Alchemist packs in three times the malt and three of our favourite hops. Nelson Sauvin, Amarillo and Centennial bring a range of flavours, touching on tropical fruit, white grape, tangerine, grapefruit, pine, spiced orange... the list goes on!",
    image_url: "https://images.punkapi.com/v2/46.png",
    abv: 16.5,
    ibu: 20.5,
    target_fg: 1000,
    target_og: 1112,
    ebc: 20,
    srm: 10,
    ph: 4.4,
    price_per_liter: 10.9,
    attenuation_level: 100,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 20,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "The biggest challenge with this beer is getting it to ferment out entirely. Hold mash temp at 65°C for 90 mins to ensure maximum fermentability. Use super high gravity yeast or champagne yeast to achieve the last few gravity points.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 47,
    name: "AB:15",
    tagline: "Salted Caramel Popcorn Strong Ale.",
    first_brewed: "03/2013",
    description:
      "A salted caramel popcorn Imperial Ale. Bourbon and Rum barrel aged, this 12.8% ale has complex and twisting flavours. Bitter caramel, wood, smoke, spice, treacle and vanilla are all present and intertwine against a smooth and lightly chewy mouthfeel. The salted caramel popcorn lends subtle hints of a smoky brininess.",
    image_url: "https://images.punkapi.com/v2/47.png",
    abv: 12.8,
    ibu: 50,
    target_fg: 1020,
    target_og: 1096,
    ebc: 111,
    srm: 55.5,
    ph: 4.4,
    price_per_liter: 12.4,
    attenuation_level: 79.17,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist:
        "Adding popped popcorn into the mash, then barrel ageing in fresh bourbon barrels",
    },
    brewers_tips:
      "By soaking some oak chips in bourbon, then steeping in the beer you not only get an authentic Bourbon taste - the beer will also gain ABV! Add salt to taste, too much will totally ruin the balance of the beer.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "IPA",
    id: 48,
    name: "Goldings - IPA Is Dead",
    tagline: "Single Hop India Pale Ale.",
    first_brewed: "02/2013",
    description:
      "This is East Kent Goldings re- invented and re-imagined and shows just what can be done with English hops if you use enough of them. In this amped up Goldings reincarnation expect to be slammed with floral lavender, a fruity riot of blackberries and spiced pears, bubblegum, plums and the illusion of thyme.",
    image_url: "https://images.punkapi.com/v2/48.png",
    abv: 6.7,
    ibu: 70,
    target_fg: 1015,
    target_og: 1066,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    price_per_liter: 8.4,
    attenuation_level: 77.3,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Take a read through each year’s hop harvest that is available. Some years are better than others.",
    contributed_by: "Matt Ball <GeordieMatt>",
  },
  {
    type: "Black",
    id: 49,
    name: "AB:14",
    tagline: "Oak-Aged Imperial Weizenbock.",
    first_brewed: "02/2013",
    description:
      "Think banoffee pie; loads of creamy sweet banana, and sticky warm toffee. This beer is super complex, and one for the sweet-toothed!",
    image_url: "https://images.punkapi.com/v2/49.png",
    abv: 10,
    ibu: 30,
    target_fg: 1016,
    target_og: 1094,
    ebc: 20,
    srm: 10,
    ph: 4.4,
    price_per_liter: 9.4,
    attenuation_level: 83,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 23,
          unit: "celsius",
        },
      },
      twist: "Oak chips: 25g at end",
    },
    brewers_tips:
      "Boil for even longer to get more caramelised flavours in the beer.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    type: "Black",
    id: 50,
    name: "Lost Dog (w/Lost Abbey)",
    tagline: "Rum-Aged Imperial Porter - Lost Abbey Collab.",
    first_brewed: "11/2011",
    description:
      "Our first beer aged in rum casks, Lost Dog saw us brew a collaboration imperial porter with our friends at Lost Abbey. The base beer was packed with toffee, chocolate and roasty notes, balanced with a subtle spicy hop character. The rum casks add a warming, spiced vanilla edge.",
    image_url: "https://images.punkapi.com/v2/50.png",
    abv: 10,
    ibu: 35,
    target_fg: 1012,
    target_og: 1080,
    ebc: 80,
    srm: 40,
    ph: 4.4,
    price_per_liter: 7.6,
    attenuation_level: 85,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: "Aged in rum casks for 12 months",
    },
    brewers_tips:
      "Ageing in barrels brings the ABV up. Recreate rum cask ageing by soaking oak chips in rum then adding to the maturing beer.",
    contributed_by: "Sam Mason <samjbmason>",
  },
];

export default beers;
