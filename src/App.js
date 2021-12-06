import Section from "./views/Section";
import React, { Suspense } from 'react';


function App() {
  return (
    // <Suspense fallback={(<div>Loading...</div>)}>
    //   <Section/>
    // </Suspense>
    <React.StrictMode>
    <Section/>
    </React.StrictMode>
  );
}

export default App;
