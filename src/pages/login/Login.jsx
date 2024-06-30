// @ts-nocheck

import Label from "../../Ui/Label";
import Input from "../../Ui/Input";
import Button from "../../Ui/Button";
import LoginTitle from "./login title/LoginTitle";
import { useForm } from "react-hook-form";
import ErrMessage from "../../errors/Error input message/ErrMessage";
import { Login_form } from "../../data/login form data/LoginData";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation/validation";
import { axiosInstance } from "../../config/axios.config";
import toast from "react-hot-toast";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTokens } from "../../app/features/login/login";

const Login = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { status, data: logedData } = await axiosInstance.post(
        "/api/auth/login",
        data
      );

      if (status === 200) {
        toast.success("Success login you will go to home page !", {
          duration: 1000,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
      localStorage.setItem("logged", JSON.stringify(logedData));
      dispatch(getTokens(logedData));

      setTimeout(() => {
        localStorage.removeItem("logged");
        
      }, 3600000);

      setTimeout(() => {
        location.replace("/");
      }, 1200);
    } catch (error) {
      // console.log(error.response?.data?.msg , 'm err');
      toast.error(`${error.response?.data?.msg}`, {
        duration: 1000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  /*  ================ RENDERING FORM ================ */
  const login_render = Login_form.map(
    ({ id, name, placeholder, type, validation }, idx) => (
      <div key={idx} className="flex gap-4 flex-col">
        <Label htmlFor={id}> {name} : </Label>
        <Input
          // @ts-ignore
          type={type}
          id={id}
          placeholder={placeholder}
          // @ts-ignore
          {...register(name, validation)}
        />
        {errors[name] && <ErrMessage msg={errors[name]?.message} />}
      </div>
    )
  );
  return (
    <div className="bg-[#232333] h-screen flex justify-center items-center ">
      <div className="flex rounded-lg flex-col justify-center items-center p-10 space-y-5   bg-[#2B2C40]">
        <LoginTitle />

        <form className="w-96" onSubmit={handleSubmit(onSubmit)}>
          {login_render}
          <div className="flex justify-center items-center space-x-3 ">
            <Button
              loading={loading}
              styles={`w-96 bg-[#5F61E6] text-white text-lg  py-3 mt-3 te`}
            >
              {" "}
              Login{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
