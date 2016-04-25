module.exports = {
  user: {
    _id: '56cdf15bef62061312bfc144',
    username: 'johndomingo',
    loggedIn: false,
    name: 'John Domingo',
    home: 94102,
    friends: [
      '56cdecf9c52f037b0e66709c', // @johndomingo
      '56cdfa6d901de47718fba699',  // @liz
      '56ce2974f2f1d75732dfb172'  // @andrew_bresee
    ]
  },
  location: {
    city: 'San Francisco',
    state: 'CA',
    zipcode: 94102
  },
  locations: [
    'San Francisco, CA',
    'New York, NY',
    'Seattle, WA',
    'San Diego, CA',
    'Oakland, CA',
    'Kansas City, Missouri'
  ],
  boards: [
    {  _id: '56cdff21330d76dd1d616c47',
      title: 'My Great Big Ice Cream Adventure',
      description: "This weekend, I'm going to have the biggest fattest ice cream adventure this side of the bay. Join me!",
      category: 'Adventure',
      image: 'https://media.giphy.com/media/3o85xJlRU8SJkyEWHe/giphy.gif',
      creator: '56cdf15bef62061312bfc144',
      cards: [
        '506ef69fe4b0eca4bc1d56f8',
        '4baae1f9f964a520f18b3ae3',
        '42b21280f964a5206e251fe3',
        '4eac41a5dab40d132703fc44',
        '4ae35463f964a520849321e3',
        '49e22ce6f964a520f9611fe3'
      ]
    },
    {  _id: '56ce0b812d9c207f28eebd10',
      title: '48 Hours in San Francisco',
      description: "What would you do if you had 48 hours in San Francisco? I know what I'd do! EAT ICE CREAM!! Check out my tots fav places.",
      category: 'Travel',
      image: 'https://media.giphy.com/media/xvoTdXXcdfgM8/giphy.gif',
      creator: '56cdf15bef62061312bfc144',
      cards: [
        '506ef69fe4b0eca4bc1d56f8',
        '4baae1f9f964a520f18b3ae3',
        '42b21280f964a5206e251fe3',
        '4eac41a5dab40d132703fc44',
        '4ae35463f964a520849321e3',
        '49e22ce6f964a520f9611fe3'
      ]
    },
    {  _id: '56ce0bb1b1f4acb0283ff589',
      title: 'Bachelor Party, clearly',
      description: "I'm getting married! To ice cream! You're not invited because this is a private event and the only attendee is me but that's alright because it just means more ice cream for me so hah!",
      category: 'Nightout',
      image: 'https://media.giphy.com/media/26BkN3VJmiuWL9ZK0/giphy.gif',
      creator: '56cdf15bef62061312bfc144',
      cards: [
        '42b21280f964a5206e251fe3',
        '4eac41a5dab40d132703fc44',
        '4ae35463f964a520849321e3',
        '49e22ce6f964a520f9611fe3'
      ]
    },
    {  _id: '56ce0c18b82fed0529f26b06',
      title: 'Lazy Sunday',
      description: "Today is a particularly lazy Sunday. I only have energy to go out for two meals today. Better make it count.",
      category: 'Weekend',
      image: 'https://media.giphy.com/media/VOW26lAtuVqUg/giphy.gif',
      creator: '56cdf15bef62061312bfc144',
      cards: [
        '506ef69fe4b0eca4bc1d56f8',
        '4baae1f9f964a520f18b3ae3'
      ]
    }
  ],
  cards: [
    {
      id: "506ef69fe4b0eca4bc1d56f8",
      name: "Ghirardelli Ice Cream & Chocolate Shop",
      categories: [
        {shortName: "Desserts", primary: true}
      ],
      contact: {
        formattedPhone: "(415) 536-7830",
        facebook: "1389191947959755"
      },
      url: "http://ghirardelli.com",
      location: {
        address: "2 New Montgomery St",
        city: "San Francisco",
        state: "CA",
        postalCode: "94105",
        lat: 37.78878321579423,
        lng: -122.4021411242791
      },
      stats: {
        checkinsCount: 4656,
        usersCount: 3643,
        tipCount: 48,
      },
      hasMenu: true,
      menu: {
        mobileUrl: "https://foursquare.com/v/506ef69fe4b0eca4bc1d56f8/device_menu"
      }
    },
    {
      id: "4baae1f9f964a520f18b3ae3",
      name: "Chile Pies & Ice Cream",
      categories: [
        {shortName: "Desserts", primary: true}
      ],
      contact: {
        formattedPhone: "(415) 614-9411",
        facebook: "156884124354769"
      },
      url: "http://www.greenchilekitchen.com/chilepies",
      location: {
        address: "601 Baker St",
        city: "San Francisco",
        state: "CA",
        postalCode: "94117",
        lat: 37.77652174066475,
        lng: -122.44170159101488
      },
      stats: {
        checkinsCount: 5437,
        usersCount: 2872,
        tipCount: 90,
      },
      hasMenu: true,
      menu: {
        externalUrl: "http://www.greenchilekitchen.com/chilepies-menu/"
      }
    },
    {
      id: "42b21280f964a5206e251fe3",
      name: "Swensen's Ice Cream",
      categories: [
        {shortName: "Ice Cream", primary: true}
      ],
      contact: {
        formattedPhone: "(415) 775-6818",
        facebook: "152678084749323"
      },
      url: "http://www.swensens.com",
      location: {
        address: "1999 Hyde St",
        city: "San Francisco",
        state: "CA",
        postalCode: "94109",
        lat: 37.799060628977294,
        lng: -122.41922467947006
      },
      stats: {
        checkinsCount: 5737,
        usersCount: 3755,
        tipCount: 77
      },
      hasMenu: true,
      menu: {
        externalUrl: "http://swensens.com/menu/"
      }
    },
    {
      id: "4eac41a5dab40d132703fc44",
      name: "The Ice Cream Bar Soda Fountain",
      categories: [
        {shortName: "Ice Cream", primary: true}
      ],
      contact: {
        formattedPhone: "(415) 742-4932",
        facebook: "303090803075345"
      },
      url: "http://theicecreambarsf.com",
      location: {
        address: "815 Cole St",
        city: "San Francisco",
        state: "CA",
        postalCode: "94117",
        lat: 37.766434751363306,
        lng: -122.45017118400813
      },
      stats: {
        checkinsCount: 9599,
        usersCount: 5603,
        tipCount: 170
      },
      hasMenu: true,
      menu: {
        mobileUrl: "https://foursquare.com/v/4eac41a5dab40d132703fc44/device_menu"
      }
    },
    {
      id: "4ae35463f964a520849321e3",
      name: "Miyako Old Fashion Ice Cream Shop",
      categories: [
        {shortName: "Ice Cream", primary: true}
      ],
      contact: {
        formattedPhone: "(415) 931-5260"
      },
      canonicalUrl: "https://foursquare.com/v/miyako-old-fashion-ice-cream-shop/4ae35463f964a520849321e3",
      location: {
        address: "1460 Fillmore St",
        city: "San Francisco",
        state: "CA",
        postalCode: "94115",
        lat: 37.783052326151484,
        lng: -122.43286409378109
      },
      stats: {
        checkinsCount: 507,
        usersCount: 320,
        tipCount: 10
      }
    },
    {
      id: "49e22ce6f964a520f9611fe3",
      name: "Mitchell's Ice Cream",
      categories: [
        {shortName: "Desserts", primary: true}
      ],
      contact: {
        formattedPhone: "(415) 614-9411",
        twitter: "mitchellsicecre",
        facebook: "115681848447769"
      },
      url: "http://www.mitchellsicecream.com",
      location: {
        address: "688 San Jose Ave",
        city: "San Francisco",
        state: "CA",
        postalCode: "94110",
        lat: 37.74413536569657,
        lng: -122.42281347513199
      },
      stats: {
        checkinsCount: 15127,
        usersCount: 8422,
        tipCount: 229
      },
      hasMenu: true,
      menu: {
        mobileUrl: "https://foursquare.com/v/49e22ce6f964a520f9611fe3/device_menu"
      }
    }
  ],
  venues: {
    "506ef69fe4b0eca4bc1d56f8": {
      name: "Ghirardelli Ice Cream & Chocolate Shop",
      bestPhoto: {
        suffix: "/3004096_2peBScwmAolATHRJlGTCAhEFDhzqbGT00ruO8PoFDxc.jpg"
      },
      rating: 8.1,
      price: {
        tier: 1,
        message: "Cheap"
      },
      url: "http://ghirardelli.com",
      hours: {
        timeframes: [
          { days: "Mon–Thu",
            open: [ { renderedTime: "8:00 AM–10:00 PM" } ]
          },
          { days: "Fri",
            open: [ { renderedTime: "8:00 AM–11:00 PM" } ]
          },
          { days: "Sat",
            open: [ { renderedTime: "10:00 AM–11:00 PM" } ]
          },
          { days: "Sun",
            open: [ { renderedTime: "10:00 AM–10:00 PM" } ]
          }
        ]
      }
    },
    "4baae1f9f964a520f18b3ae3": {
      name: "Chile Pies & Ice Cream",
      bestPhoto: {
        suffix: "/12938919_3txDmYfgVTsaBKAajkOPL3bJ2bGBh865cdKkP3HPVgQ.jpg"
      },
      rating: 9.1,
      price: {
        tier: 2,
        message: "Moderate"
      },
      url: "http://www.greenchilekitchen.com/chilepies",
      hours: {
        timeframes: [
          { days: "Mon–Sun",
            open: [ { renderedTime: "Noon–10:00 PM" } ]
          }
        ]
      }
    },
    "4eac41a5dab40d132703fc44": {
      name: "The Ice Cream Bar Soda Fountain",
      bestPhoto: {
        suffix: "/IE5StngDjJBPW6w9MuiTg7WfWIOVhYxbbfcyXur23_w.jpg"
      },
      rating: 9.3,
      price: {
        tier: 1,
        message: "Cheap"
      },
      url: "http://theicecreambarsf.com",
      hours: {
        timeframes: [
          { days: "Mon–Sun",
            open: [ { renderedTime: "Noon–10:00 PM" } ]
          }
        ]
      }
    },
    "42b21280f964a5206e251fe3": {
      name: "Swensen's Ice Cream",
      bestPhoto: {
        suffix: "/35139054_R5bV70OX7YLAzURky-usvOlnCb6Oxft-nQD675MYPlU.jpg"
      },
      rating: 9.1,
      price: {
        tier: 1,
        message: "Cheap"
      },
      url: "http://www.swensens.com",
      hours: {
        timeframes: [
          { days: "Tue–Thu, Sun",
            open: [ { renderedTime: "Noon–10:00 PM" } ]
          },
          { days: "Fri–Sat",
            open: [ { renderedTime: "Noon–11:00 PM" } ]
          }
        ]
      }
    },
    "4ae35463f964a520849321e3": {
      name: "Miyako Old Fashion Ice Cream Shop",
      bestPhoto: {
        suffix: "/186901_leZkhEb458uB-dCpwA6gWDqS7EAF8qqcinEig9eGwm8.jpg"
      },
      rating: 7.2,
      price: {
        tier: 1,
        message: "Cheap"
      },
      canonicalUrl: "https://foursquare.com/v/miyako-old-fashion-ice-cream-shop/4ae35463f964a520849321e3",
      hours: {
        timeframes: [
          { days: "Fri",
            open: [ { renderedTime: "2:00 PM–10:00 PM" } ]
          },
          { days: "Sat",
            open: [ { renderedTime: "1:00 PM–10:00 PM" } ]
          },
          { days: "Sun",
            open: [ { renderedTime: "Noon–10:00 PM" } ]
          },
          { days: "Mon–Tue",
            open: [ { renderedTime: "11:00 AM–9:00 PM" } ]
          },
          { days: "Wed",
            open: [ { renderedTime: "" } ]
          }
        ]
      }
    },
    "49e22ce6f964a520f9611fe3": {
      name: "Mitchell's Ice Cream",
      bestPhoto: {
        suffix: "/DOC32ZD1HKEZCCY3I2FVQOD2Y5RR1U5M5S2W3WMBI5RLP0LB.jpg"
      },
      rating: 9.3,
      price: {
        tier: 1,
        message: "Cheap"
      },
      url: "http://www.mitchellsicecream.com",
      hours: {
        timeframes: [
          { days: "Mon-Sun",
            open: [ { renderedTime: "11:00 AM–11:00 PM" } ]
          }
        ]
      }
    }
  }
};
