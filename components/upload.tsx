'use client'

import { useState } from 'react'
import { uploadMedia } from 'zvijude/cloudinary/upload'
import Icon, { IconNames } from 'zvijude/icon'
import { twMerge } from 'tailwind-merge'

export function UploadImg({ obj, img = '', className, accept, getMedia, name = 'img' }: UploadBtnProps) {
  const placeholder = 'https://picsum.photos/id/100/2000/1340'
  const [currentImg, setCurrentImg] = useState(obj?.img || img)

  async function onChange(e) {
    const urls = (await uploadMedia(e)) as string[]
    if (getMedia) getMedia(urls)
    if (obj) obj.img = urls[0]
    setCurrentImg(urls[0])
  }

  return (
    <label
      className={twMerge(
        'size-28 shadow relative cursor-pointer hover:bg-solid/95 transition-all hover:shadow-lg active:shadow-none disabled:pointer-events-none disabled:opacity-50',
        className
      )}
    >
      <img src={currentImg || placeholder} alt='' className='size-full brightness-75 rounded-md' />
      <Icon name='plus' className='abs-center size-7 bg-white' />
      <input type='file' onChange={onChange} accept={`${accept}/*`} className='hidden' />
      <input type='text' className='hidden' defaultValue={currentImg} name={name} />
    </label>
  )
}

type UploadBtnProps = {
  obj?: { img: string; [key: string]: any }
  img?: string
  name?: string
  className?: string
  accept?: 'image' | 'video' | 'audio'
  lbl?: string
  icon?: IconNames
  getMedia?: (urls: string[] | null) => void
}

type UploadMultiImgsProps = {
  data?: any
  onFinish?: ((...args: any[]) => any) | null
  size?: number
}
