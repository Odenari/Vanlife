import s from './About.module.css';
import { CustomButton } from '../../Components/UI/Button/CustomButton';

export const About = () => {
  return (
    <div>
      <img
        className={s.aboutHero}
        src='/src/Assets/Images/about-hero.png'
        alt='Picture of a man sitting on a van at night.'
      />
      <div className={s.wrapper}>
        <h2 className={s.title}>
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <div className={s.descrWrapper}>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className={s.callToAction}>
          <h3>Your destination is waiting. Your van is ready.</h3>
          <CustomButton buttonType='secondaryBlack' to='/vans'>
            Explore our vans
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
