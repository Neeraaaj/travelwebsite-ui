import Image from 'next/image'
import React from 'react'

type ButtonPops = {
    type: 'button' | 'submit',
    title: string,
    icon?: string,
    variant: string
}

const Button = ({ type, title, icon, variant }: ButtonPops) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${variant}`}
        type='button'
    >
        {icon && <Image src={icon} width={24} height={24}
         alt={title} />}
        <label className='bold-16 whitespace-nowrap'>{title}</label>
    </button>
  )
}

export default Button