import React from 'react'
import "./rows.css"


export default function Rows({data}) {
    console.log(data)
    const sentence= data.data.sentence;
   const  splitSentence= sentence.split("")
   console.log(splitSentence, " blallal")
function processSentence(){
    const blockNum= sentence.length
    const splitAray = sentence.split("")
    const spaceIndexes =[]
    for (let i = 0; i < blockNum; i++) {
        if (sentence[i] === ' ') {
          spaceIndexes.push(i);
        }
      }
      
    console.log(blockNum, "blockNum")
    console.log(splitAray,"spliting")
    console.log (spaceIndexes,"spaceIndex") 
 return splitAray

}
    processSentence()
    return (
        <div className="charContainer">
           {splitSentence.map( (item, i)=>{

                if (item ===" ") {
                    
                  return <>
                      <input className="spaceBlock" key={i}></input><br/>
                      </>
                   
                  
                } else {
                   return <input className="charBlock" key={i}></input>
                }
           }
           
            )
           }
        </div>
    )
}
