import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Bar from './Bar';
import Showmovies from './Showmovies';
import SortTab from './Tab';
import Detail from './Detail';
import Bottom from './Bottom';
import Path from './Path';


function App() {
  const [input_value, setinput_value] = useState("0");
  const [count, setcount] = useState(0);
  const [Data, setDate_json] = useState([]);

  const [count2, setcount2] = useState(0);
  const [Data2, setDate_json2] = useState([]);


  useEffect(() => {
    wait();
  }, [count]
  )

  function wait() {
    console.log('api 调用' + count);

    var url = "http://localhost:8000";
    fetch(`${url}/${input_value}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          alert(res.status);
          return;
        }
      })
      .then(data => { setDate_json(data); }
      );
    setcount(0);
  }


  useEffect(() => {
    wait2();
  }, [count2]
  )

  function wait2() {
    console.log('api 调用' + count);

    var url = "http://localhost:8000";
    fetch(`${url}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          alert(res.status);
          return;
        }
      })
      .then(data => { setDate_json2(data); }
      );
    setcount2(0);
  }


  const submit = () => {
    console.log("submit is ok");
    setinput_value(input_value);
    setcount(1);
    

  };

  
    return (
      <div className="App">
        

        <Router>
        <Bar setinput_value1={setinput_value} input={input_value} submit={submit} ></Bar>
          <switch>

            <Route exact path='/' children={<Home data={Data2} ></Home>} />


            {Data2.map((item) =>

              <Route path={`/${item.title}`} children={<Detail item={item}></Detail>} />

            )
            }
            {['Top_Rated_Movies', 'Most_Popular_Movies', 'Coming_Soon', 'Release_Calendar'].map((text, index) => {
             
              return(
              <Route path={`/${text}`} children={<Path  text={text}  />  } />
            )})}

            <Route path={`/search`} children={<>
            <h2 style={{color:'white'}} >  Result : </h2>
            <Showmovies data={Data} /></>} />

          </switch>

        </Router>
        <Bottom></Bottom>
      </div>
    );
  }



function Home(props) {
  const Data = props.data;
 
  return (
    <>
   
      <div>

        <h2 style={{ fontFamily: "Roboto", fontSize: '1.5rem', fontWeight: '600', color: 'yellow' }}> Recommendations  </h2>
        {Data.length > 0 ?

          <>

            <Showmovies data={Data} ></ Showmovies>
            <br></br>
          </>

          : <p> loading</p>}
      </div>

      <SortTab Data={Data}> </SortTab>
    </>
  )
}


export default App;
