import leaflet from 'leaflet';
export const NUMBER_HOUSING_ITEM: number = 5;
export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
export enum HousingViewType {
  Favorites = 'Favorites',
  Cities = 'Cities',
  NearPlaces = 'NearPlaces'
}
export const favoriteBlock = {
  bemBlock: 'favorites',
  widthImg: '150',
  heightImg: '110'
};
export const citiesBlock = {
  bemBlock: 'cities',
  widthImg: '260',
  heightImg: '200'
};
export const nearPlacesBlock = {
  bemBlock: 'near-places',
  widthImg: '260',
  heightImg: '200'
};

export const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.8534100,
      longitude: 2.3488000,
      zoom: 10
    },
    slug: 'paris'
  },
  {
    name: 'Cologne',
    location: {
      latitude: 45.5786200,
      longitude: 9.9418000,
      zoom: 10
    },
    slug: 'cologne'
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8504500,
      longitude: 4.3487800,
      zoom: 10
    },
    slug: 'brussels'
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3740300,
      longitude: 4.8896900,
      zoom: 10
    },
    slug: 'amsterdam'
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5753200,
      longitude: 10.0153400,
      zoom: 10
    },
    slug: 'hamburg'
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2217200,
      longitude: 6.7761600,
      zoom: 10
    },
    slug: 'dusseldorf'
  }
] as const;
