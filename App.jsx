import { useState } from 'react'
import { memeTypes } from './memeTypes'
import './App.css'

function App() {
  const [selectMeme, setSelectMeme] = useState("")
  const [topText, setTopText] = useState("")
  const [bottomText, setbottomText] = useState("")
  
  const changeMeme = (e) =>{
    setSelectMeme(e.target.value)
  }

  const handleCangeTopText = (e)=>{
    setTopText(e.target.value)
  }

  const handleChangeBottomText = (e)=>{
    setbottomText(e.target.value)
  }


  return (
    <>
      <div className='allPage'>
      <div>
        <h1>Meme Generate</h1>
        <h3>Select meme</h3>
        <select value={selectMeme} onChange={changeMeme}>
        {memeTypes.map((memeType) => (
              <option key={memeType.value} value={memeType.value}>
                {memeType.label}
              </option>
            ))}
        </select>
          <br/>
          <h3>Top text</h3>
          <input type='text' value={topText} onChange={handleCangeTopText} placeholder='Enter top ext'/>
          <br/>
          <h3>Bottom text</h3>
          <input type="text" value={bottomText} onChange={handleChangeBottomText} placeholder="Enter bottom text"/>
          <br/>
         
      </div>
      <div>
        
      </div>
      <img src={`https://apimeme.com/meme?meme=${selectMeme}&top=${topText}&bottom=${bottomText}`} alt={'Meme Generate'}/>
     </div>
    </>
  )
}

export default App
