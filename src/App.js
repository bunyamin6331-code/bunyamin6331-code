import {Container , Grid ,Stack,Button,Textarea, TextInput} from '@mantine/core';
import './App.css';
import Card from './components/Card';
import  { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState("");
  const [paragraf, setParagraf] = useState("");
  const [list, setList] = useState([
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
  ]);
  const click = () => {
setTitle("");
setParagraf("");
setList([
  ...list,
    {
      id:5,
      title, 
      par: paragraf
    },
    ]);
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
          <Grid.Col  key={`index-${i}`} span={3}>
          <Card 
           par={par}
            title={title}
            i= {i}
             />
             </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default App;