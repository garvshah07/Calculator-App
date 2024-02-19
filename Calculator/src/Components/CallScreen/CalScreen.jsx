import styles from "../CallScreen/CallScreen.module.css";
const CalScreen = ({ calVal }) => {
  return (
    <>
      <input
        className={`${styles.calScreen}`}
        type="text"
        value={calVal}
        readOnly
      />
    </>
  );
};

export default CalScreen;
