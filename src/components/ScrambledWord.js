import React from 'react'
import "./scrambled.css"
import  Scramble  from '../helpers/Scrambled';
import Rows from './Rows';
// <p>{Scramble ({sentenceData})}</p>

export default function ScrambledWord({data}) {
    const sentenceData =data.data.sentence
    const sentenceScrambled = Scramble(sentenceData)
    return (
       <section className="container">
        <aside className="scrambled-word">

            <h1> {sentenceScrambled }</h1>
             <p>Guess the sentence! Start typing.</p>
            <p>The yellow blocks are meant for spaces</p>
            <h2> Score: 0</h2>
            <Rows data={data}/>
            <div className="blocks"></div>

        </aside>
        </section>
    )
}
