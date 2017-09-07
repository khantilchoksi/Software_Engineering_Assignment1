## 1.Explain some additional concerns related to using REST apis.

* (a) If we make any change in the frontend(UI), it may be possible that, 
we need some different data for that API call and we may also not need other data which was provided earlier in the API call. 
So consistently, we also need to change our backend with the frontend, which is not good for productivity of the software.

* (b) We may have to gather data by calling to different API calls which includes multiple time networking communication to the .
Like if we want to fetch the repositories and the followers of an account on git, we need to make 2 different API calls.

* (c) Moreover, when the user calls to specific API, it returns the predefined data in the predefined format. 
But if the user wants the data in some other format, we have to create a new method in the backend.

* (d) This way, we may receive the data with the API call which we don’t even wanted.

* (e) We may also not receive the data which we actually wanted along with this call. 
So we may have to make another API call for the rest of the required data.


## 2. Compare and contrast the benefits and disadvantages of using a RESTful architecture vs. a graph query language.

**(a) URL for calling the RESTful API vs GraphQL:**

 * In the **RESTful API**, the URL looks like : https://khantilchoksi.com/api/clients and if we want some specific user’s details, it will be like https://khantilchoksi.com/api/clients?unique_id=1234

 * Whereas in the **GraphQL**, the URL contains the format in which the user wants the response like: https://khantilchoksi.com/api/{client(unique_id:1234)}
 
**(b) Actual technical implementation difference:**
 
  * In the **RESTful API**, there is already predefined API call and the output of 
 that call is also decided at the time coding and returned in the same format as decided in the backend. 
 So, if the frontend developer needs to change the UI, he also needs to contact to the backend developer and 
 request him to create the new API call with the requested format for the new UI.
 
  * Whereas in the **GraphQL**, whole query string is given to the server, it process the received format and 
 gives the JSON response according to the client’s requested data format. So, due to this type of flexibility, 
 the frontend developer can change the UI and accordingly the query; without disturbing the backend developer.
 
 e.g. *Request:* 

`{
   client(unique_id: 1234) {
    
        unique_id  
        
        name          
        
        email_id          
        
        profilePicture(size:150){          
        
          uri            
          
          height            
          
          width            
        }  
        
    }  
 }`
 
*Response:*

 `{  
 
    “client”:{

       “unique_id”:”1234”  

       “name”: “Khantil Choksi”  

       “email_id”:khchoksi@ncsu.edu  

       “profilePicture”:{  

       “uri” : “/xyz/abcd”,  

       “height”: 150,  

       “width”: 150,  

       }

     }

}`

 

**(c)	Endpoints difference:**

* In the RESTful API, we may have to request to multiple endpoints to get the required data. 
So a RESTful service may require complex join statement in SQL and multiple roundtrips on different objects.
* Whereas GraphQL follows relationships between objects and hierarchical nature, it reduces roundtrip object retrievals. Moreover, data can be fetched from multiple resources, with multiple data models and the data joins automatically which is built-in functionality of the GraphQL.  


**(d)	Caching:**

* In the RESTful API, due to the HTTP based protocol, different caching approaches 
(like caching during networking, browser caching, etc.)  will be useful to do the task which are not necessarily required to do the task.
* Whereas in GraphQL, it doesn’t  have the caching functionality. So, it reduces the performance.

**(e)**	Schema and data type system:

* In the RESTful API, the backed has to decide the data type and if the frontend developer wants to change it, we have to create a new API call.
* Whereas in the GraphQL, it uses a strong type system to define the capabilities of an API. 
Moreover, the data types that are exposed in the an API are written down in a schema. 
So, referring to this schema, it provides as the contract between the clinet and the server to define 
how a user/client who consumes the call can access the data. 
And once this schema is defined, the teams working on frontend developers doesn’t have to depend on backend developers.


**(f)	Similarity between RESTful API and GraphQL:**

* Similarity between both the methods are that, they both can be requested using the HTTP request and returns the JSON data.

