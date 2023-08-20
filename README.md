## PaginationExamples

In this project we can get products data using pagination

## Pagination => 

- **Pagination means dividing the total results into smaller chunks which can be shown as pages to not overwhelm the customer and also more the data we pass to the frontend, 
slower the performance and we end up wasting users internet which may not be necessary so for these reasons we have pagination**

- **For Pagination we only need 2 things from the frontend , which is page number and items per page ( this may not be required if page size is fixed on the frontend )**

- **The query for pagination is :- db.model.find({"query to be executed"}).skip(offset).limit(size)**

## Emails =>

-**Sometimes you need to send emails based on certain events that happen in the application for e.g :- 
when you register in an application you might get a verification email or welcome email and these need to be sent from the application**

## SMTP ( Simple Mail Transfer Protocol) =>

- **Like we have HTTP for sending requests from client to server we have SMTP for sending emails so basically this is a protocol ( some rules ),
which are understood by the concerned computers. - So the process is that we will send email data from our server to a third party service provider,
which implements this protocol and that third party application will then eventually send emails to the end user.
 For converting email data to SMTP format we will use Third Party package called Nodemailer,
 which will do all the work and for sending emails we will use a service called Email Sending Service**
