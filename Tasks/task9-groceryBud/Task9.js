import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
    const [productName, setProductName] = useState('')
    const [list, setList] = useState([])
    const [edit, setEdit] = useState(false)
    const [itemToUpdate, setItemToUpdate] = useState()
    const [alert, setAlert] = useState({ show: false, type: '', msg: '' })

    const handleSubmit = (e) => {
        e.preventDefault();
        showAlert(true, 'success', 'name has been added')
        const newProduct = { id: new Date().getTime().toString(), title: productName };
        setList([...list, newProduct])
        setProductName('')
        if (edit) {
            const productIndex = list.findIndex((product => product.id == itemToUpdate.id))
            list[productIndex].title = productName
            setList([...list])
            setProductName('')
            setEdit(false)
            console.log(list)
        }
    }

    const clearItems = () => {
        setList([])
    }

    const clearItem = (id) => {
        showAlert(true, 'danger', 'item removed');
        console.log(id)
        setList(list.filter((item) =>
            item.id !== id
        ))
    }

    const updateItem = (id) => {
        const exactItem = list.find((item) => item.id === id);
        setProductName(exactItem.title)
        setEdit(true)
        setItemToUpdate(exactItem)
        // Zapytac Przemka w sumie czemu tak jest?
        console.log(productName)
    }

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
                <h2>Grocery bud</h2>
                <input
                    type="text"
                    placeholder="ex.cola"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <List list={list} clearItem={clearItem} updateItem={updateItem} />
            {list.length > 0 ? <button onClick={clearItems}>Clear items</button> : null}
        </section>
    )

}

export default App;