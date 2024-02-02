import { useEffect, useRef } from "react";
import Resume from "../../assets/CV.pdf";

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => {
    menuRef.current.classList.toggle("show_menu");
  };

  const headerRef = useRef();
  const scrollHandler = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      }else{
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(()=>{
scrollHandler();
return window.removeEventListener('scroll', scrollHandler)
  },[])

  return (
    <header
      ref={headerRef}
      className="w-full h-[90px] leading-[80px] flex items-center bg-[#12372A] text-headerFont"
    >
      <div className="container text-headerFont">
        <div className="flex items-center justify-between">
          {/* Logo Item */}

          <div className="flex items-center gap-[10px]">
            <div className=" bg-smallTextColor text-white rounded-l-[10px]">
              <span className="w-[35px] h-[25px]  text-[18px] font-[500] flex items-center justify-center">
                T
              </span>
              <span className="w-[35px] h-[25px]  text-[18px] font-[500]  flex items-center justify-center">
                M
              </span>
            </div>

            <div className="leading-[20px] ">
              <h2 className="text-xl text-headerFont font-[700]">Tooba</h2>
              <p className="text-headerFont text-[14px] font-[500]">
                Personal Portfolio
              </p>
            </div>
          </div>
          {/* Links */}
          <div className="menu" ref={menuRef} onClick={menuToggle}>
          
            <ul className="flex items-center gap-10">
              
              <li>
                <a className="text-headerFont font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-headerFont font-[600]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-headerFont font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-headerFont font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* _________ */}

          <div className="flex flex-col md:flex-row gap-2">
            <div className="hidden md:flex items-center gap-4">
              <a
                href={Resume}
                download
                className="flex items-center gap-2 text-headerFont font-[600] border border-solid text-headerFont py-2 sm:px-4 px-2 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white text-[14px] hover:font-[500] ease-in duration-300"
              >
                <i class="ri-file-download-line"></i> Resume
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/tooba-mehboob-31697620a/" target="_tab" className="flex items-center gap-2 text-headerFont font-[600] border border-solid text-headerFont py-2 sm:px-4 px-2 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white text-[14px] hover:font-[500] ease-in duration-300">
                <i className="ri-send-plane-line"></i>Let's Connect
              </a>

              <span
                className="text-2xl text-headerFont md:hidden cursor-pointer"
                onClick={menuToggle}
              >
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
