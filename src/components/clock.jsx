
import { useEffect, useState } from 'react';

function Clock(){
    
  const [date, setdate] = useState(new Date())
  var [minutes, setmin] = useState(date.getMinutes());
  var [hour, sethour] = useState(date.getHours());
  var [second, setsec] = useState(date.getSeconds());


  useEffect(() => {

    setTimeout(() => {
      setdate(new Date());
      setmin(date.getMinutes());
      sethour((30 * date.getHours()) - 90 + Math.floor(date.getMinutes() / 2));
      setsec(date.getSeconds() );
      console.log( hour+"h",minutes+'m',second+'s',(30 *date.getHours()) - 90 + Math.floor(date.getMinutes()/2),5*second+'deg seconds' )
    }, 1000)

  });





  return (
    <div className="App">
      <div className='circle' >
        <ul className='clock_numbers' >

          <li style={{ "--i": 1 }}>1</li>
          <li style={{ "--i": 2 }}>2</li>
          <li style={{ "--i": 3 }}>3</li>
          <li style={{ "--i": 4 }}>4</li>
          <li style={{ "--i": 5 }}>5</li>
          <li style={{ "--i": 6 }}>6</li>
          <li style={{ "--i": 7 }}>7</li>
          <li style={{ "--i": 8 }}>8</li>
          <li style={{ "--i": 9 }}>9</li>
          <li style={{ "--i": 10 }} >10</li>
          <li style={{ "--i": 11 }} >11</li>
          <li style={{ '--i': 12 }} >12</li>

        </ul>

        <div className='hour' style={{ '--hour': hour }} ></div>
        <div className='minute' style={{ '--min': minutes }} ></div>
        <div className='second' style={{ '--sec': second }} ></div>
      </div>
    </div>
  );

}

export default Clock;