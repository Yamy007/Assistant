import  { useState, useEffect } from "react";
import "../../layouts/style.scss";
import Logo from "../../assets/svg/logo.svg";
import Arrow from "../../assets/svg/arrow_left.svg";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import {IRegister, ILogin} from "../../interface/auth/auth"
import {authService} from "../../service/authService"
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";


export const Registration = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const register = async () => {
    const data:IRegister = {
      email,
      password,
      profile:{
        name: name.split(' ')[0],
        surname: name.split(' ')[1]
      }
    }
    const res = await authService.register(data)
    if (res.status == 201){
      const data:ILogin = {email, password}
      const res =  await authService.login(data)
      if (res.status == 200){
        cookies.set("access", res?.data.access);
        cookies.set("refresh", res?.data.refresh);
        navigate('/')
        window.location.reload(); 

      }
    }
  }

  return (
    <div className="w-screen h-screen color-bg flex flex-col justify-evenly items-center">
      <div className="flex flex-col justify-center items-center gap-3 h-3/6">
        <Link to={"/auth"}>
          <img src={Logo} />
        </Link>
        <div className="text-primary-100 text-center">
          Live Easy, Stay <br /> in Control
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center w-full gap-4 bg-white h-3/6 rounded-tr-[20%] transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-full flex flex-col p-4 gap-4">
          <div className="text-secondary-900 font-bold text-lg">Registration</div>
          <TextField id="email" autoComplete="off" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
          <TextField id="name"  autoComplete="off" label="Name & Surname" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required={true}/>
          <TextField id="password"  autoComplete="off" label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
          <button onClick={register} className="rounded-2xl border-[1px] border-[#BE6592] flex justify-center items-center w-4/6 p-4 text-secondary-900">
            SIGN UP
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
