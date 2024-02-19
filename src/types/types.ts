export type HousingType = 'Apartment'|'Room'|'House'|'Hotel';
export type OwnerInfo = {
  name: string;
  isPro: boolean;
  avatar: string;
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
