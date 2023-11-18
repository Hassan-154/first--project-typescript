import './App.css';
import Form from './Form';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface ItemType {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [showData, setData] = useState<ItemType[]>([]);

  const [search, setSearch] = useState<number | undefined>();

  console.log(search)
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => {
        setData(response.data);
        console.log(showData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='max-w-3xl mx-auto pb-3'>
      <h1 className='text-center text-2xl font-semibold py-4'>Show API Data</h1>
      <input placeholder='search.. .' onChange={(e) => setSearch(Number(e.target.value))} />
      <hr />
      <div className="flex justify-between text-lg font-semibold pt-3 pb-1">
        <div className="id"><h1>Id</h1></div>
        <div className="title"><h1>Title</h1></div>
        <div className="useName"><h1>Completed</h1></div>
      </div>
      <ul>
        {showData.map((show) => (
         
          show.id == search && (
            <Form key={show.id} item={show} />
          )
        ))}
      </ul>
    </div>
  );
}

export default App;
