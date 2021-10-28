import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Provider/Auth";

interface UserData {
  email: string;
  password: string;
}

export const Login = () => {
  const { SignIn } = useAuth();

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Informe seu e-mail para efetuar o login")
      .email("Confira seu email de login"),
    password: yup.string().required("Digite sua senha para efetuar o login"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(formSchema),
  });

  console.log(errors);

  const handleLogin = (data: UserData) => {
    SignIn(data);
  };

  return (
    <div>
      <img />
      <form onSubmit={handleSubmit(handleLogin)}>
        <label>Email</label>
        <input {...register("email")} />
        <label>Password</label>
        <input {...register("password")} />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
