import TopSection from './componens/TopSection/TopSection';
import HomesGuestloves from './componens/HomesGuestLoves/HomesGuestLoves';
import React from 'react';
import { useState } from 'react';
function App() {
  const[dist,setDist]=useState('')

  const handleDistChange=(location)=>{
    setDist(location)
  }

  return (
    <div>
      <TopSection onChange={handleDistChange}/>
      <HomesGuestloves dist={dist}/>
    </div>
  );
}

export default App;
