import React from 'react';

interface ItemType {
  id: number;
  title: string;
  completed: boolean;
}

function Form(props: { item: ItemType }) {

  return (
<div
  className={`flex flex-row justify-between py-0.5 ${props.item.id % 2 === 0 ? 'bg-green-300' : 'bg-red-300' }`}>
  <div>Id: {props.item.id}</div>
  <div>Title: {props.item.title}</div>
  <div>Complete: {props.item.completed ? 'Yes' : 'No'}</div>
</div>
  );
}

export default Form;