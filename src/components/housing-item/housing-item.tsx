import {ShortHousingItem} from '../../types/types.ts';
import {Link} from 'react-router-dom';
import {AppRoute , favoriteBlock, citiesBlock, nearPlacesBlock} from '../../const/const.ts';
import * as classNames from 'classnames';
import {showRating} from '../../utils/utils.ts';

type HousingItemProps = {
  readonly houseItem: ShortHousingItem;
  readonly viewType: string;
  onAnswer?: (id: string) => void;
}
function HousingItem({houseItem, onAnswer, viewType}:HousingItemProps){
  const {id,title,costPerNight, type,previewImage, isPremium, isFavorite, rating } = houseItem;
  const typeViewItem = viewType;
  const makeRelativeUrl = (idItem: string) => AppRoute.Offer.replace(':id', idItem);
  let blockStyle = {bemBlock: '', widthImg: '', heightImg: ''};
  switch (viewType) {
    case 'Favorites':{
      blockStyle = favoriteBlock;
      break;
    }
    case 'Cities': {
      blockStyle = citiesBlock;
      break;
    }
    case 'NearPlaces': {
      blockStyle = nearPlacesBlock;
      break;
    }
  }
  const handleMouseEnter = () => onAnswer ? onAnswer(id) : {};

  return (
    <article
      className={`${blockStyle.bemBlock}__card place-card`}
      onMouseEnter={handleMouseEnter}
    >
      { isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div> }
      <div className={`${blockStyle.bemBlock}__image-wrapper place-card__image-wrapper`}>
        <Link to={makeRelativeUrl(id)}>
          <img className="place-card__image" src={previewImage} width={`${blockStyle.widthImg}`} height={`${blockStyle.heightImg}`} alt="Place image"/>
        </Link>
      </div>
      <div className={ typeViewItem === 'Favorites' ? `${blockStyle.bemBlock}__card-info place-card__info` : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{costPerNight}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={ classNames('place-card__bookmark-button button', {'place-card__bookmark-button--active': isFavorite })} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${showRating(rating) }%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={makeRelativeUrl(id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default HousingItem;
