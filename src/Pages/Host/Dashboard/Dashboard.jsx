import s from './Dashboard.module.css';
import { HostVans } from '../HostVans/HostVans';
import { Link } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';

export const Dashboard = () => {
  return (
    <>
      <section className={`${s.info} container`}>
        <div className={s.header}>
          <div>
            <h2>Welcome!</h2>
            <p>
              Income last <span className={s.days}>30 days</span>
            </p>
            <h2 className={s.income}>$2669</h2>
          </div>
          <Link to='income'>Details</Link>
        </div>
      </section>
      <section>
        <div className={`${s.subHeader}  container`}>
          <div>
            <h3 className='scoreTitle'>Review score</h3>
            <div className={s.reviewStat}>
              <BsStarFill className={s.starIcon} />
              <span>5.0/5</span>
            </div>
          </div>
          <Link to='reviews'>Details</Link>
        </div>
      </section>
      <HostVans />
    </>
  );
};
