Can only use these 2 routes:
/bucket
/bucket/:id

Must return everything as JSON.

CRUD- Create, Read, Update, Delete
4 routes for each:
Create = POST verb
Read = GET verb
Update= PUT verb
Delete = DELETE verb 

READ
1. GET method and endpoint - /bucket :this is less specific 
2. send data back -> JSON
3. send back everything - array 
4. send back the whole object 

CREATE
1. POST method and /bucket endpoint 
2. send back as JSON
3. send something = success means sending back ONE thing 
4. send back one object - id, description, isComplete 

DELETE
1. DELETE method with /bucket/:id
2. send JSON
3. send one thing back 
4. send back one object - id, description, isComplete

UPDATE
1. PUT method


