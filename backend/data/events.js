const events = [
  {
    _id: '1',
    name: 'HOLIDAY Sip and paint art class at Olympia Wine bar, Rumors!',
    image: '/images/paint.jpg',
    description:
      'Come and paint with us and uncork your inner artist at Rumors Wine Bar Olympia!',
    organizer: 'Artväna',
    date: "2023-12-21",
    time: "18:00",
    duration: "2.5hrs",
    location: {
      "venue": "Rumors Wine Bar",
      "address": "430 Washington Street Southeast",
      "city": "Olympia",
      "state": "WA",
      "zip": "98501"
      },      
    price: 40,
    quantity_available: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Kula Cloth - Pyka Plunge 2024',
    image: '/images/dive.jpg',
    description:
      'Celebrate the New Year with cold water plunge in Mukilteo!',
    organizer: 'Kula Cloth',
    date: "2024-01-01",
    time: "12:00",
    duration: "2hrs",
    location: {
      "venue": "Mukilteo Beach",
      "address": "4609 Front St",
      "city": "Mukilteo",
      "state": "WA",
      "zip": "98275"
      },      
    price: 0,
    quantity_available: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: '2024 Kick-Off Party',
    image: '/images/new_year.jpg',
    description:
      'Celebrate the New Year with us at the 2024 Kick-Off Party!',
    organizer: 'NCW Tech Alliance',
    date: "2024-01-18",
    time: "17:30",
    duration: "2hrs",
    location: {
      "venue": "Pybus Event Center",
      "address": "3 N Worthen St",
      "city": "Wenatchee",
      "state": "WA",
      "zip": "98801"
      },      
    price: 15,
    countInStock: 0,
    rating: 3,
    numReviews: 12,
  }
]

export default events