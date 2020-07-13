import React,{useEffect,useState} from 'react';
import Showmovies from './Showmovies';


export default function Home(props) {
    const [lables,setlables]= useState(props.text) ;
    const [count,setcounts]=useState(0);
    const [Data, setDate_json] = useState([]);
    
    useEffect(() => {
      wait();
    }, [count]
    )
  
    function wait() {
      console.log('api 调用' + count);
  
      var url = "http://localhost:8000";
      fetch(`${url}/${lables}`)
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
      setcounts(0);
    }
  
    
    return (
        <div  >
          <h2 style={{color:"white"}} >{props.text}</h2>
      { Data.length > 0 ? <Showmovies data={Data} ></Showmovies> : <p> loading</p>}
      </div>
    );
  }