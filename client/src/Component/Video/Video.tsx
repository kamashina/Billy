import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import "./Video.css"

const Video: React.FC = () => {
    const [url, setUrl] = useState<string>('https://www.youtube.com/watch?v=BqmYjcvFxcw')
const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setUrl(e.target.value)
}
  return (
    <div>
    <input
    onChange={handleUrlChange} 
    type="text" 
    placeholder ="Ссылка на видео"
    value={url}
    className ="inpurl"
    />
    <div className="video">
    <ReactPlayer 
    url ={url}
    controls ={true}
    width = "960px"
    height = "503px"
    loop ={true}
    />
    </div>
    </div>
  )
}

export default Video