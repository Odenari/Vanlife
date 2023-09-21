import s from './Home.module.css';
import Button from '../../Components/UI/Button/CustomButton';

export const Home = () => {
  return (
    <section className={s.home}>
      <div>
        <h1 className={s.title}>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className={s.descr}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
      </div>
      <button className={s.homeBtn}>Find your van</button>
    </section>
  );
};

export default Home;
