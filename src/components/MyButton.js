const MyButton = ({ type, text, onClick }) => {
  const btntype = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${type}`].join(" ")}
      /*MyButton + type 을 class name으로 갖게됨*/
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
