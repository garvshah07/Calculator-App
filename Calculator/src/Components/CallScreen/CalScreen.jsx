import styles from "../CallScreen/CallScreen.module.css";
const CalScreen = () => {
  return (
    <>
      <input className={`${styles.calScreen}`} type="text" readOnly />
    </>
  );
};

export default CalScreen;
