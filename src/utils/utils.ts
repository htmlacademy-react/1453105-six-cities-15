import {AuthorizationStatus} from '../const/const.ts';
import {offerList, fullOfferList} from '../mocks/offers.ts';
import {CitiesType} from "../types/types.ts";
export function getAuthorizateStatus() {
  return AuthorizationStatus.Auth;
}

export function getOfferById(id: string) {
  const tempArray = fullOfferList.filter((item) => item.id === id);
  return tempArray[0];
}

export function getOfferNearBy(city: CitiesType) {
  return offerList.filter((item => item.city.name === city)).map((item) => item.location);
}
export function showRating(num: number) {
  return `${(Math.round(num) * 100 / 5).toString()}`;
}

export function showDate(date : string): string {
  return new Intl.DateTimeFormat('en-EN', {
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));
}

export function specialDate(date: string): string {
  return new Intl.DateTimeFormat('en-EN', {
    hour: undefined,
  }).format(new Date(date));
}
