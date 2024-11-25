import  { useState, useEffect } from "react";
import "../../layouts/style.scss";
import Logo from "../../assets/svg/logo.svg";
import Arrow from "../../assets/svg/arrow_left.svg";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import {ILogin} from '../../interface/auth/auth'
import {authService} from "../../service/authService"
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";

export const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login =  async () => {
   const data:ILogin = {email, password}
   const res =  await authService.login(data)
   if (res.status == 200){
    cookies.set("access", res?.data.access);
    cookies.set("refresh", res?.data.refresh);
    navigate('/')
    window.location.reload(); 

    
   }
  }


  return (
    <div className="w-screen h-screen color-bg flex flex-col justify-evenly items-center">
      <div className="flex flex-col justify-center items-center gap-3 h-3/5">
        <img src={Logo} />
        <div className="text-primary-100 text-center">
          Live Easy, Stay <br /> in Control
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center w-full gap-4 bg-white h-2/5 rounded-tr-[20%] transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-full flex flex-col p-4 gap-4">
          <div className="text-secondary-900 font-bold text-lg">Login</div>
          <TextField id="outlined-basic" label="Email" variant="outlined"  value={email} onChange={(e)=> setEmail(e.target.value)} required={true} />
          <TextField id="outlined-basic" type="password" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
          <button onClick={login} className="rounded-2xl border-[1px] border-[#BE6592] flex justify-center items-center w-4/6 p-4 text-secondary-900">
            SIGN IN
          </button>
        </div>
      </div>

      <div className="absolute top-6 left-6 flex items-center justify-center">
        <Link to="/auth">
          <img src={Arrow} />
        </Link>
      </div>
    </div>
  );
};
