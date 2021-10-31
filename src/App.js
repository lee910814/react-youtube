import React, {useEffect, useState} from 'react';
import './App.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostpopular&maxResults=25&key=AIzaSyAxr5fcog2NjpP1vJZp9H2V68AG52fggM4", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);

  return (
    <div className="App">
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
