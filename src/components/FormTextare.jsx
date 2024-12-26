function FormTextare({ label }) {
  return (
    <div>
      <label className="form-control">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <textarea
          className="textarea textarea-bordered  border-blue-300 h-24"
          placeholder="Type here"
        ></textarea>
      </label>
    </div>
  );
}

export default FormTextare;
