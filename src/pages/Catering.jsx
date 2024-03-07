export default function Example() {
  return (
    <div className="pt-16 pb-16">
      <div className=" flex justify-center pb-10">
        <h2 className="text-4xl font-semibold leading-7 mx-auto text-black">Catering</h2>
      </div>
      <form className="mx-32">
        <div className="space-y-12 px-32">

          <div className="border-b border-gray-900/10 pb-12 mx-20" >

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
              <div className="sm:col-span-4">
                <label htmlFor="first-name" className="block text-xs font-medium leading-6 text-gray-600">
                  First name
                </label>
                <div className="mt-[0.125]">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block pl-0 w-full py-1.5 text-gray-600 border-t-0 border-l-0 border-r-0 border-b-2 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-clear sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="last-name" className="block text-xs font-medium leading-6 text-gray-600">
                  Last name
                </label>
                <div className="mt-[0.125]">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block pl-0 w-full py-1.5 text-gray-600 border-t-0 border-l-0 border-r-0 border-b-2 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-clear sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-xs font-medium leading-6 text-gray-600">
                  Email address
                </label>
                <div className="mt-[0.125]">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block pl-0 w-full py-1.5 text-gray-600 border-t-0 border-l-0 border-r-0 border-b-2 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-clear sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="country" className="block text-xs font-medium leading-6 text-gray-600">
                  Phone Number
                </label>
                <div className="mt-[0.125]">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    autoComplete="phone-number"
                    placeholder="123-456-7890"
                    className="block pl-0 w-full py-1.5 text-gray-600 border-t-0 border-l-0 border-r-0 border-b-2 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-clear sm:text-sm sm:leading-6"

                  />
                </div>
              </div>

              <div className="col-span-4">
                <label htmlFor="street-address" className="block text-xs font-medium leading-6 text-gray-600">
                  Event Address
                </label>
                <div className="mt-[0.125]">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block pl-0 w-full py-1.5 text-gray-600 border-t-0 border-l-0 border-r-0 border-b-2 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-clear sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-4 ">
                <label htmlFor="city" className="block text-xs font-medium leading-6 text-gray-600">
                  City
                </label>
                <div className="mt-[0.125]">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block pl-0 w-full py-1.5 text-gray-600 border-t-0 border-l-0 border-r-0 border-b-2 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-clear sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="region" className="block text-xs font-medium leading-6 text-gray-600">
                  State / Province
                </label>
                <div className="mt-[0.125]">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block pl-0 w-full py-1.5 text-gray-600 border-t-0 border-l-0 border-r-0 border-b-2 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-clear sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">

                <label htmlFor="location" className="block text-xs font-medium leading-6 text-gray-600">

                  Location

                </label>

                <div className="mt-[0.125]">

                  <select

                    id="location"

                    name="location"

                    autoComplete="location"

                    className="block pl-0 w-full py-1.5 text-gray-600 border-t-0 border-l-0 border-r-0 border-b-2 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-clear sm:text-sm sm:leading-6"

                  >

                    <option>Farmington Hills</option>

                    <option>Detroit</option>

                    <option>East Lansing</option>

                    <option>Grand Rapids</option>

                    <option>Ann Arbor</option>

                  </select>

                </div>

              </div>

              <div className="sm:col-span-4">
                <label htmlFor="date" className="block text-xs font-medium leading-6 text-gray-600">
                  Date of Order
                </label>
                <div className="mt-[0.125]">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    autoComplete="date"
                    className="block pl-0 w-full py-1.5 text-gray-600 border-t-0 border-l-0 border-r-0 border-b-2 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-clear sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">

                <label htmlFor="location" className="block text-xs font-medium leading-6 text-gray-600">

                  Number of Guests

                </label>

                <div className="mt-[0.125]">

                  <select

                    id="noG"

                    name="number of guests"

                    autoComplete="noG"

                    className="block pl-0 w-full py-1.5 text-gray-600 border-t-0 border-l-0 border-r-0 border-b-2 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-clear sm:text-sm sm:leading-6"

                  >

                    <option>1</option>

                    <option>2</option>

                    <option>3</option>

                    <option>4</option>

                    <option>5</option>

                    <option>6</option>

                    <option>7</option>

                    <option>8</option>

                    <option>9</option>

                    <option>10+</option>



                  </select>

                </div>

              </div>

              <div className="sm:col-span-full">
                <label htmlFor="first-name" className="block text-xs font-medium leading-6 text-gray-600">
                  Let us know about your order
                </label>
                <div className="mt-[0.125]">
                  <input
                    type="text"
                    name="info"
                    id="info"
                    autoComplete="given-name"
                    className="block pl-0 w-full h-36 py-1.5 text-gray-600 border-2 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-clear sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            </div>
          </div>


        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-secondary mr-52 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
