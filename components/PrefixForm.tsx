"use client"
import { Input } from "zvijude/form"
import { Btn } from "zvijude/btns"
import { useState } from "react"
import { savePrefixComp } from "./api"

let obj: any = { pref: "", desc: "", suf: [] }

export default function PrefixForm({ cmp }) {
  const [state, setState] = useState(true)
  const render = () => setState(!state)

  function handleAddForm() {
    obj.suf.push("")
    render()
  }

  function handleSaveForm() {
    savePrefixComp(obj)
  }

  return (
    <div>
      <Input lbl='תחילית' defaultValue={obj.pref} onChange={(e) => (obj.pref = e.target.value)} />
      <Input lbl='תיאור' defaultValue={obj.desc} onChange={(e) => (obj.desc = e.target.value)} />
      {obj.suf?.map((el, i) => {
        return (
          <div key={i}>
            <form>
              <Input
                lbl='סופית'
                defaultValue={el}
                onChange={(e) => (obj.suf[i] = e.target.value)}
              />
            </form>
          </div>
        )
      })}
      <Btn lbl='הוסף' onClick={handleAddForm} />
      <Btn lbl='שמור הכל' onClick={handleSaveForm} />
    </div>
  )
}
