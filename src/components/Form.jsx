import { useReducer } from "react";

const initialState = {
  errorFirstName: false,
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "firstNameTrue":
      return { ...state, errorFirstName: true };
    case "firstNameFalse":
      return { ...state, errorFirstName: false };
    case "setFirstName":
      return { ...state, firstName: action.payload };
    case "setLastName":
      return { ...state, lastName: action.payload };
    case "setEmailAddress":
      return { ...state, emailAddress: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}

function Form() {
  const [
    { firstName, lastName, emailAddress, password, errorFirstName },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleIsError() {
    if (firstName === "") {
      dispatch({ type: "firstNameTrue" });
    } else {
      dispatch({ type: "firstNameFalse" });
    }
  }

  return (
    <div>
      <div className="py-[18px] px-[66px] rounded-lg  bg-brightPurple text-white shadow-xl">
        <h1 className="font-bold text-[15px] leading-[26px] tracking-[0.27px]">
          Try it free 7 days{" "}
          <span className="font-normal">then $20/mo. thereafter</span>
        </h1>
      </div>
      <div className="mt-6 p-6 bg-white rounded-lg shadow-xl">
        <div className="positionError">
          <input
            className={`${
              errorFirstName ? "mb-[6px]" : "mb-4"
            } py-[15px] pl-[19px]  w-full border-2 border-gray-400 rounded-md 
            font-semibold text-[14px] tracking-[0.25px] 
            text-darkColor placeholder:text-gray-400 
            ${errorFirstName ? "border-brightRed" : ""}`}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) =>
              dispatch({ type: "setFirstName", payload: e.target.value })
            }
          />
          {errorFirstName && (
            <img src="src/intro-component-with-signup-form-master/images/icon-error.svg" />
          )}
        </div>
        {errorFirstName && (
          <p className="mb-[19px] text-right font-medium italic text-[11px] tracking-[0px] text-brightRed">
            First Name cannot be empty
          </p>
        )}
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
        <button
          onClick={handleIsError}
          className="mb-8 px-[45px] py-[15px] w-full uppercase drop-shadow-md  rounded-lg bg-brightGreen text-white hover:bg-[#77E2B3]"
        >
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

export default Form;
