import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            
            <h1 className='text-center mt-5'>Here Are Some Questions with Answers</h1>

    <div class="container  ">

        <div class="p-4 text">
            <div class="p-4 mb-4 ques">
              <h5>1.Difference between SQL and NoSQL?</h5>
              <p>Ans:The five critical differences between SQL vs NoSQL are:
<br />
1.SQL databases are relational, NoSQL databases are non-relational.
<br /> 
2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
<br />
3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
<br />
4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
<br />
5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
         
            <div class="p-4 mb-4 ques">
              <h5>2. What is JWT, and how does it work?? </h5>
              <p>Ans :JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. 
              JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
              </p>
            </div>
            <div class="p-4 mb-4 ques">
              <h5>3. What is the difference between javascript and NodeJS? ? </h5>
              <p>Ans :NodeJS : 
NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
<br />
JavaScript : 
Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.   
              </p>
            </div>
           
            <div class="p-4 mb-4 ques">
              <h5>4.How does NodeJS handle multiple requests at the same time?? </h5>
              <p>Ans : NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them..
    </p>
                
              
            </div>
           
    

        </div>
        </div>
        </div>
    );
};

export default Blog;