import React, { useEffect, useState } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs({ params }) {

  const { keyword } = params;

    const [gifs, setGifs] =  useState([]);

    useEffect( () => {
      getGifs({ keyword })
        .then(gif => setGifs(gif))
    }, [keyword]) 

    return <div>
      {
        gifs.map( ({title, id, url}) =>
          <Gif 
            key={id}
            id={id}
            title={title} 
            url={url} 
          />
        )
      }
    </div>
}
