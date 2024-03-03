"use server";

import { getClient } from "@/lib/graphql/client";
import { WHO_I_AM } from "@/lib/graphql/querys";
import { cookies } from "next/headers";

const { revalidatePath } = require("next/cache");

export async function revalidateAction(slug) {
  revalidatePath(`/tracks/${slug}`);
}

export async function setLoginAction(token) {
  cookies().set("token", token);
  revalidatePath("/");
}

export async function getToken() {
  const token = cookies().get("token")?.value;
  return token;
}

export async function whoIAm() {
  try {
    const user = await getClient().query({
      query: WHO_I_AM,
    });
    console.log(user);
  
    return user;
  } catch (error) {
    return null
  }
}
