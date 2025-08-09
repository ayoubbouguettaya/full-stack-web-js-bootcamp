const OneItem = (props) => {

    return(
         <li >
            <p>{props.name}</p>
            <p>{props.price} DA</p>
            <button onClick={() => { console.log('edit', props.id) }} >edit</button>
            <button onClick={() => { console.log('delete', props.id) }} >delete</button>
          </li>
    )
}

export default OneItem