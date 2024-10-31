"use server";

import { FieldValues } from "react-hook-form";

export const loginUser = async (data: FieldValues) => {
  const url = process.env.NEXT_PUBLIC_BACKEND_API_URL
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const userInfo = res.json();
  return userInfo;
};