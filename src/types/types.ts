export type HousingType = 'Apartment'|'Room'|'House'|'Hotel';
export type OwnerInfo = {
  name: string;
  isPro: boolean;
  avatar: string;
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
export type ShortHousingItem = {
  id: string;
  title: string;
  costPerNight: number;
  type: HousingType;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
}
export type FullHousingItem = ShortHousingItem & {
  gallery: string[];
  description: string;
  numberBedrooms: number;
  numberGuests: number;
  householdItems: string[];
  owner: OwnerInfo;
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
