"use client"

import { useState } from "react"
import { saveComp } from "./api"
import { Input } from "zvijude/form"
import { Btn } from "zvijude/btns"

export default function FaqForm({ cmp }) {
  const [state, setState] = useState(true)
  const render = () => setState(!state)

  function handleAddForm() {
    const tmp = { q: "", a: "" }
    cmp.data.push(tmp)
    render()
  }

  function handleSaveForm() {
    saveComp(cmp)
  }

  return (
    <div>
      {cmp.data.map((el, i) => {
        return (
          <form key={i}>
            <Input lbl='שאלה' defaultValue={el.q} onChange={(e) => (el.q = e.target.value)} />
            <Input lbl='תשובה' defaultValue={el.a} onChange={(e) => (el.a = e.target.value)} />
          </form>
        )
      })}
      <Btn lbl='הוסף' onClick={handleAddForm} />
      <Btn lbl='שמור הכל' onClick={handleSaveForm} />
    </div>
  )
}
