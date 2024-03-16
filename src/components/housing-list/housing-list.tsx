import SortForm from '../sort-form/sort-form.tsx';
import HousingItem from '../housing-item/housing-item.tsx';
import {ShortHousingItem} from '../../types/types.ts';


type HousingListProps = {
  readonly houseArray: ShortHousingItem[];
  readonly viewType: string;
  readonly city: string;
  onAnswer?: (id: string) => void;
}
function HousingList({houseArray, onAnswer, viewType, city}:HousingListProps){
  const listItems = houseArray.map((item) => <HousingItem key={item.id} houseItem = {item} onAnswer={ onAnswer} viewType={viewType} />);
  return(
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{listItems.length} places to stay in {city}</b>
      <SortForm/>
      <div className="cities__places-list places__list tabs__content">
        { listItems }
      </div>
    </section>
  );
}

export default HousingList;
