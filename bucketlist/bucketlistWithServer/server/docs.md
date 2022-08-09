Read our data: we want to see what all our bucketlist items are
    method = GET
    route = /bucket
    response data = json
    amount of data = everything in the database
    data sent back = array of objects
    success status code= 200
    unsuccessful status code = 404

Create data: we want to add ONE new bucketlist item to our list 
    method = POST 
    route = /bucket
    response data = json
    amount of data = one onjectwhich is the newly created bucket item
    data sent back = one object
    success status code = 200
    unsuccessful status code = nothing

Delete data: we want to remove ONE item from our list 
    method = DELETE
    route = /bucket/<id>
    response data = json
    amount of data = everything in the UPDATED array 
        (original array minus the deleted todo)
    data sent back = an array of objects
    success status code = 200
    unsuccessful status code = nothing

Update data: we want to update ONE item with current isComplete status 
    method = PUT    
    route = /bucket/ 
    response data = json 
    amout of data = one updated todo 
    data sent back = one object with updated isComplte 
    success status code = 200 
    unsuccessful status code = 404

Example of data: 
todoArray = [ 
    { id: 1, description: "Call mom!!!", isComplete: false }, 
    { id: 2, description: "Buy groceries", isComplete: false }, 
    { id: 3, description: "Go to movies!!!", isComplete: false } 
    ]

Example of 404 response: 
{ message: "Id does not exist in database" }