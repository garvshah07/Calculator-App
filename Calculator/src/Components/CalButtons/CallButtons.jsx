import styles from "../CalButtons/CalButtons.module.css";

const CallButtons = () => {
  const buttons = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5 ",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={`${styles.CallButtons}`}>
      <>
        {buttons.map((button) => (
          <button className={`${styles.Button}`} key={button}>
            {button}
          </button>
        ))}
      </>
    </div>
  );
};

export default CallButtons;
