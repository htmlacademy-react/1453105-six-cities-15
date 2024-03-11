import {ReviewList as listReview} from '../../mocks/reviews.ts';
import ReviewItem from '../review-item/review-item.tsx';
import {FullReviewType} from '../../types/types.ts';

function ReviewList(){
  const reviews = listReview.map((item:FullReviewType) => <ReviewItem key={item.id} review={item}/>);

  return(
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews}
      </ul>
    </>
  );
}
export default ReviewList;
