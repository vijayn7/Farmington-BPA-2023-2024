export const Catering = () => {
    return (
        <div>
            <div className="border-t-2 border-b-2 border-black md:pl-28 pt-[10rem] h-[40rem]" >
                <h1 className="font-bold text-6xl md:text-7xl">Catering</h1>

                <div className="bg-fillColor md:w-[70%] text-xl md:text-2xl lg:text-4xl p-6 rounded-[2rem] my-8 md:my-10 outline outline-primary outline-offset-8">
                    Game Day Grill offers a variety of world class catering options for parties big or small. With seamless service and a passion for perfection, Game Day Grill delivers unforgettable experiences through food.            </div>

            </div>
            <div class="md:pl-[7rem] pt-[6rem] ">
            <h1 className="font-bold text-6xl md:text-5xl">Fill out the Form Below for a Free Estimate!</h1>

                <form class="bg-fillColor md:w-[87%]  p-6 rounded-[2rem] my-8 md:my-10 outline outline-primary outline-offset-8 grid grid-cols-2 place-items-center">
                   
                        <div class="pb-[1.5rem]">
                            <label for="first-name" class="block">First Name</label>
                            <input id="first-name" type="text" class="block rounded-md ring-1 ring-black w-[20rem] h-[2.5rem]">
                            </input>
                        </div>

                        <div class="pb-[1.5rem]">
                            <label for="last-name" class="block">Last Name</label>
                            <input id="last-name" type="text" class="block rounded-md ring-1 ring-black w-[20rem] h-[2.5rem]">
                            </input>
                        </div >

                        <div class="pb-[1.5rem]">
                            <label for="phone-number" class="block">Phone Number</label>
                            <input id="phone-number" type="tel" class="block rounded-md ring-1 ring-black w-[20rem] h-[2.5rem]">

                            </input>
                        </div>

                        <div class="pb-[1.5rem]">
                            <label for="date" class="block">Date</label>
                            <input id="date" type="date" class="block rounded-md ring-1 ring-black w-[20rem] h-[2.5rem]">

                            </input>
                        </div>
                        <div class="pb-[1.5rem]">
                            <label for="email" class="block">Email</label>
                            <input id="email" name="email" type="email" autocomplete="email" class="block rounded-md ring-1 ring-black w-[20rem] h-[2.5rem]">

                            </input>
                        </div>
                        <div class="pb-[1.5rem]">
                            <label for="street-address" class="block">Street Address</label>
                            <input id="street-Address" name="street-Address" type="street-address" autocomplete="street-address" class="block rounded-md ring-1 ring-black w-[20rem] h-[2.5rem]">

                            </input>
                        </div>
                        <div class="pb-[1.5rem]">
                            <label for="city" class="block">City</label>
                            <input id="city" name="city" type="address-level2" autocomplete="address-level2" class="block rounded-md ring-1 ring-black w-[20rem] h-[2.5rem]">

                            </input>
                        </div>
                        <div class="pb-[1.5rem]">
                            <label for="state" class="block">State</label>
                            <input id="state" name="state" type="region" autocomplete="address-level1" class="block rounded-md ring-1 ring-black w-[20rem] h-[2.5rem]">

                            </input>
                        </div>
                        <div class="pb-[3rem]">
                            <label for="postal-code" class="block">Postal Code</label>
                            <input id="postal-code" name="postal-code" type="postal-Code" autocomplete="postal-Code" class="block rounded-md ring-1 ring-black w-[20rem] h-[2.5rem]">

                            </input>
                        </div>
                        <div class="pb-[1.5rem]">
                            <label for="noG" class="block">Number of Guests</label>
                            <input id="noG" name="noG" type="number" class="block rounded-md ring-1 ring-black w-[20rem] h-[2.5rem]">

                            </input>
                        </div>
                        
                        <div class="pb-[1.5rem]pt-[10rem]">
                        <button type="button" class="rounded-md bg-secondary px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-black hover:bg-primary w-[20rem] h-[2.5rem]">Submit</button>
                        </div>
                </form>
            </div>

        </div>
    );
}

export default Catering;