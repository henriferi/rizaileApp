// src/components/ShinyText.tsx
import React from 'react'
import '../assets/styles/components/pages/ShinyText.scss';

type Props = {
  text: string
}

const ShinyText: React.FC<Props> = ({ text }) => {
  return <h2 className="shiny-text">{text}</h2>
}

export default ShinyText
