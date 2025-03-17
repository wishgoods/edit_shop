"use client"
import { Input } from "zvijude/form"
import { Btn } from "zvijude/btns"
import { useState } from "react"
import { saveComp } from "./api"
import { UploadImg } from "./upload"

const arr: any = []

export default function TestamonyForm({ cmp }) {
  const [state, setState] = useState(true)
  const render = () => setState(!state)

  function handleAddForm() {
    const tmp = {}
    cmp.data.push(tmp)
    render()
  }

  function handleSaveForm() {
    saveComp({ id: 24, name: "Tstmny", data: cmp.data })
  }

  return (
    <div>
      {cmp?.data.map((el, i) => {
        return (
          <form key={i}>
            <UploadImg obj={el} />
            <Input lbl='שם' defaultValue={el.name} onChange={(e) => (el.name = e.target.value)} />
            <Input
              lbl='תפקיד'
              defaultValue={el.role}
              onChange={(e) => (el.role = e.target.value)}
            />
            <Input lbl='טקסט' defaultValue={el.text} onChange={(e) => (el.text = e.target.value)} />
          </form>
        )
      })}
      <Btn lbl='הוסף' onClick={handleAddForm} />
      <Btn lbl='שמור הכל' onClick={handleSaveForm} />
    </div>
  )
}
