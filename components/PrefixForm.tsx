"use client"
import { Input } from "zvijude/form"
import { Btn } from "zvijude/btns"
import { useState } from "react"
import { savePrefixComp } from "./api"

export default function PrefixForm({ cmp }) {
  const [state, setState] = useState(true)
  const render = () => setState(!state)

  function handleAddForm() {
    cmp.data.suf.push("")
    render()
  }

  function handleSaveForm() {
    savePrefixComp(cmp)
  }

  return (
    <div>
      <Input
        lbl='תחילית'
        defaultValue={cmp.data.pref}
        onChange={(e) => (cmp.data.pref = e.target.value)}
      />
      <Input
        lbl='תיאור'
        defaultValue={cmp.data.desc}
        onChange={(e) => (cmp.data.desc = e.target.value)}
      />
      <form>
        {cmp.data.suf?.map((el, i) => {
          return (
            <div key={i}>
              <Input
                lbl='סופית'
                defaultValue={el}
                onChange={(e) => (cmp.data.suf[i] = e.target.value)}
              />
            </div>
          )
        })}
        <Btn type='button' lbl='הוסף' onClick={handleAddForm} />
        <Btn lbl='שמור הכל' onClick={handleSaveForm} />
      </form>
    </div>
  )
}
