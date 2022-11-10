import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div className='mx-12'>
           <Helmet>
                <title>Blogs</title>
            </Helmet> 
            <h2 className='text-center my-12 font-bold text-5xl '>Blogs</h2>
            <div className='container mx-auto  mb-12 p-3 border'>
                <h3 className='text-2xl font-bold mb-2'>Difference between SQL and NoSQL</h3>
                <p className='text-dark'><b>Ans:</b> SQL stands for Structured Query Language, used for accessing and manipulating databases. We can create, retrieve, update, and delete the database. It is the standard language for relational database management systems. Common relational database management system that uses SQL are Oracle, Sybase, Access, Ingres etc.
<br></br><br></br>
                NoSQL stands for Not Only SQL database. These are specially used for working with large sets of distributed data. Also, NoSQL is an alternative to traditional databases in which data is placed in tables and data schema is carefully designed before building the database. </p>
            </div>
            <div className='container mx-auto  mb-12 p-3 border'>
                <h3 className='text-2xl font-bold mb-2' >What is JWT, and how does it work?</h3>
                <p className='mb-2'><b>Ans:</b>  JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server. A JWT contains three parts: <br /> </p>
                <p className=' ' > <br />  1. Header <br />2. Payload <br /> 3. Signature </p> <br /> <br />

                <p><b>How does it work?</b><br />1. Create a JSON <br /> 2.  Create a JWT signing key and decide the signing algorithm <br /> 3. Creating the “Header” <br /> 4. Create a signature <br /> 5. Creating the JWT <br /> 6.Verifying the JWT</p>
            </div>

            <div className='container mx-auto  mb-5 p-3 border'>
                <h3 className='text-2xl font-bold mb-2'>What is the difference between javascript and NodeJS?</h3>
                <p className='text-dark'><b>Ans:</b> JavaScript (JS) is a dynamic computer programming language . It is most commonly used as part of web browsers, whose implementations allow client-side scripts to interact with the user, control the browser, communicate asynchronously, and alter the document content that is has also become common in server-side programming, game development and the creation of desktop applications. <br /> <br />Node.js is a software platform that is used to build scalable network (especially server-side) applications. Node.js utilizes JavaScript as its scripting language, and achieves high throughput via non-blocking I/O and a single-threaded event loop.

                Node.js contains a built-in HTTP server library, making it possible to run a web server without the use of external software, such as Apache or Lighttpd, and allowing more control of how the web server works. </p>
            </div>
            <div className='container mx-auto  mb-12 p-3 border'>
                <h3 className='text-2xl font-bold mb-2'>How does NodeJS handle multiple requests at the same time?</h3>
                <p className=''><b>Ans:</b> Node’s main JavaScript thread uses an event loop. When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they’re all processed. The loop executes very quickly and you kind of have to go out of your way to create apps that block.

                There’s an important caveat to this: user requests (like web requests) are not the same as function requests. Multiple users can submit requests and they’ll be processed within nanoseconds of each other (not noticeable without tooling). This differs from a process calling the same function/memory space at the same time. </p>
                <br />
                
            </div>
        </div>
    );
};

export default Blog;