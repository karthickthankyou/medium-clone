import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const HScroll = () => {
  const [value, setValue] = useState('')
  console.log(value)
  return <ReactQuill theme='snow' value={value} onChange={setValue} />
}

export default HScroll
