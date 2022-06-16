
import { useState, useEffect } from 'react';
import  { getSentences } from '../utils/API';
import ScrambledWord from './ScrambledWord';

function SentencesContainer() {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
          const response = await getSentences();
          console.log(response)
          if (!response.ok) {
            throw new Error('something went wrong!');
          }
          const getResponse = await response.json()
          
          setData(getResponse)
          setLoading(false)
    
        } catch (err) {
          console.error(err);
        }
      }
      console.log(data)
      // console.log(data.data.sentence)

 
      useEffect(() => {
        fetchData();    
      }, []);


      

      if (loading) return (
        <h2>LOADING...</h2>
      )
    return (
        <div >
          <h1>yesssssss</h1>
           <ScrambledWord data={data}/> 
        </div>
    )
}

export default SentencesContainer
