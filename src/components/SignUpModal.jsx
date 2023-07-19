import { useEffect, useState } from "react";
import axios from "axios";
import { arrow } from "../ui/images";
import { Country } from "country-state-city";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line react/prop-types
export default function SignUpModal({ props }) {
  const [registerModal, setRegisterModal] = props;
  // inputs states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countrySelect, setCountrySelect] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [accept, setAccept] = useState(false);
  const allCountry = Country.getAllCountries();
  const [buttonState, setbuttonState] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();


const handleSignUp = async (data) => {
  console.log(data.lastName)
  const datas = {
     title,
     firstName,
     lastName,
     password,
     confirmPassword,
     countrySelect,
     email,
  } 
  // const { password, confirmPassword } = data;
  console.log(datas)
  if (datas.password === datas.confirmPassword) {
    setSuccessMessage("Data sent successfully!");
  } else {
    
    setErrorMessage("Passwords do not match.");
    return
  }
    try {
      console.log(data)
      const response = await axios.post("http://localhost:5000/register", data);
      

      toast.success("Email sent to you for verification");

      reset();
      // (buttonState ? setRegisterModal(false) : "")
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  useEffect(() => {
    if (
      firstName &&
      lastName &&
      countrySelect &&
      email.includes("@") &&
      password &&
      confirmPassword &&
      accept &&
      agree
    ) {
      setbuttonState(true);
    } else setbuttonState(false);
  }, [
    firstName,
    lastName,
    countrySelect,
    email,
    password,
    confirmPassword,
    accept,
    agree,
  ]);

  return (
    <div
      className={`modal fixed inset-0 z-[99] transition-all duration-100 flex justify-center items-center ${
        registerModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`bg absolute inset-0 w-full h-full transition-all duration-200 backdrop-blur-xl ${
          registerModal ? "opacity-100 " : "opacity-0"
        }`}
        onClick={() => setRegisterModal(false)}
      ></div>

      <div className="wrap overflow-hidden rounded-3xl m-6">
        <div
          className={`box relative max-w-[42rem] w-full text-main text-wht bg-light-gra transition-all bg-main-bg/90 duration-300 rounded-3xl z-[999] py-8 px-6 overflow-y-scroll sm:overflow-y-auto h-[97vh] sm:h-full ${
            registerModal ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {/* content */}
          <form
          onSubmit={handleSubmit(handleSignUp)}
            className="grid gap-6 relative z-10 rounded-xl border-primary"
            
          >
            <div className="heading grid gap-3 justify-start items-center">
              <h1 className="text-start text-xl xs:text-[1.8rem] font-medium">
                Register
              </h1>

              <div className="register font-normal">
                <span>
                  Already have an account?{" "}
                  <span
                    onClick={() => setRegisterModal(false)}
                    className="underline sm:cursor-pointer"
                  >
                    Login
                  </span>
                </span>
              </div>
            </div>
            <div className="input-fields grid sm:grid-cols-2 gap-6 sm:gap-8 mt-2">
              {/* left */}
              <div className="left grid gap-5">
                <div className="same-line grid grid-cols-6 gap-4">
                  {/* Slected */}
                  <div className="selecte-title col-span-2">
                    <div className="wrapper relative">
                      {/* arrow */}
                      <img
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]"
                        src={arrow}
                        alt="arrow"
                      />

                      {/* select */}
                      <select
                       {...register("title")}
                        id="title"
                        name="title"
                        autoFocus={true}
                        className="form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200 bg-transparent"
                      >
                        <option value="Mr.">Mr.</option>
                        <option value="Mr.">Ms.</option>
                        <option value="Mr.">Mrs.</option>
                        <option value="Mr.">Mx.</option>
                      </select>
                    </div>
                  </div>
                  {/* First name */}
                  <div className="first-name col-span-4">
                    <input
                    {...register("firstName")}
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      name="firstName"
                      className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                {/* Last name */}
                <div className="last-name">
                  <input
                  {...register("lastName")}
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    name="lastName"
                    className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                {/* Email */}
                <div className="email">
                  <input
                      {...register("email")}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="email"
                    className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              {/* Right */}
              <div className="right grid gap-5">
                {/* Country Residence */}
                <div className="country-residence">
                  <div className="wrapper relative">
                    {/* arrow */}
                    <img
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]"
                      src={arrow}
                      alt="arrow"
                    />
                    <select
                    {...register("country")}
                      onChange={(e) => setCountrySelect(e.target.value)}
                      value={countrySelect}
                      id="country"
                      name="country"
                      className="form-control relative w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200 bg-transparent"
                    >
                      <option defaultChecked>Choose a country</option>
                      {allCountry.map((country, index) => {
                        return (
                          <option key={index} value={country.name}>
                            {country.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                {/* Password */}
                <div className="password">
                  <input
                   {...register("password")}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name="password"
                    className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                {/* Confirm Password */}
                <div className="confirm-pass">
                  <input
                   {...register("confirmPassword")}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    name="confirmPassword"
                    className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>

            {/* wrapper */}
            <div className="wrap grid sm:grid-cols-2 gap-6">
              {/* Checkboxs */}
              <div className="checkboxs grid gap-3 justify-start max-w-[35rem] mt-2">
                {/* checkbox */}
                <div className="checkbox flex gap-3 justify-start items-center">
                  <input
                    onInput={() => setAgree(!agree)}
                    type="checkbox"
                    id="checkbox1"
                    className="relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  />
                  <label
                    htmlFor="checkbox1"
                    className="sm:cursor-pointer font-Montserrat font-medium text-sm"
                  >
                    I agree to the{" "}
                    <Link to="/terms-condition" className="underline text-all">
                      terms and conditions
                    </Link>
                  </label>
                </div>
                {/* checkbox */}
                <div className="checkbox flex gap-3 justify-start items-center">
                  <input
                    onInput={() => setAccept(!accept)}
                    type="checkbox"
                    id="checkbox2"
                    className="relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  />
                  <label
                    htmlFor="checkbox2"
                    className="sm:cursor-pointer font-Montserrat font-medium text-sm"
                  >
                    I accept the{" "}
                    <Link to="/privacy-policy" className="underline text-all">
                      privacy policy
                    </Link>
                  </label>
                </div>
                {/* checkbox */}
                <div className="checkbox flex gap-3 justify-start items-center">
                  <input
                    type="checkbox"
                    id="checkbox3"
                    className="relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  />
                  <label
                    htmlFor="checkbox3"
                    className="sm:cursor-pointer font-Montserrat font-medium text-sm"
                  >
                    Subscribe to our newsletter
                  </label>
                </div>
              </div>
              {/* sign up button */}
              <div className="login-btn mt-6 grid justify-center items-center w-full">
                {/* sign up  btn */}
                <button
                type="submit"
                onClick={() => handleSubmit(handleSignUp)}
                className={`py-2.5 sm:py-3 px-16 sm:px-20 text-main-bg  transition-all duration-300 rounded-3xl font-Montserrat font-semibold ${
                    buttonState
                      ? "hover:bg-primary bg-primary/80"
                      : " !cursor-default bg-primary/20"
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>

          <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />
          {/* cross */}
          <div className="cross" onClick={() => setRegisterModal(false)}>
            <RxCross1 className="absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 top-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
