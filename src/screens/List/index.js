
import './index.css';
import { useState, useEffect } from 'react';
import { getList } from './../../services/api/request';

import { Button, ListRender, Loader } from '../../components';

export const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);

  const loadListItems = async () => {
    const result = await getList();
    console.log({ result });
    setListData(result);
   setLoading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);

  return (
    <div className='list-screen-container'>
      <div className='list-screen-content-container'>
        <div className='list-screen-header'>
         <div className='list-screen-title-container' >
         <img className="logo-image " src="Imagens/logo.png" alt="supermarket-list-logo" />
          <h1 className='list-screen-header-title'>Lista Supermercado</h1>
         </div>
         <div>
          <Button className="list-screen-header-button-container">Adicionar</Button>
          </div>
        </div>
        <div className='list-screen-list-container'>
          {
            loading ? <Loader/> : <ListRender list={listData}/>
          }
        </div>
      </div>
    </div>
  );
};