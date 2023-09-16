import { Container, Switch } from "@mui/material";
import BasicAccordion from "./components/BasicAccordion";
import "./style.css";
import { Height, Label } from "@mui/icons-material";
import { useState } from "react";


function App() {
  const [heightState, setheightState] = useState("40px");
  const setFunc = () => {
    if(heightState === "40px"){
      setheightState("100px")
    }else{
      setheightState("40px")

    }
  }
  return (
    <>
    <Container>
    <div className="ic">

    <BasicAccordion content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."/>
    <BasicAccordion content={<><Switch  defaultChecked onChange={() => setFunc()}/></>}/>
    </div>
    <div className="hello" style={{height:heightState , backgroundColor:"orange"}}>
      hello
    </div>
    </Container>
    </>
  );
}

export default App;
