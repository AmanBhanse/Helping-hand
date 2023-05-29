import React, { useState, useEffect } from 'react';
import './AddItemsSublocation.scss';
import { MdPlaylistAdd } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { addItems, removeItem } from './itemsSlice';
import Tag from '../Tag/Tag';

const AddItemsSublocation = () => {
  const itemsMeta = useSelector((state) => {
    return state.itemsStore.itemsMeta;
  });
  const dispatch = useDispatch();
  const [inputItem, setInputItem] = useState('');
  const [inputPrice, setInputPrice] = useState(0);

  const onSubmitItemDetails = () => {
    if (inputItem === '') {
      alert("Please input item's name");
      return;
    }

    if (inputPrice <= 0) {
      alert("Item's price can't be zero or negative");
      return;
    }

    for (let i = 0; i < itemsMeta.length; i++) {
      if (itemsMeta[i].itemName == inputItem) {
        alert(`Item with name ${inputItem} already exist`);
        return;
      }
    }

    dispatch(
      addItems({ itemName: inputItem, totalItemPriceOnBill: inputPrice })
    );
  };

  const removeItemFromStore = (itemName) => {
    dispatch(removeItem(itemName));
  };

  return (
    <div className='add-items-sublocation-container'>
      <div className='add-items-heading'>Add Items</div>
      <div className='add-items-input-section'>
        <div className='add-items-input-name'>
          <input
            type='text'
            placeholder="Item's Name"
            onChange={(e) => {
              setInputItem(e.target.value);
            }}
          />
        </div>
        <div className='add-items-input-price'>
          <input
            type='number'
            placeholder="Item's total price on Bill"
            onChange={(e) => {
              setInputPrice(e.target.value);
            }}
          />
        </div>
        <div
          className='add-items-submit-button'
          onClick={() => {
            onSubmitItemDetails();
          }}>
          <MdPlaylistAdd />
        </div>
      </div>
      <div className='add-items-list-container'>
        <div className='add-items-list-heading'>Item list :</div>

        <div className='add-items-tag-list'>
          {itemsMeta.map((item, idx) => {
            return (
              <Tag
                tagName={item.itemName}
                key={idx}
                onCloseAction={removeItemFromStore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddItemsSublocation;
