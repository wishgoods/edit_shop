"use server"
import { db } from "@/db"
import { revalidatePath } from "next/cache"

export async function saveComp(cmp) {
  await db("comps")
    .update({ name: cmp.name, data: JSON.stringify(cmp.data) })
    .where({ id: cmp.id })
  revalidatePath("/")
}
