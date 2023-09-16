function Modal() {
  return (
    <div className="modal" id="my_modal_8">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">You need to be logged in to continue</p>
        <div className="modal-action">
          <a href="/login" className="btn">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
