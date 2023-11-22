// import './App.css';
// import Form from './Form';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// interface ItemType {
//   id: number;
//   title: string;
//   completed: boolean;
// }

// function App() {
//   const [showData, setData] = useState<ItemType[]>([]);

//   const [search, setSearch] = useState<number | undefined>();

//   console.log(search)
//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/todos/')
//       .then((response) => {
//         setData(response.data);
//         console.log(showData);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className='max-w-3xl mx-auto pb-3'>
//       <h1 className='text-center text-2xl font-semibold py-4'>Show API Data</h1>
//       <input placeholder='search.. .' onChange={(e) => setSearch(Number(e.target.value))} />
//       <hr />
//       <div className="flex justify-between text-lg font-semibold pt-3 pb-1">
//         <div className="id"><h1>Id</h1></div>
//         <div className="title"><h1>Title</h1></div>
//         <div className="useName"><h1>Completed</h1></div>
//       </div>
//       <ul>
//         {showData.map((show) => (
//             <Form key={show.id} item={show} />
//         ))}
//       </ul> 
  
    
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface AppState {
  balance: number;
}

const App = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state: AppState) => state.balance);

  const handleDeposit = () => {
    dispatch({ type: 'deposit', payload: 100 });
  };

  const handleWithdraw = () => {
    dispatch({ type: 'withdraw', payload: 100 });
  };

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='flex justify-between mt-10 text-lg'>
        <div className='flex gap-8 text-center'>
          <div
            className='bg-blue-400 w-36 cursor-pointer'
            onClick={handleDeposit}
          >
            Add money
          </div>
          Update balance
          <div
            className='bg-purple-400 w-36 cursor-pointer'
            onClick={handleWithdraw}
          >
            Withdraw money
          </div>
        </div>
        <div>Total Balance: {balance}</div>
      </div>
    
    </div>
  );
};

export default App;
