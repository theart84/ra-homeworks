import React, {useState} from 'react';
import {fakeData} from "./fakeData";
import VideoList from "./components/VideoList";

export default function App() {
  const [list, setList] = useState(fakeData);

  return (
    <VideoList list={list}/>
  );
}
