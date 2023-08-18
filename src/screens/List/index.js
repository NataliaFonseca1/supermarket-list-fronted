
import './index.css';
import { useState, useEffect } from 'react';
import { getList } from './../../services/api/request';

import { Button, ListRender, Loader, Modal } from '../../components';

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const loadListItems = async () => {
    const result = await getList();
   
    setListData(result);
   setLoading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);
const onClickAddButton = () =>{
  setModalVisible(true)
  setSelectedItem(null);
};
const onCloseModal = () =>{
  setModalVisible(false);
  loadListItems();
  setSelectedItem(null);
}
const onEditItem = (item) =>{
setSelectedItem(item);
setModalVisible(true);
}


  return (
    <div className='list-screen-container'>
      <div className='list-screen-content-container'>
        <div className='list-screen-header'>
         <div className='list-screen-title-container' >
         <img className="logo-image " src="Imagens/logo.png" alt="supermarket-list-logo" />
          <h1 className='list-screen-header-title'>Lista Supermercado</h1>
         </div>
         <div>
          <Button onClick={onClickAddButton}className="list-screen-header-button-container">Adicionar</Button>
          </div>
        </div>
        <div className='list-screen-list-container'>
          {
            loading ? <Loader/> : <ListRender onEdit={onEditItem} list={listData}/>
          }
        </div>
      </div>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal}/>}
    </div>
  );
};