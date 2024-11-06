interface InputProps {
  label?: string;
  textarea?: boolean;
}

const Input = ({ label, textarea }: InputProps) => {
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea /> : <input />}
    </p>
  );
};

export default Input;
