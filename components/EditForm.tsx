"use client"
import { Input } from "zvijude/form"
import { Btn } from "zvijude/btns"
import { useState } from "react"
import { saveComp } from "./api"
import { UploadImg } from "./upload"

export default function EditForm({ cmp }) {
  const [state, setState] = useState(true)
  const render = () => setState(!state)

  function handleAddForm() {
    const tmp = { name: "", link: "", file: {} }
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
            <Input lbl='שם' defaultValue={el.name} onChange={(e) => (el.name = e.target.value)} />
            <Input
              lbl='קישור'
              defaultValue={el.link}
              onChange={(e) => (el.link = e.target.value)}
            />
            <UploadImg obj={el} />
          </form>
        )
      })}
      <Btn lbl='הוסף' onClick={handleAddForm} />
      <Btn lbl='שמור הכל' onClick={handleSaveForm} />
    </div>
  )
}
