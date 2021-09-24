import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ list, clearItem, updateItem }) => {
    return (
        <div>
            {list.map((item) => {
                const { id, title } = item
                return (
                    <div key={id}>
                        <p>{title}</p>
                        <div>
                            <button onClick={() => updateItem(id)}>Update</button>
                            <button onClick={() => clearItem(id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List;