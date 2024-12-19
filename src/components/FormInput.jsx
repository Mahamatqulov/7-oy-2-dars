function FormInput({ type, label, placeholder, name }) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-[380px] p-2 border border-blue-300 rounded-2xl  bg-inherit "
        name={name}
      />
    </label>
  );
}

export default FormInput;
