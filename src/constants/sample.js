import React from "react";

const SampleInformation =  [
  {
    shoeName: 'New Balance 992 Grey',
    brand: 'New Balance',
    silhoutte: 'New Balance 992',
    styleID: 'M992GR',
    make: 'New Balance 992',
    colorway: 'Grey/Silver',
    retailPrice: 175,
    thumbnail: 'https://images.stockx.com/images/New-Balance-992-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1609945785',
    releaseDate: '2020-03-15',
    description: '',
    urlKey: 'new-balance-992-grey',
    resellLinks: {
      stockX: 'https://stockx.com/new-balance-992-grey',
      flightClub: 'https://www.flightclub.com/992-grey-m992gr',
      goat: 'http://www.goat.com/sneakers/992-grey-m992gr'
    }
  },
  {
    shoeName: 'New Balance 992 Triple Black',
    brand: 'New Balance',
    silhoutte: 'New Balance 992',
    styleID: 'M992EA',
    make: 'New Balance 992',
    colorway: 'Black/Black/Black',
    retailPrice: 175,
    thumbnail: 'https://images.stockx.com/images/New-Balance-992-Triple-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1621453289',
    releaseDate: '2021-05-01',
    description: '',
    urlKey: 'new-balance-992-triple-black',
    resellLinks: {
      stockX: 'https://stockx.com/new-balance-992-triple-black',
      flightClub: 'https://www.flightclub.com/992-made-in-usa-black-m992ea',
      goat: 'http://www.goat.com/sneakers/992-made-in-usa-black-m992ea'
    }
  },
  {
    shoeName: 'New Balance 992 Navy Grey',
    brand: 'New Balance',
    silhoutte: 'New Balance 992',
    styleID: 'M992GG',
    make: 'New Balance 992',
    colorway: 'Navy/Grey',
    retailPrice: 175,
    thumbnail: 'https://images.stockx.com/images/New-Balance-992-Navy-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1609346025',
    releaseDate: '2020-01-01',
    description: '',
    urlKey: 'new-balance-992-navy-grey',
    resellLinks: {
      stockX: 'https://stockx.com/new-balance-992-navy-grey',
      flightClub: 'https://www.flightclub.com/992-made-in-usa-navy-m992gg',
      goat: 'http://www.goat.com/sneakers/992-made-in-usa-navy-m992gg'
    }
  },
  {
    shoeName: 'New Balance 992 Black Grey Suede',
    brand: 'New Balance',
    silhoutte: 'New Balance 992',
    styleID: 'M992EB',
    make: 'New Balance 992',
    colorway: 'Black/Grey',
    retailPrice: 175,
    thumbnail: 'https://images.stockx.com/images/New-Balance-992-Black-Suede-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1622048978',
    releaseDate: '2021-04-23',
    description: '',
    urlKey: 'new-balance-992-black-grey-suede',
    resellLinks: {
      stockX: 'https://stockx.com/new-balance-992-black-grey-suede',
      flightClub: 'https://www.flightclub.com/992-made-in-usa-black-m992eb',
      goat: 'http://www.goat.com/sneakers/992-made-in-usa-black-m992eb'
    }
  },
  {
    shoeName: 'New Balance 992 White Silver Nimbus Cloud',
    brand: 'New Balance',
    silhoutte: 'New Balance 992',
    styleID: 'M992NC',
    make: 'New Balance 992',
    colorway: 'White/Silver',
    retailPrice: 175,
    thumbnail: 'https://images.stockx.com/images/New-Balance-992-White-Silver-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612283159',
    releaseDate: '2020-01-07',
    description: '',
    urlKey: 'new-balance-992-white-silver',
    resellLinks: {
      stockX: 'https://stockx.com/new-balance-992-white-silver',
      flightClub: 'https://www.flightclub.com/992-white-silver-m992nc',
      goat: 'http://www.goat.com/sneakers/992-white-silver-m992nc'
    }
  },
  {
    shoeName: 'New Balance 992 Burgundy Gold',
    brand: 'New Balance',
    silhoutte: 'New Balance 992',
    styleID: 'M992CA',
    make: 'New Balance 992',
    colorway: 'Burgundy/Yellow/White',
    retailPrice: 175,
    thumbnail: 'https://images.stockx.com/images/New-Balance-992-Burgundy-Gold-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1629919672',
    releaseDate: '2021-07-27',
    description: '',
    urlKey: 'new-balance-992-burgundy-gold',
    resellLinks: {
      stockX: 'https://stockx.com/new-balance-992-burgundy-gold',
      flightClub: 'https://www.flightclub.com/992-made-in-usa-burgundy-m992ca',
      goat: 'http://www.goat.com/sneakers/992-made-in-usa-burgundy-m992ca'
    }
  },
  {
    shoeName: 'New Balance 992 Paperboy Fried Egg',
    brand: 'New Balance',
    silhoutte: 'New Balance 992',
    styleID: 'M992PB1',
    make: 'New Balance 992',
    colorway: 'White/Natural/Yellow',
    retailPrice: 260,
    thumbnail: 'https://images.stockx.com/images/New-Balance-992-Paperboy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1624462135',
    releaseDate: '2021-01-30',
    description: "Made with the help of the Parisian eatery, the Paperboy Paris x 992 Made in USA 'Fried Egg' reflects their favorite protein. Built with a mesh base, the shoe's upper is overlaid by suede, finished in a neutral series of hues. The eyestay sports a stitched construction and a yellow accent, while reflective detailing marks the 'N' logo on the side wall. The heel includes Paperboy's logo, while underfoot, Abzorb provides cushioning.",
    urlKey: 'new-balance-992-paperboy',
    resellLinks: {
      stockX: 'https://stockx.com/new-balance-992-paperboy',
      flightClub: 'https://www.flightclub.com/paperboy-paris-x-992-made-in-usa-fried-egg-m992pb1',
      goat: 'http://www.goat.com/sneakers/paperboy-paris-x-992-made-in-usa-fried-egg-m992pb1'
    }
  },
  {
    shoeName: 'New Balance 992 DTLR Discover and Celebrate',
    brand: 'New Balance',
    silhoutte: 'New Balance 992',
    styleID: 'M992DT',
    make: 'New Balance 992',
    colorway: 'Grey/Black/Red',
    retailPrice: 200,
    thumbnail: 'https://images.stockx.com/images/New-Balance-992-DTLR-Discover-and-Celebrate-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1623677464',
    releaseDate: '2021-05-28',
    description: "Inspired by Washington, D.C., which is close to the retailer's home base in Maryland, the DTLR x 992 'Discover & Celebrate' emerges in a classic mix of hues. The shoe's running construction is built with mesh on the upper, overlaid by suede and synthetic leather and highlighted by orange hits throughout. The heel replaces its usual 'USA' branding with a Washington, D.C., flag, while underfoot, an Encap midsole with Abzorb in the heel is included for cushioning.",
    urlKey: 'new-balance-992-dtlr-discover-and-celebrate',
    resellLinks: {
      stockX: 'https://stockx.com/new-balance-992-dtlr-discover-and-celebrate',
      flightClub: 'https://www.flightclub.com/dtlr-x-992-discover-celebrate-dc992',
      goat: 'http://www.goat.com/sneakers/dtlr-x-992-discover-celebrate-dc992'
    }
  },
  {
    shoeName: 'New Balance 992 JJJJound Grey',
    brand: 'New Balance',
    silhoutte: 'New Balance 992',
    styleID: 'M992J2',
    make: 'New Balance 992',
    colorway: 'Brown/Black',
    retailPrice: 260,
    thumbnail: 'https://images.stockx.com/images/New-Balance-992-JJJJound-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610083742',
    releaseDate: '2020-08-07',
    description: "The JJJJound x 992 released as part of a collaboration with the Montreal creative studio. Featuring a neutral look, the shoe's upper is built with a mix of mesh and suede, contrasted by white laces that secure the fit. The eyelets, inner lining and branding complement the design in black, with the classic 'N' logo worked into the side wall. Underfoot, the midsole brings together Encap and Abzorb for cushioning.",
    urlKey: 'new-balance-992-jjjjound',
    resellLinks: {
      stockX: 'https://stockx.com/new-balance-992-jjjjound',
      flightClub: 'https://www.flightclub.com/jjjjound-x-992-m992jjjjound',
      goat: 'http://www.goat.com/sneakers/jjjjound-x-992-m992jjjjound'
    }
  }
];

export default SampleInformation;