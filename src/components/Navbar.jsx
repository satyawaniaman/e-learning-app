import { PiStudentDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { NavbarMenu } from "../NavbarMenu";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex  justify-between item-center py-6">
          {/*logo section*/}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <PiStudentDuotone className="text-4xl text-secondary" />
            <p>learnly</p>
          </div>
          {/*menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href="{item.link}"
                      className="inline-block text-grey-600 text-sm xl:text-base py-1 px-2 xl:px-3 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*button section */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold">sign in</button>
            <button className="text-white rounded-full py-2 px-6 bg-secondary font-semibold">
              Register
            </button>
          </div>
          {/* mobile hambuger section */}
          <div
            className="lg:hidden "
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>
      {/* mobile sidebar menu  */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
}

export default Navbar;
