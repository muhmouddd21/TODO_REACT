export default function InputComponent({ labelName, value, setValue, errors }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        {labelName}
        <input
          type="text"
          value={value}
          onChange={setValue}
          style={{ display: "block", width: "100%", padding: "0.5rem" }}
        />
      </label>
      {errors && <p style={{ color: "red", marginTop: "0.25rem" }}>{errors}</p>}
    </div>
  );
}