// import { useHistory } from 'react-router';
// import {useEffect} from 'react'

// export default function Home() {
//   // const nav = useHistory();
//   // window.location.href='/docs/prompt-intro';
//   // useEffect(()=>{
//   //   window.location.href='/docs/prompt-intro';
//   // },[])
//   return <></>
// }



import React, {useEffect} from 'react';

export default function Home() {
    useEffect(()=>{
    window.location.href='/docs/prompt-intro';
  },[])
  return (
    <div>
      
    </div>
  );
}
