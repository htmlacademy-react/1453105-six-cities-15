import {ShortHousingItem} from "../../types/types.ts";

type HousingItemProps = {
  readonly key: string,
  readonly houseItem: ShortHousingItem
}
function HousingItem({houseItem}:HousingItemProps){
  const item_title = houseItem.title;
  const item_costPerNight = houseItem.costPerNight;
  const item_type = houseItem.type;
  const item_image = houseItem.previewImage;
  const item_isPremium = houseItem.isPremium;
  const item_isFavorite = houseItem.isFavorite;
  const item_rating = houseItem.rating;

  function showRating(num: number):string {
    return  (Math.round(num)* 100 /5).toString()+ '%';
  }

  return (
    <article className="cities__card place-card">
      { item_isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div> }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={item_image} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{item_costPerNight}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {
            !item_isFavorite && <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          }
          {
            item_isFavorite && <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
              </button>
          }
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ {width: showRating(item_rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{item_title}</a>
        </h2>
        <p className="place-card__type">{item_type}</p>
      </div>
    </article>
  )
}
export default HousingItem;
