import HousingItem from "../housing-item/housing-item.tsx";
import { houseList } from '../../mocks/offers.ts';
import {ShortHousingItem} from "../../types/types.ts";
import {HousingViewType} from "../../const/const.ts";

type NearOfferListProps = {
  id: string
}
function NearOfferList(props: NearOfferListProps){
  const id = props.id;
  console.log(id);
  const listItems = houseList.slice(0, 3).map((item: ShortHousingItem) => <HousingItem key={item.id} houseItem = {item} viewType={HousingViewType.NearPlaces} />);
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {listItems}
      </div>
    </section>
  );
}

 export default NearOfferList;
