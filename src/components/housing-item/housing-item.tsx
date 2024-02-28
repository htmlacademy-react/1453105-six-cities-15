import {ShortHousingItem} from '../../types/types.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const/const.ts';


type HousingItemProps = {
  readonly houseItem: ShortHousingItem;
  readonly viewType: string;
  onAnswer: (id: string) => void;
}
function HousingItem({houseItem, onAnswer, viewType}:HousingItemProps){
  const typeViewItem = viewType;
  const {id,title,costPerNight, type,previewImage, isPremium, isFavorite, rating } = houseItem;
  // const navigate = useNavigate();

  function showRating(num: number):string {
    return `${(Math.round(num) * 100 / 5).toString() }%`;
  }

  // function openOffer(){
  //   console.log(AppRoute.Offer,{ state: { id: id } });
  //   navigate(AppRoute.Offer);
  // };

  return (
    <article
      className={ typeViewItem === 'medium' ? 'cities__card place-card' : 'favorites__card place-card'}
      onMouseEnter={() => onAnswer(id)}
    >
      { isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div> }
      <div className={typeViewItem === 'medium' ? 'cities__image-wrapper place-card__image-wrapper' : 'favorites__image-wrapper place-card__image-wrapper'}>
        <Link to={AppRoute.Offer}> {typeViewItem === 'medium' ?
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/> :
          <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place image"/>}
        </Link>
      </div>
      <div className={ typeViewItem === 'medium' ? 'place-card__info' : 'favorites__card-info place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{costPerNight}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={ isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button' } type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ {width: showRating(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default HousingItem;
