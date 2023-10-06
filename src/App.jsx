export default function App() {
  return (
    <div className="bodyBg mx-auto container h-screen ">
      <section className="text-center pt-[88px] px-[24px]">
        <MainText />
        <Form />
      </section>
    </div>
  );
}

function MainText() {
  return (
    <div className="mb-[64px] text-white">
      <h1 className="font-bold text-[28px] leading-[36px] tracking-[-0.29px] ">
        Learn to code by watching others
      </h1>
      <p className="mt-4 font-medium text-4 leading-[26px] tracking-[0px]">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
}

function Form() {
  return (
    <div>
      <div className="py-[18px] px-[66px] rounded-lg  bg-brightPurple text-white shadow-xl">
        <h1 className="font-bold text-[15px] leading-[26px] tracking-[0.27px]">
          Try it free 7 days{" "}
          <span className="font-normal">then $20/mo. thereafter</span>
        </h1>
      </div>
      <div className="mt-6 p-6 bg-white rounded-lg shadow-xl">
        <input
          className="mb-4 py-[15px] pl-[19px]  w-full border-2 border-gray-400 rounded-md font-semibold text-[14px] tracking-[0.25px] text-darkColor placeholder:text-gray-400 "
          type="text"
          placeholder="First Name"
        />
        <input
          className="mb-4 py-[15px] pl-[19px]  w-full border-2 border-gray-400 rounded-md font-semibold text-[14px] tracking-[0.25px] text-darkColor placeholder:text-gray-400 "
          type="text"
          placeholder="Last Name"
        />
        <input
          className="mb-4 py-[15px] pl-[19px]  w-full border-2 border-gray-400 rounded-md font-semibold text-[14px] tracking-[0.25px] text-darkColor placeholder:text-gray-400 "
          type="text"
          placeholder="Email Address"
        />
        <input
          className="mb-4 py-[15px] pl-[19px]  w-full border-2 border-gray-400 rounded-md font-semibold text-[14px] tracking-[0.25px] text-darkColor placeholder:text-gray-400 "
          type="text"
          placeholder="Password"
        />
        <button className="mb-8 px-[45px] py-[15px] w-full uppercase drop-shadow-md  rounded-lg bg-brightGreen text-white hover:bg-[#77E2B3]">
          Claim your free trial
        </button>
        <p className="px-[40px] font-medium text-[11px] leading-[21px] tracking-[0px] text-[#BAB7D4]">
          By clicking the button, you are agreeing to our{" "}
          <span className="font-bold text-brightRed">Terms and Services</span>
        </p>
      </div>
    </div>
  );
}
