export function RemoveButton() {
  function remove(e) {
    if (e.target.tagName !== 'SPAN') {
      return;
    }
    e.currentTarget.remove();
  }

  return (
    <div className="btn-remove" onClick={remove}>
      <span>Remove</span>
    </div>
  );
}
