import moment from "moment";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-center text-center py-6">
        <div>
          <img src={logo} className="w-[260px] mx-auto" />
          <h3 className="text-[#706f6f] text-lg font-normal leading-[30px] mt-3">
            Journalism Without Fear or Favour
          </h3>
          <h4 className="text-[#706f6f] text-xl font-medium  leading-[30px]">
            <span className="text-[#403f3f] text-xl font-medium leading-[30px]">{moment().format("dddd")} </span>
             {moment().format(" MMMM D, YYYY")}
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
