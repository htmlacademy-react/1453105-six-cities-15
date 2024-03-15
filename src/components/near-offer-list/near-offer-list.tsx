import HousingItem from '../housing-item/housing-item.tsx';
import { offerList } from '../../mocks/offers.ts';
import {ShortHousingItem} from '../../types/types.ts';
import {HousingViewType} from '../../const/const.ts';

type NearOfferListProps = {
  selectedItem :ShortHousingItem;
}
function NearOfferList({ selectedItem}: NearOfferListProps){
  const id = selectedItem.id;
  const listItems = offerList.slice(0, 3).map((item: ShortHousingItem) => <HousingItem key={item.id} houseItem = {item} viewType={HousingViewType.NearPlaces} />);
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood {id}</h2>
      <div className="near-places__list places__list">
        {listItems}
      </div>
    </section>
  );
}

export default NearOfferList;
