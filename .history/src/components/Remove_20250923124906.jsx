export function RemoveButton(label) {
  return (
    <div className="btn-remove" onClick={remove}>
      <p>{label}</p>
      <span>Remove</span>
    </div>
  );
}
