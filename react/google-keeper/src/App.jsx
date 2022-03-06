import React from "react";
import Editor from "./Component/Editor";
import Header from "./Component/Header";
import Mynote from "./Component/Mynote";

const App=()=>{
    return(<>
        <Header/>
        <Editor />
        <Mynote />
    </>)
}

export default App;