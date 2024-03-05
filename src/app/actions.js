"use server";

import { getClient } from "@/lib/graphql/client";
import { WHO_I_AM } from "@/lib/graphql/querys";
import { cookies } from "next/headers";

const { revalidatePath } = require("next/cache");

export async function revalidateAction(slug) {
  revalidatePath(`/tracks/${slug}`);
}

export async function revalidateRouteAction(path) {
  revalidatePath(path);
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
  const token = await getToken();
  try {
    const user = await getClient().query({
      query: WHO_I_AM,
      context: {
        headers: { authorization: `Bearer ${token}` },
      },
    });

    return user;
  } catch (error) {
    return null;
  }
}
