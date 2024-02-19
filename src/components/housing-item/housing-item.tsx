import {ShortHousingItem} from '../../types/types.ts';

type HousingItemProps = {
  readonly houseItem: ShortHousingItem;
}
function HousingItem({houseItem}:HousingItemProps){
  const itemTitle = houseItem.title;
  const itemCostPerNight = houseItem.costPerNight;
  const itemType = houseItem.type;
  const itemImage = houseItem.previewImage;
  const itemIsPremium = houseItem.isPremium;
  const itemIsFavorite = houseItem.isFavorite;
  const itemRating = houseItem.rating;

  function showRating(num: number):string {
    return `${(Math.round(num) * 100 / 5).toString() }%`;
  }

  return (
    <article className="cities__card place-card">
      { itemIsPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div> }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={itemImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{itemCostPerNight}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {
            !itemIsFavorite &&
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          }
          {
            itemIsFavorite &&
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          }
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ {width: showRating(itemRating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{itemTitle}</a>
        </h2>
        <p className="place-card__type">{itemType}</p>
      </div>
    </article>
  );
}
export default HousingItem;
