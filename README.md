# favs-api


## HOW USE FAVS API

The api is deployed in railway at the following URL: https://favs-api-production.up.railway.app/
The following table lists the different end points that you can use:

| Route       | HTTP Verb | Route Middleware | Description                                |
| ----------- | --------- | ---------------- | ------------------------------------------ |
| /user       | POST      |                  | Create a new user                          |
| /user       | GET       | verifyToken()    | Get all information of all user            |
| /user/:id   | GET       | verifyToken()    | Get list for only one user by id            |
| /user/login | POST      |                  | Validate password and generate token       |
| /list       | POST      | verifyToken()    | Create new list to user                     |
| /list       | GET       | verifyToken()    | Get all list of every user                  |
| /list       | DELETE    | verifyToken()    | Delete a list by id                         |
| /favs       | POST      | verifyToken()    | Create a new favorite for a list            |
| /favs       | DELETE    | verifyToken()    | Delete a favorite for a list by favorite id |
| /favs       | PUT       | verifyToken()    | Update a favorite by id

Prior to any end point you must put the previously indicated URL of railway.
To cover the minimum requirements, you can do it in the end points as follows:
###	The system have to allow the following actions
1.	Create a new list with a given name (auto-generate the unique id)
-	You can use the route /user with POST
2.	Get the users lists
-	You can use the route /user with GET
3.	Get an individual list for the user
-	You can use the route /user/:id
4.	Add items to a given list (based on the generated id)
-	You can use /list with POST to create a list and /favs with POST to create a favorite in the list 
5.	All endpoints have to be secured with Bearer Auth (JWT) 
-	All end point need a user authenticate and token y head authorization to access and the token expires in 24h
6.	You should ensure that the password is strong enough
-	The password need have minimum 8 characters, one letter, one especial character and one number
