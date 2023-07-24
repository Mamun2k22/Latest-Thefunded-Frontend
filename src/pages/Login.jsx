import { circle, mainLogo, tick } from "../ui/images";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, } from "react";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import SignUpModal from "../components/SignUpModal";
import { useForm } from "react-hook-form";
import axios from "axios"; 
export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//  Login User
const handleLogin = async (data) => {
  // console.log(data)
  try {
    const response = await axios.post("http://localhost:5000/login", data);
    console.log(response.data)
    if (response.data.token) {
      console.log(response.data.token)
      // If login is successful and a token is received, store the token in local storage
      localStorage.setItem("token", response.data.token);
      // Redirect to the protected route (you can change "/protected" to your desired protected route)
      navigate("/dashboard");
    }
  } catch (error) {
    setError("Invalid email or password"); // Set error message if login fails
  }
};

  const [forgetModal, setForgetModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

    const [user, setUser] = useState('')

  useEffect(() => {
    const html = document.querySelector("html");
    if (forgetModal || registerModal) html.classList.add("stop-scrolling");
    else html.classList.remove("stop-scrolling");
  }, [forgetModal, registerModal]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main className="login min-h-screen">
      <header className="z-50 relative left-0 right-0 transition-all duration-300 border-b border-transparent py-2 sm:py-4">
        <div className="container">
          <div className="wrapper flex mt-4 md:mt-0 justify-start md:justify-between">
            <Link to="/" className="main-logo">
              <img
                className="max-w-[9rem] sm:max-w-[11rem]"
                src={mainLogo}
                alt="TheFundedHub"
              />
            </Link>

            <nav className="nav-links hidden md:flex text-wht font-light justify-center items-center">
              <div className="item grid justify-center items-center">
                <ul className="flex flex-wrap gap-4 justify-center items-center">
                  <li>
                    <Link to="/terms-condition" className="text-[0.8rem]">
                      Term and Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="text-[0.8rem]">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/cookie-policy" className="text-[0.8rem]">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/risk-disclosure" className="text-[0.8rem]">
                      Risk Disclosure
                    </Link>
                  </li>
                  <li>
                    <Link to="/report-problem" className="text-[0.8rem]">
                      Report a problem
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="container relative">
          <div className="wrapper z-10 relative flex justify-center items-center min-h-[40vh] pt-12 md:pt-20 sm:mb-20 pb-24 sm:pb-36">
            <form onSubmit={handleSubmit(handleLogin)}
              className="grid gap-3 p-7 relative z-10 rounded-2xl bg-main-bg/70 border-primary max-w-[30rem] w-full"
              action=""
            >
              <div className="heading grid gap-3 justify-start items-center">
                <h1 className="text-start text-xl xs:text-[1.8rem] font-medium">
                  Sign in
                </h1>

                <div className="register font-normal">
                  <span>
                    New user?{" "}
                    <span
                      onClick={() => setRegisterModal(true)}
                      className="underline sm:cursor-pointer"
                    >
                      Register now
                    </span>
                  </span>
                </div>
              </div>
              {/* Email */}
              <div className="email mt-3">
                <input
                  {...register("email", {
                    required: "email address is required",
                  })}
                  name="email"
                  className="email w-full focus:outline-primary/80 border-none outline outline-2 outline-primary/50 bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                  type="email"
                  placeholder="Email"
                />
              </div>
              {/* Forget password */}
              <div className="forget-pass text-end">
                <div
                  onClick={() => setForgetModal(true)}
                  className="underline font-Montserrat font-medium text-sm cursor-pointer"
                >
                  Forgot Password
                </div>
              </div>
              {/* Password */}
              <div className="email">
                <input
                 {...register("password", {
                  required: "password is required"
                })}
                  name="password"
                  className="email w-full focus:outline-primary/80 border-none outline outline-2 outline-primary/50  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="wrapper flex gap-3 flex-col sm:flex-row justify-between items-start sm:items-center mt-1">
                <div className="remember flex gap-3 justify-center items-center">
                  <input
                    type="checkbox"
                    id="remeber"
                    className="relative h-[1rem] w-[1rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/70 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  />
                  <label
                    htmlFor="remeber"
                    className="sm:cursor-pointer text-sm font-Montserrat font-medium"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              {/* Login button */}
              <div className="login-btn mt-10 flex justify-center items-center">
                <button 
                type="submit"
                onClick={() => handleSubmit(handleLogin)}
                className="py-2.5 px-12 text-main-bg hover:bg-primary bg-primary/80 transition-all duration-300 rounded-3xl font-Montserrat font-semibold">
                  Login
                </button>
              </div>

              {/* signin */}
              <div className="signup grid gap-4 mt-2">
                <div className="heading flex justify-center items-cente font-Montserrat font-semiboldr">
                  <h5>Or sign in with:</h5>
                </div>
                {/* Logos */}
                <div className="logos flex justify-center items-center gap-3">
                  {/* google */}
                <LoginSocialGoogle
               client_id={"249371424368-slnd9g6nshih5mdq4bqg7v4iaavs45o9.apps.googleusercontent.com"}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                 access_type="offline"
                onResolve={({ provider, data }) => {
              setUser(provider, data);
        //   console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
 
        <button
        className="logo h-[2.7rem] w-[2.7rem] sm:h-[3rem] sm:w-[3rem] rounded-full border-2 flex justify-center items-center">
      <FaGoogle className=" w-[1.4rem] h-[1.4rem] sm:w-[1.8rem] sm:h-[1.8rem]" />
      </button>
      </LoginSocialGoogle>
                 
                  {/* facebook */}
        <LoginSocialFacebook
        appId={"655086316660441"}
        provider="facebook"
        scope="email"
        access_type="offline"
        onResolve={({ response }) => {
          console.log(response);
        }}
        onReject={(err) => {
          console.log("err", err);
        }}
       >
       <button
        className="logo h-[2.7rem] w-[2.7rem] sm:h-[3rem] sm:w-[3rem] rounded-full border-2 flex justify-center items-center"
        >
       <FaFacebookF className="w-[1.4rem] h-[1.4rem] sm:w-[1.8rem] sm:h-[1.8rem]" />
        </button>
       </LoginSocialFacebook>
                  
                </div>
              </div>
            </form>


            {/* cirlce */}
            <img
              className="cirlce absolute left-[15%] -top-[30%]  w-[50rem] rotate-[80deg] opacity-[0.2]"
              src={circle}
              alt="circle"
            />
            {/* cirlce */}
            <img
              className="cirlce absolute -left-[25%] bottom-[30%]  w-[50rem] rotate-[80deg] opacity-[0.1] md:opacity-[0.2]"
              src={circle}
              alt="circle"
            />
            {/* cirlce */}
            <img
              className="cirlce absolute -bottom-[5%] -right-[50%]  w-[70rem] rotate-[80deg] opacity-[0.1]  md:opacity-[0.25]"
              src={circle}
              alt="circle"
            />
            {/* cirlce */}
            <img
              className="cirlce absolute -bottom-[50%] -left-[20%]  w-[70rem] rotate-[80deg] opacity-[0.1]  md:opacity-[0.15]"
              src={circle}
              alt="circle"
            />
            {/* cirlce */}
            <img
              className="cirlce absolute -bottom-[80%] -right-[40%]  w-[70rem] rotate-[80deg] opacity-[0.1]  md:opacity-[0.07]"
              src={circle}
              alt="circle"
            />
          </div>
        </div>
      </section>

      {/* Forgot Modal */}
      <div
        className={`modal fixed inset-0 z-[99] transition-all duration-100 flex justify-center items-center overflow-hidden ${
          forgetModal ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`bg absolute inset-0 w-full h-full transition-all duration-200 backdrop-blur-xl ${
            forgetModal ? "opacity-100 " : "opacity-0"
          }`}
          onClick={() => setForgetModal(false)}
        ></div>

        <div
          className={`box relative m-6 max-w-[500px] w-full text-main text-wht bg-light-gray bg-main-bg/90 transition-all duration-300 rounded-3xl z-[999] py-10 px-6 ${
            forgetModal ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {/* Tick */}
          <div className="tick hidden pt-5 sm:pt-8 pb-5 sm:pb-8 md:pb-12 flex justify-center items-center">
            <img
              className={`max-w-[3.5rem] exs:max-w-[4rem] sm:max-w-[5rem] md:max-w-[5.5rem] transition-all duration-500 opacity-50 ${
                forgetModal ? "scale-100" : "scale-0"
              }`}
              src={tick}
              alt="tick"
            />
          </div>

          {/* content */}
          <form className="content grid w-full text-center gap-4 font-semibold">
            <div className="heading text-2xl">
              <h3>Password Recovery</h3>
            </div>
            <p className="font-light font-Montserrat text-[1.05rem]">
              We will send a password recovery link to <br /> your e-mail
            </p>

            {/* Email */}
            <div className="email w-full relative mt-4">
              <input
                name="email"
                required="true"
                className="email w-full focus:outline-primary/80 border-none outline outline-2 outline-primary/50 bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                type="email"
                placeholder="Email"
              />
              {/* arrow */}
              <Link to="/email-verification" className="arrow absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                <HiOutlineArrowNarrowRight className="text-3xl text-thin text-primary/[78%]" />
              </Link>
            </div>

            {/* confirm btn */}
            <div className="confirm-btn mt-8 flex justify-center items-center">
              <Link to="/email-verification" className="py-2 sm:py-2.5 px-12 sm:px-16 text-main-bg hover:bg-primary bg-primary/80 transition-all duration-300 rounded-3xl font-Montserrat font-semibold">
                Confirm
              </Link>
            </div>
          </form>
          {/* cross */}
          <div className="cross" onClick={() => setForgetModal(false)}>
            <RxCross1 className="absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 md:right-6 top-4 md:top-6" />
          </div>
        </div>
      </div>

      {/* Sign Up modal */}
      <SignUpModal props={[registerModal, setRegisterModal]} />

      <footer className="z-50 relative md:hidden left-0 right-0 transition-all duration-300 border-b border-transparent py-4 pb-10">
        <div className="container">
          <div className="wrapper flex flex-col md:flex-row justify-between gap-8">
            <nav className="nav-links text-wht font-light flex justify-center items-center">
              <div className="item grid justify-center items-center">
                <ul className="flex flex-wrap gap-4 justify-center items-center">
                  <li>
                    <Link to="/terms-condition" className="text-[0.8rem]">
                      Term and Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="text-[0.8rem]">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/cookie-policy" className="text-[0.8rem]">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/risk-disclosure" className="text-[0.8rem]">
                      Risk Disclosure
                    </Link>
                  </li>
                  <li>
                    <Link to="/report-problem" className="text-[0.8rem]">
                      Report a problem
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}