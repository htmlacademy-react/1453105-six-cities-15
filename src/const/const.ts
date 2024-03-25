import leaflet from 'leaflet';
export const NUMBER_HOUSING_ITEM: number = 5;
export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';

const ICON_SIZES = {
  iconSize: [27, 39] as [number, number],
  iconAnchor: [13.5, 39] as [ number, number],
} as const;

export const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  ...ICON_SIZES
});

export const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  ...ICON_SIZES
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
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10
    },
    slug: 'paris'
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10
    },
    slug: 'cologne'
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10
    },
    slug: 'brussels'
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10
    },
    slug: 'amsterdam'
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10
    },
    slug: 'hamburg'
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10
    },
    slug: 'dusseldorf'
  }
] as const;
