import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>
        Created <time dateTime="2025">2025</time>
      </p>
    </footer>
  );
};

export default Footer;

