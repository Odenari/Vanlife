import s from './Income.module.css';

const transactions = [
  {
    fee: 839,
    date: '30/06/2023',
  },
  {
    fee: 650,
    date: '01/06/2023',
  },
  {
    fee: 1180,
    date: '12/06/2023',
  },
];

export const Income = () => {
  return (
    <section className={`${s.info} container`}>
      <div className={s.header}>
        <h2>Income</h2>
        <p>
          Last <span className={s.days}>30 days</span>
        </p>
        <h2 className={s.income}>
          ${transactions.reduce((acc, curr) => acc + curr.fee, 0)}
        </h2>
      </div>
      {/* TODO CHART here */}
      <section className={s.feeContainer}>
        <h3>Your transactions({transactions.length})</h3>
        {transactions.map((t, i) => (
          <div className={s.feeItem} key={i}>
            <p>${t.fee}</p>
            <p>{t.date}</p>
          </div>
        ))}
      </section>
    </section>
  );
};
