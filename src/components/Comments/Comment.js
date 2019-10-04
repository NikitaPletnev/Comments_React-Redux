import React from 'react';



export default ({ comment: { author, text, id }, onDelete}) => {

	
    return (
        <div class="comments-item">
        <div className="comments-item__captions">
            <div className="author">{ author }</div>
        </div>    
            <p className="comments-item__text">{ text }</p>
            <button className="btn btn-danger" type="button" onClick={() => onDelete(id)}>
                Удалить
            </button>
        </div>
    );
};