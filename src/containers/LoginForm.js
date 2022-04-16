import React from "react";
import { PasswordInput, SubmitButton, TextInput } from "@components/forms";
import { useAuth } from "@hooks/useAuth";
import { useForm } from "react-hook-form";

export function LoginForm() {
  const { login, isLoading } = useAuth();
  const { control, handleSubmit } = useForm();

  return (
    <>
      <TextInput label="Username" control={control} name="username" />
      <PasswordInput
        label="Password"
        showIsRequired={false}
        name="password"
        control={control}
      />
      <SubmitButton
        onPress={handleSubmit(login)}
        status={isLoading ? "loading" : "idle"}
      >
        Login
      </SubmitButton>
    </>
  );
}
