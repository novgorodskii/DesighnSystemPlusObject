import React, {useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './MultiSelect.sass';

const MultiSelect = ({ itemsList, addTag, activeItem, deleteTag}) => {
  const [ show, toggleShow ] = useState(false);

  return (
    <div className="select">
      <div className="select-active shadow-box"  onClick={() => {
          if( activeItem.length ===  0) toggleShow(!show);
        }}>
        <div className="select-active-item">
          { activeItem.length > 0 ? activeItem.map(item => {
            return (
              <span className="select-teg">
                <span onClick={() => toggleShow(!show)}>{item.name}</span>
                <div onClick={() => deleteTag(item.id)}>
                  <CloseIcon fontSize="small" />
                </div>
              </span>
            )
          }) : <span>Selecet</span>}
        </div>
      </div>

      {
        show ?
        <div className="select-list shadow-box">
          { itemsList.map(item => <div
          onClick={() => {
            addTag(item.id);
          }} key={ item.id }>{ item.name }</div>) }
        </div> : null
      }
    </div>
  );
};

export default MultiSelect;