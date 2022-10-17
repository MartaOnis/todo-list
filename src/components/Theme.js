import '../styles/Theme.scss';
const Theme = (props) => {
  return (
    <div className="theme">
      <button className="theme__dark" id="dark" onClick={props.handleClickBtn}>
        Dark
      </button>
      <button
        className="theme__light"
        id="light"
        onClick={props.handleClickBtn}
      >
        Light
      </button>
    </div>
  );
};
export default Theme;
