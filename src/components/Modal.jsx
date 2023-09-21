export default function Modal() {
  return (
    <div className="modal-box">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">You need to be logged in to continue</p>
      <div className="modal-action">
        <a href="/login" className="btn">
          Log In
        </a>
      </div>
    </div>
  );
}
