import {ListCard } from '../ListCard'
import "./index.css"
export const ListRender = ({list, onEdit}) =>{
  if(list?.length === 0){
    return (
      <h3>Sua lista está vazia, clique no botão adicionar para incluir novos itens.</h3>

    );
  }


  return (
    <div className='list-render-container'>
      {
        list.map( 
          (item)=> (
          <ListCard onClick={onEdit} key={item?._id} item={item}/>
          ))
      }

    </div>
  );
  };