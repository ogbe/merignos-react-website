export default function Button({ children, btnClassName, type, isDisabled }) {
  const btnType = type || "button";
  const btnClass = btnClassName || "primary";
  return (
    <button className={`${btnClass}`} type={btnType} disabled={isDisabled || false}>
      {children}
    </button>
  );
}
