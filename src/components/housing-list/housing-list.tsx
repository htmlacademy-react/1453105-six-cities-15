import SortForm from '../sort-form/sort-form.tsx';
import HousingItem from '../housing-item/housing-item.tsx';
import {ShortHousingItem} from '../../types/types.ts';


type HousingListProps = {
  readonly houseArray: ShortHousingItem[];
  readonly viewType: string;
  numberItems: number;
  onAnswer?: (id: string) => void;
}
function HousingList({houseArray, numberItems, onAnswer, viewType}:HousingListProps){

  const listItems = houseArray.slice(0, numberItems).map((item) => <HousingItem key={item.id} houseItem = {item} onAnswer={ onAnswer} viewType={viewType} />);
  return(
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <SortForm/>
      <div className="cities__places-list places__list tabs__content">
        { listItems }
      </div>
    </section>
  );
}

export default HousingList;
