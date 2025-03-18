import { Cats1 } from "@/components/Cats"
import EditForm from "@/components/EditForm"
import Faq1 from "@/components/Faq1"
import FaqForm from "@/components/FaqForm"
import { Prefix } from "@/components/Prefix"
import PrefixForm from "@/components/PrefixForm"
import { Testamony } from "@/components/Testamony"
import TestamonyForm from "@/components/TestamonyForm"
import { db } from "@/db"

export default async function Home() {
  let catsData = await db("comps").where({ id: 33 }).first()
  if (!catsData) {
    catsData = { data: { pref: "", desc: "", suf: [] }, name: "prefix" }
  }

  return (
    <div>
      {/* <Cats1 cmp={catsData} />
      <EditForm cmp={catsData} /> */}
      {/* <Faq1 cmp={catsData} />
      <FaqForm cmp={catsData} /> */}
      {/* <Testamony cmp={catsData} />
      <TestamonyForm cmp={catsData} /> */}
      <Prefix cmp={catsData} />
      <PrefixForm cmp={catsData} />
    </div>
  )
}
