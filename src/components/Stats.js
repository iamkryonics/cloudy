export const Stats = () => {
  return (
    <div
      data-aos="fade-zoom-in"
      className="bg-gradient-to-br from-pink-600 to-pink-800 sm:mt-24 mt-8 max-w-7xl lg:mx-auto rounded-2xl mx-4 sm:mx-6"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-200 sm:text-4xl">
            Trusted by developers from over 80 planets
          </h2>
          <p className="mt-3 text-xl text-gray-300 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-200">
              Satisfied
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-gray-200">
              100%
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-200">
              Support
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-gray-200">
              24/7
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-200">
              Customers
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-gray-200">
              100k+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
