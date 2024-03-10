import {FullHousingItem, ShortHousingItem} from '../types/types.ts';

export const houseList:ShortHousingItem[] = [{
  id: '1',
  title: 'Beautiful & luxurious apartment at great location',
  costPerNight: 120,
  type: 'Apartment' ,
  previewImage: 'img/apartment-01.jpg',
  isPremium: true,
  isFavorite: false,
  rating: 4.1,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 10
    }},
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8
  },
},
{
  id: '2',
  title: 'Wood and stone place',
  costPerNight: 80,
  type: 'Room' ,
  previewImage: 'img/room.jpg',
  isPremium: false,
  isFavorite: true,
  rating: 4.2,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }},
  location: {
    latitude: 52.3609553943508,
    longitude: 4.85309666406198,
    zoom: 8
  },
},
{
  id: '3',
  title: 'Canal View Prinsengracht',
  costPerNight: 132,
  type: 'Apartment' ,
  previewImage: 'img/apartment-02.jpg',
  isPremium: false,
  isFavorite: false,
  rating: 4.0,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }},
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    zoom: 8
  },
},
{
  id: '4',
  title: 'Nice, cozy, warm big bed apartment',
  costPerNight: 180,
  type: 'Apartment' ,
  previewImage: 'img/apartment-03.jpg',
  isPremium: true,
  isFavorite: false,
  rating: 4.4,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }},
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 8
  },
},
{
  id: '5',
  title: 'Wood and stone place',
  costPerNight: 133,
  type: 'Room' ,
  previewImage: 'img/apartment-03.jpg',
  isPremium: false,
  isFavorite: true,
  rating: 4.2,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }},
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
}];

export const houseList2:FullHousingItem[] = [
  {
    id: '2',
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    costPerNight: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    host: {
      name: 'Angelina Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg' , 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    costPerNight: 500,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Max Maxwell',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/apartment-02.jpg', 'img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg','img/apartment-02.jpg'
    ],
    maxAdults: 3
  }
 ];
