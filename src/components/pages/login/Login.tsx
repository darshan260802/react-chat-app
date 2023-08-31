import {
  ImageWrapper,
  PageWrapper,
} from "@/components/wrappers/layout-wrappers";
import LOGIN_BG from "@/assets/images/login_bg.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface LoginState {
  inputMode: "email" | "login" | "signup";
}

export default function Login() {
  const [state, setState] = useState<LoginState>({
    inputMode: "email",
  });

  return (
    <PageWrapper>
      {/* Main Div */}
      <div className="h-full w-full  grid grid-cols-3">
        {/* Left Image */}
        <div className="col-span-2 overflow-hidden z-10">
          <ImageWrapper src={LOGIN_BG} alt="Chat App Login Image" />
        </div>

        {/* Right Form */}
        <div className="max-w-full w-full h-full">
          <motion.div
            
            layout
            className="flex flex-col items-center justify-center h-full gap-2 py-3 px-14"
          >
            <motion.h3 layout className="text-2xl">
              Welcome{" "}
              
            </motion.h3>

            {/* Form */}
            <motion.div className="w-full flex flex-col gap-3" layout>
              <AnimatePresence mode="wait" presenceAffectsLayout  >
                {state.inputMode === "email" ? (
                  <motion.input
                    animate={{ x: 0 }}
                    exit={{ x: -250, opacity: 0 }}
                    key={"email"}
                    transition={{ bounce: 0 }}
                    layout
                    className="w-full p-3 bg-secondary/20 outline-none rounded-lg focus:ring-1 ring-0 ring-primary transition-shadow duration-300"
                    placeholder="Email"
                    type="text"
                    name=""
                    id=""
                  />
                ) : (
                  <>
                    {state.inputMode === "signup" && (
                      <motion.input
                        layout
                        animate={{ x: 0 }}
                        initial={{ x: "100" }}
                        transition={{ bounce: 0 }}
                        className="w-full p-3 bg-secondary/20 outline-none rounded-lg focus:ring-1 ring-0 ring-primary transition-shadow duration-300"
                        placeholder="Full Name"
                        type="text"
                        name=""
                        id=""
                      />
                    )}
                    <motion.input
                      layout
                      animate={{ x: 0 }}
                      initial={{ x: "150" }}
                      transition={{ bounce: 0 }}
                      className="w-full p-3 bg-secondary/20 outline-none rounded-lg focus:ring-1 ring-0 ring-primary transition-shadow duration-300"
                      placeholder="Password"
                      type="text"
                      name=""
                      id=""
                    />
                  </>
                )}
              </AnimatePresence>
              <motion.button
                layout
                className="w-full p-3 bg-primary rounded-lg transition-colors hover:bg-primary/90"
                onClick={() => setState({ inputMode: "signup" })}
              >
                Continue
              </motion.button>
            </motion.div>
            <motion.div className="hr flex items-center w-full gap-3" layout>
              <div className="flex-1 border-b border-nuetral"></div>
              <span>OR</span>
              <div className="flex-1 border-b border-nuetral"></div>
            </motion.div>
            <motion.button
              layout
              className=" bg-light text-dark flex p-3 rounded-lg items-center justify-center gap-3 w-full "
            >
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span className="text-dark">Continue with Google</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
