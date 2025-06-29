// src/components/ShinyText.tsx
import React from 'react'
import '../assets/styles/components/pages/ShinyText.scss';

type Props = {
  text: string
}

const ShinyText: React.FC<Props> = ({ text }) => {
  return <span className="shiny-text">{text}</span>
}

export default ShinyText
