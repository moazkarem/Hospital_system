// eslint-disable-next-line react/prop-types
const ErrMessage = ({ msg }) => {
  return msg ? (
    <p
      className={`text-red-500 capitalize ml-3`}
      // @ts-ignore
    >
      {" "}
      {msg}{" "}
    </p>
  ) : null;
};

export default ErrMessage;
