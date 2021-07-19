import React, { useDebugValue, useState } from "react";
import data from '../../mock/youtube-video-mock.json'
import CardVideo from '../Card/videoCard'
import './style.css';

export default function MainView(){
    console.log(data.items);
    return (
        <div className ="main-view">
            <h1 className="main-text">Welcome to the Challenge!</h1>
            <div className='cards'>
                {data.items.map(data =>{
                    console.log(data);
                    return (<CardVideo
                        name={data.snippet.title}
                        description={data.snippet.description}
                        image={data.snippet.thumbnails.high.url}
                    ></CardVideo>
                    )
                })}
            </div>
        </div>
    );
}