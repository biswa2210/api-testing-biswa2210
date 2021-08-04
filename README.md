# API-TESTING-BISWA2210 :star_struck: :computer:

***This new API is created by Biswarup Bhattacharjee, student of BTECH, in University of Engineering and Management, Kolkata.***

**Email Id: bbiswa471@gmail.com.** 

**Contact No: 916290272740.** 

<p align="left">
<a href="https://www.facebook.com/profile.php?id=100070395300810" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="biswa2210" height="30" width="40" /></a>
<a href="https://instagram.com/biswarup2210" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="" height="30" width="40" /></a>
<a href="https://github.com/biswa2210/biswa2210" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="" height="30" width="40" /></a>
</p>

## About API :point_down: 

<div align="justified">
 
An application programming interface (API) is a connection between computers or between computer programs. It is a type of software interface, offering a service to other pieces of software. A document or standard that describes how to build such a connection or interface is called an API specification. A computer system that meets this standard is said to implement or expose an API. The term API may refer either to the specification or to the implementation. In contrast to a user interface, which connects a computer to a person, an application programming interface connects computers or pieces of software to each other. It is not intended to be used directly by a person (the end user) other than a computer programmer who is incorporating it into software. An API is often made up of different parts which act as tools or services that are available to the programmer. A program or a programmer that uses one of these parts is said to call that portion of the API. The calls that make up the API are also known as subroutines, methods, requests, or endpoints. An API specification defines these calls, meaning that it explains how to use or implement them. An API (Application Programming Interface) is a set of functions that allows applications to access data and interact with external software components, operating systems, or microservices. API lets a developer make a specific “call” or “request” in order to send or receive information. This communication is done using a programming language called “JSON.”  It can also be used to make a defined action such as updating or deleting data. There are four basic request methods that can be made with API:<br>
<br>GET – Gathers information (Pulling all Coupon Codes)
<br>PUT –  Updates pieces of data (Updating Product pricing)
<br>POST – Creates (Creating a new Product Category)
<br>DELETE – (Deleting a blog post)
<br>JSON (JavaScript Object Notation) is used to represent data on a server. It’s fairly easy to read by humans, and easy for machines/applications to understand.
      
</div>

## About HEROKU :point_down: 

<div align="justified">
 
Heroku is a cloud platform as a service (PaaS) supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go. For this reason, Heroku is said to be a polyglot platform as it has features for a developer to build, run and scale applications in a similar manner across most languages. Heroku was acquired by Salesforce.com in 2010 for $212 million. Heroku was initially developed by James Lindenbaum, Adam Wiggins, and Orion Henry for supporting projects that were compatible with the Ruby programming platform known as Rack. I have used HEROKU to host my api.
 
</div>


## About POSTMAN :point_down:

<div align="justified">

Postman is a collaboration platform for API development. Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so we can create better APIs—faster. This is done by allowing users to create and save simple and complex HTTP/s requests, as well as read their responses. The result - more efficient and less tedious work. Postman is very convenient when it comes to executing APIs. Once we’ve entered and saved them, you can simply use them over and over again, without having to remember the exact endpoint, headers, API keys, etc. I have used it for using the API, GET and POST requests. I have created a workspace here and pasted the link generated by HEROKU.
 
</div>

### LOCALHOST  :point_down:

<div align="justified">
 
I have made this API testing and run it in localhost where I defined the port number. So we can run this API in localhost through npm start. Using the API in localhost we can upload image files in uploads folder in public folder using POST REQUEST. After that it will be uploaded in my 'daily-deals-images-bucket's storage in https://console.firebase.google.com/project/daily-deals-images-bucket/storage/daily-deals-images-bucket.appspot.com/files in my firebase acount associated with my email id 'bbiswa471@gmail.com'. If a user is 'ADMIN USER' he or she will be able to get details like user details. For this he or she has to use GET REQUEST.
 
</div>

### HEROKUAPP LINK :point_down:

<div align="justified">
 
I have made this API testing and hosted it in HEROKU. I have generated a link through HEROKU. I have used POSTMAN application for POST and GET requests for this API where I have created a workspace and pasted the link. Using the API link we can upload image files in uploads folder in public folder in HEROKU app storage using POST REQUEST. After that it will be uploaded in my 'daily-deals-images-bucket's storage in https://console.firebase.google.com/project/daily-deals-images-bucket/storage/daily-deals-images-bucket.appspot.com/files in my firebase acount associated with my email id 'bbiswa471@gmail.com'. If a user is 'ADMIN USER' he or she will be able to get details like user details. For this he or she has to use GET REQUEST. HEROKU filesystem is ephemeral it means it automatically deletes the files from its storage after a span of time.
 
</div>

### WHY I HAVE USED FIREBASE AFTER USING HEROKU :point_down:

<div align="justified">
 
The Heroku filesystem is ephemeral - that means that any changes to the filesystem whilst the dyno is running only last until that dyno is shut down or restarted. Each dyno boots with a clean copy of the filesystem from the most recent deploy. This is similar to how many container based systems, such as Docker, operate. In addition, under normal operations dynos will restart every day in a process known as "Cycling". These two facts mean that the filesystem on Heroku is not suitable for persistent storage of data. In cases where we need to store data it recommends using a database addon such as Postgres (for data) or a dedicated file storage service such as AWS S3 (for static files). For this reason I have made such an API which finally puts images in firebase storage. So that all the files will be remain in the storage until I delete them.
 
</div>

## Some points about this API testing :point_down:

 - [x] 'Safe'<br>
 - [x] 'No-one can access'<br>
 - [x] 'easy to use'<br>

## Purpose :point_down:

<div align="justified">

The development of apps for mobile devices meant that organizations needed to allow users to access information through apps and not just through the Internet. Within the public sector, APIs are used to allow agencies to easily share information and also lets the public interact with government as well. While there are numerous protocols and technologies involved, the underlying purpose of APIs is always the same: to let one piece of software communicate with another.

</div>

## Use :point_down:

<div align="justified">


</div>      
       
## Importance :point_down:

<div align="justified">
  

</div>

## Folder Structure :point_down:
```bash
api-testing-biswa2210
       ├── public/uploads
       |          └── files are uploaded here

```

## Making :point_down:

<div align="justified">
  


</div>

## Screenshots :point_down: 

<div align="center">

<a href="pics/todo1.PNG"><img src="pics/todo1.PNG" width="400" height= "300"></a> <a href="pics/todo2.PNG"><img src="pics/todo2.PNG" width="400" height= "300"></a>
  
</div>








