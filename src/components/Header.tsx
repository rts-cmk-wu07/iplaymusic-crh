import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { IoSearchOutline, IoLogOutOutline } from "react-icons/io5";
import Marquee from "react-fast-marquee";

function Header({
  title,
  showArrow,
  showSignOut,
  showSearch,
}: {
  title?: string;
  showArrow?: boolean;
  showSignOut?: boolean;
  showSearch?: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div className="z-50 flex items-center justify-between p-4 text-xl text-zinc-700 dark:bg-secondary dark:text-white min-h-[60px] shadow-bottom">
      {showArrow && (
        <IoIosArrowBack
          className="mr-auto min-w-[20px]"
          onClick={() => {
            navigate(-1);
          }}
        />
      )}
      {showSignOut && (
        <IoLogOutOutline
          className="mr-auto"
          onClick={() => {
            navigate("/login");
          }}
        />
      )}
      {title && title.length > 21 ? (
        <Marquee gradient={false} delay={3} speed={35} className="mx-4">
          <p className="pr-10 tracking-widest uppercase font-extralight">
            {title}
          </p>
        </Marquee>
      ) : (
        <h1 className="col-start-2 tracking-widest uppercase font-extralight">
          {title}
        </h1>
      )}

      {showSearch && (
        <NavLink to="/search" className="ml-auto min-w-[20px]">
          <IoSearchOutline />
        </NavLink>
      )}
    </div>
  );
}

export default Header;
