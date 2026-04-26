import {Container , Grid ,Stack,Button,Textarea, TextInput} from '@mantine/core';
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
   },

];
// const kare = (sayi) =>  sayi * sayi;

const App = () => {
  const [title, setTitle] = useState("");
  const [paragraf, setParagraf] = useState("");
  const [list, setList] = useState( arr);
  const [Lesson, setLesson] = useState( []);
  const click = () => {
setTitle("");
setParagraf("");

    const copyList = [...list];
    copyList.push({
      id:5,
      title, 
      par: paragraf
    });
    setList(copyList);
  };
  return (
    <Container size ="900">
      <h1>KART OLUSTURMA PROGRAMI</h1>
      <Stack>
      <TextInput label="Başlık" placeholder="BAŞLIK YAZINIZ " 
        value={title}  
        onChange={(e) => setTitle(e.target.value)} />
      <Textarea  placeholder="Paragraf yaziniz " label="Paragraf"
       value={paragraf}
        onChange={(e) => setParagraf(e.target.value)}
       label="Paragraf"
       withAsterisk
      />
      
      <Button variant="outline" onClick= {click}>
       kart oluştur
      </Button>
        </Stack>
      <h2 >Kartlar:</h2>
      
      <Grid>
        {list.map(({ par, title, }, i) => (
          <Grid.Col span={3}>
          <Card 
          key={`index-${i}`}
           par={par} title={title}
            lesson={Lesson} 
            i= {i}
             />
             </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default App;