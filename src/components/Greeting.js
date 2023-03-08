import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { retrieveMessages } from "../redux/messages/messages";

export default function Greeting(){
  const   {messages}  = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(retrieveMessages())
  },[dispatch])
  return (
    <div>
      <h2>Messages</h2>
      <h2>{messages}</h2>
    </div>
  )
}