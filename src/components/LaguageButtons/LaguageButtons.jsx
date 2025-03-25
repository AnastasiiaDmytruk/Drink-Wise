import css from './LaguageButtons.module.css';

const LaguageButtons = () => {
  return (
    <div className={css.container}>
      <button type="button">EN</button>
      <button type="button">UA</button>
    </div>
  );
};
export default LaguageButtons;
