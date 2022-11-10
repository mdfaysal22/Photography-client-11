import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div className='text-center'>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    <h2 className='text-2xl'>Difference Between SQL and No SQL Database </h2>
                </div>
                <div className="collapse-content">
                    <h2 className='text-xl'>SQL Database :</h2>
                    <ul className='my-5'>
                        <li>RELATIONAL DATABASE MANAGEMENT SYSTEM(RDBMS)</li>
                        <li>These databases have fixed or static or predefined schema</li>
                        <li>These databases are not suited for hierarchical data storage.</li>
                        <li>These databases are best suited for complex queries</li>
                        <li>These databases are not suited for hierarchical data storage.</li>
                        <li>Vertically Scalable</li>
                        <li>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</li>
                    </ul>


                    <br />

                    <h2 className='text-xl'>SQL Database :</h2>
                    <ul className="my-5">
                        <li>Non-relational or distributed database system.</li>
                        <li>They have dynamic schema</li>
                        <li>These databases are best suited for hierarchical data storage.</li>
                        <li>These databases are not so good for complex queries</li>
                        <li>Horizontally scalable</li>
                        <li>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</li>
                    </ul>
                </div>
            </div>


            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    <h2 className='text-2xl'>What is JWT Token ? And How to work it ?  </h2>
                </div>
                <div className="collapse-content">
                    <h2>JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token’s issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token.</h2>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    <h2 className='text-2xl'>What is difference between Js and Nodejs ?  </h2>
                </div>
                <div className="collapse-content">
                    <h2 className='mt-5 text-xl'>NodeJS is a cross-platform and open-source Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                        <ul className='text-xs'>
                            <li>NodeJS is a Javascript runtime environment.</li>
                            <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                            <li>It is mostly used on the server-side.</li>
                            <li>Nodejs does not have capability to add HTML tags.</li>
                            <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
                        </ul>
                    </h2>
                    <h2 className='mt-5 text-xl'>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                        <ul className='text-xs'>
                            <li>Javascript is a programming language that is used for writing scripts on the website. </li>
                            <li>Javascript can only be run in the browsers. </li>
                            <li>It is basically used on the client-side. </li>
                            <li>Javascript is capable enough to add HTML and play with the DOM.  </li>
                        </ul>
                    </h2>

                </div>


                <div className='collapse'>
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    <h2 className='text-2xl'>How does NodeJS handle multiple requests at the same time?  </h2>
                </div>
                <div className='collapse-content'>
                    <h2>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </h2>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;