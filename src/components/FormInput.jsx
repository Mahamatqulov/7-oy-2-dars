function FormInput({ type, label, placeholder, name, error, errorText }) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-[380px] p-2 border border-blue-300  rounded-2xl  bg-inherit ${error}`}
        name={name}
      />

      {errorText && (
        <div className="label">
          <span className="label-text-alt text-red-700 ">{errorText}</span>
        </div>
      )}
    </label>
  );
}

export default FormInput;
