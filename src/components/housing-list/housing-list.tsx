import SortForm from '../sort-form/sort-form.tsx';
import HousingItem from '../housing-item/housing-item.tsx';
import {ShortHousingItem} from '../../types/types.ts';
import {SortOption} from '../../const/const.ts';
import {useState} from 'react';


type HousingListProps = {
  readonly currentOffers: ShortHousingItem[];
  readonly viewType: string;
  readonly city: string;
  onAnswer?: (id: string) => void;
}
function HousingList({currentOffers, onAnswer, viewType, city}:HousingListProps){
  const [activeSort, setActiveSort] = useState(SortOption.Popular);
  let sortedOffers = currentOffers;
  if (activeSort === SortOption.PriceLowToHigh) {
    sortedOffers = currentOffers.toSorted((a,b) => a.price - b.price);
  }
  if (activeSort === SortOption.PriceHighToLow) {
    sortedOffers = currentOffers.toSorted((a,b) => b.price - a.price);
  }

  if (activeSort === SortOption.TopRatedFirst) {
    sortedOffers = currentOffers.toSorted((a,b) => b.rating - a.rating);
  }


  return(
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortedOffers.length} places to stay in {city}</b>
      <SortForm current={SortOption.Popular} setter={setActiveSort} />
      <div className="cities__places-list places__list tabs__content">
        { sortedOffers.map((offer) => (
          <HousingItem key={offer.id} houseItem ={offer} onAnswer={onAnswer} viewType={viewType} />
        ))}
      </div>
    </section>
  );
}

export default HousingList;
