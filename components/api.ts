"use server"
import { db } from "@/db"
import { revalidatePath } from "next/cache"

export async function saveComp(cmp) {
  if (!cmp.id) await db("comps").insert({ name: cmp.name, data: JSON.stringify(cmp.data) })
  else
    await db("comps")
      .update({ data: JSON.stringify(cmp.data) })
      .where({ id: cmp.id })

  revalidatePath("/")
}

export async function savePrefixComp(cmp) {
  if (!cmp.id) await db("comps").insert({ name: "prefix", data: JSON.stringify(cmp.data) })
  else
    await db("comps")
      .update({ data: JSON.stringify(cmp.data) })
      .where({ id: cmp.id })

  revalidatePath("/")
}
