"use server";

const { revalidatePath } = require("next/cache");

export async function revalidateAction(slug) {
  revalidatePath(`/tracks/${slug}`);
}
