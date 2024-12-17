function FormInput({ type, label, placeholder }) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder="Type here"
        className="input input-bordered w-full bg-inherit"
      />
    </label>
  );
}

export default FormInput;
