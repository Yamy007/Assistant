import { useState } from "react";
import Table from "../../assets/svg/table.svg";
import TableDark from "../../assets/svg/table_dark.svg";
import Home from "../../assets/svg/home.svg";
import HomeDark from "../../assets/svg/home_dark.svg";
import Settings from "../../assets/svg/settings.svg";
import SettingsDark from "../../assets/svg/settings_dark.svg";
import Finance from "../../assets/svg/finance.svg";
import FinanceDark from "../../assets/svg/finance_dark.svg";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { settingsActions } from "../../redux/slice/settingsSlice";
export const Menu = () => {
  const [active, setActive] = useState<string>(
    window.location.pathname.split("/")[1]
  );
  const changeLocation = (name: string) => {
    setActive(name);
    window.location.href = `/${name}`;
  };
  const dispatch = useAppDispatch();
  return (
    <div className="absolute z-30 top-16 bg-primary-300 shadow-2xl h-fit w-32  flex justify-start items-center flex-col gap-1 p-2 rounded-md left-0">
      <button
        onClick={() => changeLocation("")}
        className={`w-full  flex justify-start items-center gap-2 outline-none p-1 ${
          active == "" ? "bg-secondary-900 text-primary-100" : ""
        }  rounded-md text-left`}
      >
        <img className="w-4" src={active == "" ? Home : HomeDark} />
        Home
      </button>
      <button
        onClick={() => changeLocation("table")}
        className={`w-full  flex justify-start items-center gap-2 outline-none p-1 ${
          active == "table" ? "bg-secondary-900 text-primary-100" : ""
        }  rounded-md text-left`}
      >
        <img className="w-4" src={active == "table" ? Table : TableDark} />
        Table
      </button>
      <button
        onClick={() => changeLocation("finance")}
        className={`w-full  flex justify-start items-center gap-2 outline-none p-1 ${
          active == "finance" ? "bg-secondary-900 text-primary-100" : ""
        }  rounded-md text-left`}
      >
        <img
          className="w-4"
          src={active == "finance" ? Finance : FinanceDark}
        />
        Finance
      </button>
      <div className="w-full bg-grey-800 h-[1px]"></div>
      <button
        onClick={() => dispatch(settingsActions.changeSettings())}
        className={`w-full  flex justify-start items-center gap-2 outline-none p-1 ${
          active == "settings" ? "bg-secondary-900 text-primary-100" : ""
        }  rounded-md text-left`}
      >
        <img
          className="w-4"
          src={active == "settings" ? Settings : SettingsDark}
        />
        Settings
      </button>
    </div>
  );
};
