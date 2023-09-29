import s, {
  hostReviews,
  topText,
  days,
  info,
  reviewStar,
} from './Reviews.module.css';
import { BsStarFill } from 'react-icons/bs';

export function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: 'Elliot',
      date: 'January 3, 2023',
      text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!',
      id: '1',
    },
    {
      rating: 5,
      name: 'Sandy',
      date: 'December 12, 2022',
      text: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
      id: '2',
    },
  ];

  return (
    <section className={hostReviews}>
      <div className={topText}>
        <h2>Your reviews</h2>
        <p>
          Last <span className={days}>15 days</span>
        </p>
      </div>
      <div></div>
      <h3>Reviews ({reviewsData.length})</h3>
      {reviewsData.map(review => (
        <div key={review.id}>
          <div className={s.review}>
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill className={reviewStar} key={i} />
            ))}
            <div className={info}>
              <p className='name'>{review.name}</p>
              <p className='date'>{review.date}</p>
            </div>
            <p>{review.text}</p>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}
