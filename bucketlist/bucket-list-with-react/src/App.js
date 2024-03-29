// Stuff we will do
// 1. Create a App component renders title of the App - DONE
// 2. Add state to the component                      - DONE
// 3. Create a useEffect which calls the API          - DONE
// 4. Loop through the data recd and render it        - DONE

// 5. Create a way to insert an item
//    - input box                                     - DONE
//    - form that contains this input                 - DONE
//    - prevent the submit from refreshing the page   - DONE
//    - create a handler (function) to process the submit event  - DONE
//        - inform the backend about the new item                - DONE
//        - inform the state about the new item                  - DONE
//          (automatically re-render the list with the new item) - DONE

// 6. Create a way to mark an item as completed       - DONE

// 7. Functionality to delete an item                 - STUDENT ASSIGNMENT
//    - add some html to show an X or a button or something
//    - add a click handler 
//    - inform the backend, if error don't do the following
//    - make a copy of the state
//    - in the copy, filter out the deleted item
//    - replace the state with the copy

// 8. Composition - Break into                        - STUDENT ASSIGNMENT BONUS
//    - BucketlistHeader Component
//    - BucketlistInput Component
//    - BucketlistDeletion Component
//    - Combine all the components in App.js
  
// 9. Secure the app
//    - 

// 10. Deploy the React app to heroku 
//    - 

import './App.css';
import {useState, useEffect} from 'react';
const url = 'https://moniquesbucketlist.herokuapp.com/bucket';

function App() {
  const [bucketList, setBucketList] = useState([]);
  const [newItem, setNewItem] = useState('');
  
  // lifecycle function runs once after the component has "mounted"
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())  // returns another Promise
    .then(bucketListArray => {
      // console.log('the bucket list is:', bucketListArray);
      setBucketList(bucketListArray);
    })
  }, [])

  const clickHandler = event => {
    // inform the backend
    fetch(`${url}/${event.target.id}`, {method: 'PUT'})
    .then(res => res.json())
    .then(data => { 
      // make a true copy of the bucketList array
      let copyOfBucketList = [...bucketList];
      // find the item that we are interested in marking complete
      let requestedItem = copyOfBucketList.find(item => {
        return item.id === event.target.id-0
      })
      // if an item was found, flip its isComplete
      if(requestedItem) {
        requestedItem.isComplete = !requestedItem.isComplete;
      }
      // replace original state with the copy
      setBucketList(copyOfBucketList);
    })
    .catch(err=> console.log(err))
  }
 
  const deleteHandler = event => {
    event.stopPropagation();
    //event.target.id is targeting the 
    fetch(url + '/' + event.target.id, {method: 'DELETE'})
    .then(res => res.json())
    .then(res => {
      // update the state
      let filteredArray = bucketList.filter(
        member => {return member.id != event.target.id}
      )
      setBucketList(filteredArray)
    })
    .catch(function(err){
      console.log('There was an error deleting the item')
    })
  }

  let myList = bucketList
  .sort((a, b) => a.id-b.id)
  .map(item => {
    return (
      <li 
        key={item.id}
        id={item.id}
        onClick={clickHandler}
        className={item.isComplete? 'completed': ''}
      >
        {item.description}
        <button id={item.id} onClick={deleteHandler}>Delete</button>
      </li>)
  })


  const submitHandler = event => {
    // here the code runs when the form is submitted
    // prevents the default behavior of the element (form)
    event.preventDefault();
    // we want the newItem to be added to the state
    let item = {description:newItem, isComplete: false };
    // tell the backend about the new item
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      let newItemList = [
        ...bucketList,   // the spread operator breaks objects/arrays down into individual components
        data
      ];
      // console.log(newItemList);
      setBucketList(newItemList);
    })
    .catch(err => console.log('err'));
  }

  // this fires everytime something changes in the input box
  const changeHandler = event => {
    setNewItem(event.target.value)
  }

  // renders the HTML and data every time the data changes
  // data === state || props
  //   console.log('the component has rendered')
  // rendering happens many many times, whenever data changes
  return (
    <div className="App">
      <h1>My Bucket List</h1>
      
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          name="newItem" 
          placeholder="enter new item" 
          onChange={changeHandler}
          value={newItem}
        />
        <button type="submit">Save</button>
      </form>

      <ul>
        {myList}
      </ul>
    </div>
  );
}

export default App;