import {FullHousingItem, ShortHousingItem} from '../types/types.ts';

export const offerList: ShortHousingItem[] = [
  {
    id: '1',
    title: 'Ideal for exploring the city or taking in the scenic views',
    costPerNight: 210,
    type: 'Apartment' ,
    previewImage: 'img/apartment-01.jpg',
    isPremium: true,
    isFavorite: false,
    rating: 4.8,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8534100,
        longitude: 2.3488000,
        zoom: 10
      }},
    location: {
      latitude: 48.8539250,
      longitude: 2.34891006,
      zoom: 10
    }
  },
  {
    id: '2',
    title: 'Guests will appreciate the well-equipped bathroom with a shower and toiletries',
    costPerNight: 240,
    type: 'Apartment' ,
    previewImage: 'img/apartment-02.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 2.8,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8534100,
        longitude: 2.3488000,
        zoom: 10
      }},
    location: {
      latitude: 48.8611107,
      longitude: 2.3589290,
      zoom: 10
    }
  },
  {
    id: '3',
    title: 'Includes all the necessary amenities for a comfortable stay',
    costPerNight: 280,
    type: 'Room' ,
    previewImage: 'img/room.jpg',
    isPremium: false,
    isFavorite: true,
    rating: 3.8,
    city: {
      name: 'Cologne',
      location: {
        latitude: 45.5786200,
        longitude: 9.9418000,
        zoom: 10
      }},
    location: {
      latitude: 45.5786280,
      longitude: 9.9418090,
      zoom: 10
    }
  },
  {
    id: '4',
    title: 'The view from the room offers a stunning cityscape',
    costPerNight: 200,
    type: 'Apartment' ,
    previewImage: 'img/apartment-02.jpg',
    isPremium: true,
    isFavorite: true,
    rating: 4.9,
    city: {
      name: 'Cologne',
      location: {
        latitude: 45.5786200,
        longitude: 9.9418000,
        zoom: 10
      }},
    location: {
      latitude: 45.5796201,
      longitude: 9.9428009,
      zoom: 10
    }
  },
  {
    id: '5',
    title: 'Conveniently located in the heart of the city',
    costPerNight: 290,
    type: 'Apartment' ,
    previewImage: 'img/apartment-03.jpg',
    isPremium: true,
    isFavorite: true,
    rating: 5.0,
    city: {
      name: 'Cologne',
      location: {
        latitude: 45.5786204,
        longitude: 9.9418400,
        zoom: 10
      }},
    location: {
      latitude: 45.5756290,
      longitude: 9.9448070,
      zoom: 10
    }
  },
  {
    id: '6',
    title: 'Comfortable place to rest, with a clean and cozy bed',
    costPerNight: 236,
    type: 'Apartment' ,
    previewImage: 'img/apartment-01.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 3.2,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8504500,
        longitude: 4.3487800,
        zoom: 10
      }},
    location: {
      latitude: 50.8504501,
      longitude: 4.3487870,
      zoom: 10
    }
  },
  {
    id: '7',
    title: 'A well-appointed living area with a comfortable sofa',
    costPerNight: 319,
    type: 'Room' ,
    previewImage: 'img/room.jpg',
    isPremium: true,
    isFavorite: false,
    rating: 4.2,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 10
      }},
    location: {
      latitude: 52.3740302,
      longitude: 4.8896906,
      zoom: 10
    }
  },
  {
    id: '8',
    title: 'Prime location in the heart of the city',
    costPerNight: 180,
    type: 'Apartment' ,
    previewImage: 'img/apartment-01.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 2.2,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 10
      }},
    location: {
      latitude: 52.3746350,
      longitude: 4.8898901,
      zoom: 10
    }
  },
  {
    id: '9',
    title: 'Modern amenities such as Wi-Fi',
    costPerNight: 247,
    type: 'Apartment' ,
    previewImage: 'img/apartment-02.jpg',
    isPremium: false,
    isFavorite: true,
    rating: 4.7,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5753200,
        longitude: 10.0153400,
        zoom: 10
      }},
    location: {
      latitude: 53.5753203,
      longitude: 10.0153405,
      zoom: 10
    }
  },
  {
    id: '10',
    title: 'Easy access to local attractions and public transportation',
    costPerNight: 305,
    type: 'Apartment' ,
    previewImage: 'img/apartment-03.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 4.1,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5753200,
        longitude: 10.0153400,
        zoom: 10
      }},
    location: {
      latitude: 53.5758204,
      longitude: 10.0151440,
      zoom: 10
    }
  },
  {
    id: '11',
    title: 'An ideal choice for both business and leisure travelers',
    costPerNight: 293,
    type: 'Apartment' ,
    previewImage: 'img/apartment-01.jpg',
    isPremium: true,
    isFavorite: true,
    rating: 4.6,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2217200,
        longitude: 6.7761600,
        zoom: 10
      }},
    location: {
      latitude: 51.2217200,
      longitude: 6.7761670,
      zoom: 10
    }
  }
]
export const fullOfferList: FullHousingItem[] = [
  {
    id: '1',
    title: 'Ideal for exploring the city or taking in the scenic views',
    costPerNight: 210,
    type: 'Apartment',
    isPremium: true,
    isFavorite: false,
    rating: 4.8,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8534100,
        longitude: 2.3488000,
        zoom: 12
      }},
    location: {
      latitude: 48.8539250,
      longitude: 2.34891006,
      zoom: 12
    },
    description: 'The hotel room includes a comfortable bed, a fully equipped bathroom, and a living area with a sofa and a flat-screen TV. A mini-fridge and coffee maker are also provided for guest use. The room has a great view of the city skyline and is located in a convenient area, close to public transportation and popular attractions.',
    bedrooms: 2,
    goods: [
      'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    host: {
      name: 'Angelina Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg', 'img/apartment-01.jpg','img/apartment-01.jpg','img/apartment-01.jpg','img/apartment-01.jpg','img/apartment-01.jpg',
    ],
    maxAdults: 2
  },
  {
    id: '2',
    title: 'Guests will appreciate the well-equipped bathroom with a shower and toiletries',
    costPerNight: 240,
    type: 'Apartment' ,
    previewImage: 'img/apartment-02.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 2.8,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8534100,
        longitude: 2.3488000,
        zoom: 12
      }},
    location: {
      latitude: 48.8611107,
      longitude: 2.3589290,
      zoom: 12
    },
    description: 'The hotel room has a comfortable bed, bathroom, and living area. It also has modern amenities such as WiFi, flat-screen TV, mini-fridge, and desk. The room offers a scenic view and is conveniently located near public transportation and attractions.',
    bedrooms: 3,
    goods: [
      'Wi-Fi', 'Washing machine', 'Towels', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    host: {
      name: 'Angelina Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-02.jpg', 'img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '3',
    title: 'Includes all the necessary amenities for a comfortable stay',
    costPerNight: 280,
    type: 'Room' ,
    previewImage: 'img/room.jpg',
    isPremium: false,
    isFavorite: true,
    rating: 3.8,
    city: {
      name: 'Cologne',
      location: {
        latitude: 45.5786200,
        longitude: 9.9418000,
        zoom: 12
      }},
    location: {
      latitude: 45.5786280,
      longitude: 9.9418090,
      zoom: 12
    },
    description: 'The hotel room comes with a comfortable bed, en-suite bathroom, and fully-equipped kitchenette. It also offers comfortable living space with sofa and flat-screen TV. Other amenities include free Wi-Fi and a mini-bar. The room is located near the city center and provides easy access to public transport and tourist attractions.',
    bedrooms: 1,
    goods: [
      'Wi-Fi', 'Washing machine', 'Towels'
    ],
    host: {
      name: 'Angelina Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-03.jpg', 'img/apartment-03.jpg','img/apartment-03.jpg','img/apartment-03.jpg','img/apartment-03.jpg','img/apartment-03.jpg','img/apartment-03.jpg',
    ],
    maxAdults: 2
  },
  {
    id: '4',
    title: 'The view from the room offers a stunning cityscape',
    costPerNight: 200,
    type: 'Apartment' ,
    previewImage: 'img/apartment-02.jpg',
    isPremium: true,
    isFavorite: true,
    rating: 4.9,
    city: {
      name: 'Cologne',
      location: {
        latitude: 45.5786200,
        longitude: 9.9418000,
        zoom: 10
      }},
    location: {
      latitude: 45.5796201,
      longitude: 9.9428009,
      zoom: 10
    },
    description: 'The hotel room comes with a comfortable bed, en-suite bathroom, and fully-equipped kitchenette. It also offers comfortable living space with sofa and flat-screen TV. Other amenities include free Wi-Fi and a mini-bar. The room is located near the city center and provides easy access to public transport and tourist attractions.',
    bedrooms: 1,
    goods: [
      'Wi-Fi', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Washing machine', 'Towels'
    ],
    host: {
      name: 'Max Maxwell',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/apartment-03.jpg', 'img/apartment-03.jpg','img/apartment-03.jpg','img/apartment-03.jpg','img/apartment-03.jpg','img/apartment-03.jpg','img/apartment-03.jpg',
    ],
    maxAdults: 2
  },
  {
    id: '5',
    title: 'Conveniently located in the heart of the city',
    costPerNight: 290,
    type: 'Apartment' ,
    previewImage: 'img/apartment-03.jpg',
    isPremium: true,
    isFavorite: true,
    rating: 5.0,
    city: {
      name: 'Cologne',
      location: {
        latitude: 45.5786204,
        longitude: 9.9418400,
        zoom: 12
      }},
    location: {
      latitude: 45.5756290,
      longitude: 9.9448070,
      zoom: 12
    },
    description: 'The hotel room contains a comfortable bed, a well-equipped bathroom, and a comfortable living area. There is also a flat-screen TV and free Wi-Fi in the room. The room’s location makes it convenient for guests to explore the area and access public transportation.',
    bedrooms: 2,
    goods: [
      'Wi-Fi', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Washing machine', 'Towels'
    ],
    host: {
      name: 'Max Maxwell',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/room.jpg', 'img/room.jpg','img/room.jpg','img/room.jpg','img/room.jpg','img/room.jpg','img/room.jpg',
    ],
    maxAdults: 2
  },
  {
    id: '6',
    title: 'Comfortable place to rest, with a clean and cozy bed',
    costPerNight: 236,
    type: 'Apartment' ,
    previewImage: 'img/apartment-01.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 3.2,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8504500,
        longitude: 4.3487800,
        zoom: 12
      }},
    location: {
      latitude: 50.8504501,
      longitude: 4.3487870,
      zoom: 12
    },
    description: 'The hotel room contains a comfortable bed, a well-equipped bathroom, and a comfortable living area. There is also a flat-screen TV and free Wi-Fi in the room. The room’s location makes it convenient for guests to explore the area and access public transportation.',
    bedrooms: 4,
    goods: [
      'Wi-Fi', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher'
    ],
    host: {
      name: 'Max Maxwell',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/room.jpg', 'img/room.jpg','img/room.jpg','img/room.jpg','img/room.jpg','img/room.jpg','img/room.jpg',
    ],
    maxAdults: 8
  },
  {
    id: '7',
    title: 'A well-appointed living area with a comfortable sofa',
    costPerNight: 319,
    type: 'Room' ,
    previewImage: 'img/room.jpg',
    isPremium: true,
    isFavorite: false,
    rating: 4.2,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 12
      }},
    location: {
      latitude: 52.3740302,
      longitude: 4.8896906,
      zoom: 12
    },
    description: 'The hotel room contains a comfortable bed, a well-equipped bathroom, and a comfortable living area. There is also a flat-screen TV and free Wi-Fi in the room. The room’s location makes it convenient for guests to explore the area and access public transportation.',
    bedrooms: 4,
    goods: [
      'Wi-Fi', 'Heating'
    ],
    host: {
      name: 'Max Maxwell',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg',
    ],
    maxAdults: 8
  },
  {
    id: '8',
    title: 'Prime location in the heart of the city',
    costPerNight: 180,
    type: 'Apartment' ,
    previewImage: 'img/apartment-01.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 2.2,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 12
      }},
    location: {
      latitude: 52.3746350,
      longitude: 4.8898901,
      zoom: 12
    },
    description: 'The hotel room includes a comfortable bed, a fully equipped bathroom, and a living area with a sofa and a flat-screen TV. A mini-fridge and coffee maker are also provided for guest use. The room has a great view of the city skyline and is located in a convenient area, close to public transportation and popular attractions.',
    bedrooms: 2,
    goods: [
      'Wi-Fi', 'Heating'
    ],
    host: {
      name: 'Max Maxwell',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg',
    ],
    maxAdults: 6
  },
  {
    id: '9',
    title: 'Modern amenities such as Wi-Fi',
    costPerNight: 247,
    type: 'Apartment' ,
    previewImage: 'img/apartment-02.jpg',
    isPremium: false,
    isFavorite: true,
    rating: 4.7,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5753200,
        longitude: 10.0153400,
        zoom: 12
      }},
    location: {
      latitude: 53.5753203,
      longitude: 10.0153405,
      zoom: 12
    },
    description: 'The hotel room includes a comfortable bed, a fully equipped bathroom, and a living area with a sofa and a flat-screen TV. A mini-fridge and coffee maker are also provided for guest use. The room has a great view of the city skyline and is located in a convenient area, close to public transportation and popular attractions.',
    bedrooms: 1,
    goods: [
      'Wi-Fi', 'Heating', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV'
    ],
    host: {
      name: 'Angelina Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg',
    ],
    maxAdults: 1
  },
  {
    id: '10',
    title: 'Easy access to local attractions and public transportation',
    costPerNight: 305,
    type: 'Apartment' ,
    previewImage: 'img/apartment-03.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 4.1,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5753200,
        longitude: 10.0153400,
        zoom: 12
      }},
    location: {
      latitude: 53.5758204,
      longitude: 10.0151440,
      zoom: 12
    },
    description: 'The hotel room includes a comfortable bed, a fully equipped bathroom, and a living area with a sofa and a flat-screen TV. A mini-fridge and coffee maker are also provided for guest use. The room has a great view of the city skyline and is located in a convenient area, close to public transportation and popular attractions.',
    bedrooms: 3,
    goods: [
      'Wi-Fi', 'Heating', 'Washing machine', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV'
    ],
    host: {
      name: 'Angelina Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg','img/apartment-01.jpg','img/apartment-01.jpg','img/apartment-01.jpg','img/apartment-01.jpg','img/apartment-01.jpg',
    ],
    maxAdults: 2
  },
  {
    id: '11',
    title: 'An ideal choice for both business and leisure travelers',
    costPerNight: 293,
    type: 'Apartment' ,
    previewImage: 'img/apartment-01.jpg',
    isPremium: true,
    isFavorite: true,
    rating: 4.6,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2217200,
        longitude: 6.7761600,
        zoom: 12
      }},
    location: {
      latitude: 51.2217200,
      longitude: 6.7761670,
      zoom: 12
    },
    description: 'The hotel room includes a comfortable bed, a fully equipped bathroom, and a living area with a sofa and a flat-screen TV. A mini-fridge and coffee maker are also provided for guest use. The room has a great view of the city skyline and is located in a convenient area, close to public transportation and popular attractions.',
    bedrooms: 3,
    goods: [
      'Wi-Fi', 'Heating', 'Washing machine', 'Coffee machine', 'Baby seat', 'Kitchen',
    ],
    host: {
      name: 'Angelina Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-03.jpg', 'img/apartment-03.jpg','img/apartment-03.jpg','img/apartment-03.jpg','img/apartment-03.jpg','img/apartment-03.jpg','img/apartment-03.jpg',
    ],
    maxAdults: 4
  },
]
