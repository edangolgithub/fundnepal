import React, { useEffect, useState } from 'react';
// import axios from 'axios'
import { getList, setItem } from '../services/list';
function Jsondb() {
    const [list, setList] = useState([]);
    const [itemInput, setItemInput] = useState('');
    const [alert, setAlert] = useState(false);
    useEffect(() => {
        if (alert) {
            setTimeout(() => {
                setAlert(false);
            }, 200)
        }
    }, [alert])
    useEffect(() => {
        let mounted = true;
        if(list.length && !alert) {
            return;
          }
        getList()
            .then(items => {
                if (mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [alert, list])

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem(itemInput)
            .then(() => {
                setItemInput('');
                setAlert(true);
            })
    };
    return (
        <div className="wrapper">
            <h1>My Grocery List</h1>
            <ul>
                {list.map(item => <li key={item.item}>{item.item}</li>)}
            </ul>
            {alert && <h2> Submit Successful</h2>}
            <form onSubmit={handleSubmit}>
                <label>
                    <p>New Item</p>
                    <input type="text" onChange={event => setItemInput(event.target.value)} value={itemInput} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Jsondb
