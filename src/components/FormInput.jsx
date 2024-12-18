function FormInput({ type, label, placeholder, name }) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full bg-inherit"
        name={name}
      />
    </label>
  );
}

export default FormInput;
