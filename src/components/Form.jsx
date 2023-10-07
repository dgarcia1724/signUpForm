import { useReducer } from "react";

const initialState = {
  errorFirstName: false,
  errorLastName: false,
  errorEmailAddress: false,
  errorPassword: false,
  emailMessage: "",
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    // Input #1
    case "firstNameTrue":
      return { ...state, errorFirstName: true };
    case "firstNameFalse":
      return { ...state, errorFirstName: false };
    // Input #2
    case "lastNameTrue":
      return { ...state, errorLastName: true };
    case "lastNameFalse":
      return { ...state, errorLastName: false };
    // Input #3
    case "emailAddressTrue":
      return { ...state, errorEmailAddress: true };
    case "emailAddressFalse":
      return { ...state, errorEmailAddress: false };
    // Input #4
    case "passwordTrue":
      return { ...state, errorPassword: true };
    case "passwordFalse":
      return { ...state, errorPassword: false };
    // Email Message
    case "emailEmpty":
      return { ...state, emailMessage: "Email Address cannot be empty" };
    case "emailWrongFormat":
      return { ...state, emailMessage: "Looks like this is not an email" };
    // Other
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
    {
      firstName,
      lastName,
      emailAddress,
      password,
      errorFirstName,
      errorLastName,
      errorEmailAddress,
      errorPassword,
      emailMessage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleIsError() {
    // Input #1
    if (firstName === "") {
      dispatch({ type: "firstNameTrue" });
    } else {
      dispatch({ type: "firstNameFalse" });
    }

    // Input #2
    if (lastName === "") {
      dispatch({ type: "lastNameTrue" });
    } else {
      dispatch({ type: "lastNameFalse" });
    }

    // Input #3
    if (emailAddress === "") {
      dispatch({ type: "emailAddressTrue" });
      dispatch({ type: "emailEmpty" });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      dispatch({ type: "emailAddressTrue" });
      dispatch({ type: "emailWrongFormat" });
    } else {
      dispatch({ type: "emailAddressFalse" });
    }

    // Input #4
    if (password === "") {
      dispatch({ type: "passwordTrue" });
    } else {
      dispatch({ type: "passwordFalse" });
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
      {/* Form */}
      <div className="mt-6 p-6 bg-white rounded-lg shadow-xl">
        {/* Input #1 */}
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
        {/* Input #2 */}
        <div className="positionError">
          <input
            className={`${
              errorLastName ? "mb-[6px]" : "mb-4"
            } py-[15px] pl-[19px]  w-full border-2 border-gray-400 rounded-md 
            font-semibold text-[14px] tracking-[0.25px] 
            text-darkColor placeholder:text-gray-400 
            ${errorLastName ? "border-brightRed" : ""}`}
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) =>
              dispatch({ type: "setLastName", payload: e.target.value })
            }
          />
          {errorLastName && (
            <img src="src/intro-component-with-signup-form-master/images/icon-error.svg" />
          )}
        </div>
        {errorLastName && (
          <p className="mb-[19px] text-right font-medium italic text-[11px] tracking-[0px] text-brightRed">
            Last Name cannot be empty
          </p>
        )}
        {/* Input #3 */}
        <div className="positionError">
          <input
            className={`${
              errorEmailAddress ? "mb-[6px]" : "mb-4"
            } py-[15px] pl-[19px]  w-full border-2 border-gray-400 rounded-md 
            font-semibold text-[14px] tracking-[0.25px] 
            text-darkColor placeholder:text-gray-400 
            ${errorEmailAddress ? "border-brightRed" : ""}`}
            type="text"
            placeholder="Email Address"
            value={emailAddress}
            onChange={(e) =>
              dispatch({ type: "setEmailAddress", payload: e.target.value })
            }
          />
          {errorEmailAddress && (
            <img src="src/intro-component-with-signup-form-master/images/icon-error.svg" />
          )}
        </div>
        {errorEmailAddress && (
          <p className="mb-[19px] text-right font-medium italic text-[11px] tracking-[0px] text-brightRed">
            {emailMessage}
          </p>
        )}
        {/* Input #4 */}
        <div className="positionError">
          <input
            className={`${
              errorPassword ? "mb-[6px]" : "mb-4"
            } py-[15px] pl-[19px]  w-full border-2 border-gray-400 rounded-md 
            font-semibold text-[14px] tracking-[0.25px] 
            text-darkColor placeholder:text-gray-400 
            ${errorPassword ? "border-brightRed" : ""}`}
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              dispatch({ type: "setPassword", payload: e.target.value })
            }
          />
          {errorPassword && (
            <img src="src/intro-component-with-signup-form-master/images/icon-error.svg" />
          )}
        </div>
        {errorPassword && (
          <p className="mb-[19px] text-right font-medium italic text-[11px] tracking-[0px] text-brightRed">
            Password cannot be empty
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleIsError}
          className="mb-2 px-[45px] py-[15px] w-full uppercase drop-shadow-md  
          rounded-lg bg-brightGreen text-white hover:bg-[#77E2B3]"
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
