export const NUMBER_HOUSING_ITEM: number = 5;
export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
export enum HousingViewType {
  Small = 'small',
  Medium = 'medium'
}
