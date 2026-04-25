import './App.css';
import Card from './components/Card';
import  { useState } from 'react';

let arr = [
  {
    id: 1,
     title: "dağ 1", 
    par: "açıklama 1"
   },
  { 
    id: 2,
    title: "dağ 2", 
    par: "açıklama 2"
   },
  { 
    id: 3,
    title: "dağ 3", 
    par: "açıklama 3"
   },
  { 
    id: 4,
    title: "dağ 4", 
    par: "açıklama 4"
   }
];
// const kare = (sayi) =>  sayi * sayi;

const App = () => {
  const [Lesson, setLesson] = useState( 11);

  return (
    <div>
      <h1>BASLIK</h1>
      <h2> ders {Lesson}</h2>
      <button
       onClick={() => {
        setLesson(Lesson + 1);
       }}>
        ders arttır 
      </button>
       <button
       onClick={() => {
        setLesson(Lesson - 1);
       }}>
        ders azalt 
      </button>
       <button
       onClick={() => {
        setLesson(1000);
       }}>
        1000
      </button>
      <p>baslangiç</p>

      <div className="Cards">
        {arr.map(({ par, title, }, i) => (
          <Card key={`index-${i}`} par={par} title={title} lesson={Lesson} i= {i} />
        ))}
      </div>
    </div>
  );
}

export default App;