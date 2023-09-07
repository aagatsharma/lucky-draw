function BuyNow() {
  const buttons = [];

  for (let i = 1; i <= 100; i++) {
    //buttons
    buttons.push(
      <button key={i} className="btn btn-circle btn-outline">
        <p>{i}</p>
      </button>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 pt-16">
      <div className="text-center">
        <div>
          <h1 className="text-5xl font-bold">Choose numbers</h1>
          <div className="max-w-xl m-auto my-10">
            <div className="grid grid-cols-10 max-sm:grid-cols-5 gap-5 px-5">
              {buttons}
            </div>
          </div>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
