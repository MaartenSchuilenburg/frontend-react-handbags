const Button = ({ text, disabled = false }) => {
  const logInConsole = (message) => {
    console.log(message);
  };

  return <button onClick={() => logInConsole(text)} disabled={disabled}>{text}</button>;
};
export default Button;
