import React from 'react';

interface ItemType {
  id: number;
  title: string;
  completed: boolean;
}
interface FormProps {
  item: ItemType;
}

const Form: React.FC<FormProps> = ({ item }) => {
  return (
<div
  className={`flex flex-row justify-between py-0.5 ${item.id % 2 === 0 ? 'bg-green-300' : 'bg-red-300' }`}>
  <div>Id: {item.id}</div>
  <div>Title: {item.title}</div>
  <div>Complete: {item.completed ? 'Yes' : 'No'}</div>
</div>
  );
}

export default Form;