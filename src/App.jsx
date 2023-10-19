import React, { useState } from 'react'
import "./index.css"
const App = () => {
    const [input, setInput] = useState()
    const [item, setItem] = useState([])
    const [isedit, setIsedit] = useState(false)
    const [edititem, setEditem] = useState()
    // console.log(input)
    const submit = () => {
        setItem((value) => {
            return [...value, input]  //value : take any variable name u want
        })
        setInput('')
    }
    const delete_todo = (index) => {
        let filter = item.filter((i, ind) => ind !== index) //jo same na hi wo hatado baqi rkhlo kro
        setItem(filter)
        console.log(filter)

    }
    const edit = () => {
        item[edititem.ind] = edititem.value
        setIsedit(false)
        setItem([...item])

    }

    return (
        <>
        <div className='a111'>
            <div className="a11">
                <h1>TODO LIST APP</h1>
                <div className="a1">
                    <input className='inp-a' type="text" placeholder='enter task ' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button onClick={submit} className='btn-log'>+</button>
                </div>
                <div className="a2">
                    {isedit == true ? <>
                        <input className='inp-b' type="text" placeholder='enter task ' value={edititem.value} onChange={(e) => setEditem({
                            value: e.target.value,
                            ind: edititem.ind
                        })} />
                        <button onClick={edit} className='btn-b'>✎</button>


                    </> : null}
                </div>




                <ol>
                    {
                        item.map((val, index) => {
                            return <li onClick={() => {
                                setEditem({
                                    value: val,
                                    ind: index
                                })
                                setIsedit(true)
                            }}
                                onDoubleClick={() => delete_todo(index)}>{val}</li>
                        })

                    }

                </ol>


            </div>
            </div>
        </>


    )
}

export default App