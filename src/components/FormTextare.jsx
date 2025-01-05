function FormTextare({ label, name }) {
  return (
    <div>
      <label className="form-control">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <textarea
          className="textarea textarea-bordered  border-blue-300 h-18"
          placeholder="Type here"
          name={name}
        ></textarea>
      </label>
    </div>
  );
}

export default FormTextare;
