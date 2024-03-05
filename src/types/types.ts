export type HousingType = 'Apartment'|'Room'|'House'|'Hotel';
export type OwnerInfo = {
  name: string;
  isPro: boolean;
  avatarUrl: string;
}
export type UserInfo = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
export type FullUserInfo = UserInfo & {
  email: string;
  token: string;
}
export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}
export type CityType = {
  name: string;
  location: LocationType
}
export type ShortHousingItem = {
  id: string;
  title: string;
  costPerNight: number;
  type: HousingType;
  previewImage?: string;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  city: CityType;
  location: LocationType;
}
export type FullHousingItem = ShortHousingItem & {
  images: string[];
  description: string;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: OwnerInfo;
}
export type ReviewType = {
  id: string;
  comment: string;
}

export type FullReviewType = ReviewType & {
  date: string;
  user: UserInfo;
  rating: number;
}
