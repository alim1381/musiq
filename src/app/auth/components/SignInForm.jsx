"use client";
import { Button, CircularProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "@/lib/graphql/mutation";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { setLoginAction } from "@/app/actions";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const backUrl = searchParams.get("backUrl");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [send, setSend] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [sendDatas, { data, loading, error }] = useMutation(SIGN_IN, {
    variables: { username, password },
  });

  useEffect(() => {
    if (send) {
      sendDatas();
    }
    setSend(false);
  }, [send]);

  useEffect(() => {
    if (data) {
      setLoginAction(data.signIn.token);
      if (backUrl) {
        router.replace(backUrl);
      } else {
        router.replace("/");
      }
    }
  }, [data]);

  const onSubmit = (data) => {
    const { ...userData } = data;
    setUsername(userData.username);
    setPassword(userData.password);
    setSend(true);
  };

  return (
    <>
      {data?.signIn?.token && (
        <Alert severity="success">Successful registration in progress...</Alert>
      )}
      {error?.message && <Alert severity="error">{error?.message}</Alert>}

      <form className=" relative" onSubmit={handleSubmit(onSubmit)}>
        {loading && (
          <div className=" absolute h-full w-full top-0 right-0 flex justify-center items-center backdrop-blur-sm z-50">
            <CircularProgress color="success" />
          </div>
        )}
        <TextField
          margin="normal"
          {...register("username", { required: "This field is required" })}
          label={
            errors.username
              ? `Username * ${errors.username.message}`
              : "Username"
          }
          error={errors.username ? true : false}
          fullWidth
          autoFocus
        />
        <TextField
          margin="normal"
          {...register("password", { required: "This field is required" })}
          label={
            errors.username
              ? `Password * ${errors.username.message}`
              : "Password"
          }
          error={errors.username ? true : false}
          type="password"
          fullWidth
          autoComplete="1111"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </form>
    </>
  );
}

export default SignInForm;
