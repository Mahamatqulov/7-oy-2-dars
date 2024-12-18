function FormInput({ type, label, placeholder, handleChange }) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        onChange={handleChange}
        placeholder="Type here"
        className="input input-bordered w-full bg-inherit"
      />
    </label>
  );
}

export default FormInput;
