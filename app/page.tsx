import { Cats1 } from "@/components/Cats"
import EditForm from "@/components/EditForm"
import Faq1 from "@/components/Faq1"
import FaqForm from "@/components/FaqForm"
import { db } from "@/db"

export default async function Home() {
  const catsData = await db("comps").where({ id: 1 }).first()

  return (
    <div>
      {/* <Cats1 cmp={catsData} />
      <EditForm cmp={catsData} /> */}
      <Faq1 cmp={catsData} />
      <FaqForm cmp={catsData} />
    </div>
  )
}
