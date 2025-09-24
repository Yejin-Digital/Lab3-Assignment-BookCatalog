export function RemoveButton(label) {
  function remove(e) {
    if (e.target === e.currentTarget) {
      //This is only true on the span
      return;
    }

    if (e.target.tagName !== 'SPAN') {
      return;
    }
    e.currentTarget.remove();
  }

  return (
    <div className="btn-remove" onClick={remove}>
      <p>{label}</p>
      <span>Remove</span>
    </div>
  );
}
