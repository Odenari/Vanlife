import s from './Footer.module.css';

function getYear() {
  return new Date().getFullYear();
}

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.footerTxt}> ⓒ {getYear()} #VANLIFE</p>
    </footer>
  );
};
