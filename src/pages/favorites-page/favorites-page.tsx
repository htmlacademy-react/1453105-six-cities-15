import {ShortHousingItem} from '../../types/types.ts';
import HousingItem from '../../components/housing-item/housing-item.tsx';

type FavoritePageProps = {
  readonly houseArray: ShortHousingItem[];
  readonly viewType: string;
  onAnswer: (id: string) => void;
}
function FavoritesPage({houseArray, viewType, onAnswer}: FavoritePageProps){
  const takeActiveOffer = (value:string) => {
    onAnswer(value);
  };
  const listAmsterdam = houseArray.map((item) => <HousingItem key={item.id} houseItem = {item} onAnswer={takeActiveOffer} viewType={viewType} />);

  return(
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                { listAmsterdam.length > 0 ? listAmsterdam : []}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesPage;
