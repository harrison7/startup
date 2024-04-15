# GitHub
I learned how to commit, push, pull, and do version control with Git. In the markdown tutorial I learned a lot, I only used the basics before like making words **bold** or in *italics*, now I know a lot more techniques.

# AWS Route 53
The name server (NS) record contains the names of the authoritative name servers that authorize you to place DNS records in this DNS server. Those same authoritative name servers are listed with the registrar that you leased your domain name from. That way the authoritative name server can verify that the DNS records and the DNS registration match and are authorized to represent the domain name when defining DNS records. Otherwise a hacker could just add DNS records and take over your domain name.

The start of authority (SOA) record provides contact information about the owner of this domain name.

# Git & GitHub
SHA: hashing algorithm that represents each git version
You can create a personal access token through settings -> developer settings -> personal access tokens

# History & Asking questions
Three stages of internet history:
Creation of internet
Creation of HTML and HTTP to allow sharing documents
Creation of CSS and JavaScript to allow interactivity
The beginnings of the internet were created as a network to aid in resisting a nuclear attack
Hypertext Markup Language (HTML) was created early on by Berners-Lee (the web father) and defined the World Wide Web, revolutionary by having hyperlinks to link to other documents
Berners-Lee also created the HyperText Transfer Protocol (HTTP) and the Uniform Resource Locator (URL)
CSS was later created, without it the entire internet would have looked exactly the same on every page
JavaScript was created to allow interactivity
Asking questions:
Sum up problem in one simple, specific question, then explain details
Help others reproduce problem
Don’t start over with established code, embrace and build upon it

# Technology Stack & AWS
Technology stack is all the technologies used to deliver a web application
Our stack consists of the following: React for the web framework, Caddy as the web server hosted on AWS, running web services with Node.js, and MongoDB as the database
Usually I will use the stack that the company has set
AWS is like renting a mini computer for running our web server

# Console & Editors
Git Bash has POSIX compliant tools to approximate Linux commands

# HTML
\<p> is paragraph, \<a> is hyperlink

# CSS
Put a style tag in a \<p> tag to color something
The lowest-level style takes priority (cascading)
Link a CSS sheet in header through \<link rel="stylesheet" href="styles.css" />
You can reference: 
tag {}
.class {}
tag.class {}
#id {}
tag[class=’classname’] {}
section:hover {}
For units you can %, px, units, relative to viewpoint, etc
Putting all CSS in one file instead of inline in .html has its advantages and drawbacks

# CSS practice
Use Disify email verifier for 3rd party API
Use @font-face to load font and its source
Instead of hosting a font, you can @import one
CSS has animation properties along with @keyframes

# Responsive design
Responsive design: compatible with multiple screen sizes and mobile devices
“Block” type fills container
“Inline” is only as big as its content
Use following tag to keep scaling the same and let CSS handle things on mobile
\<meta name="viewport" content="width=device-width,initial-scale=1" />
CSS float property allows text to wrap around content
@media selector can specify whether device is in portrait or landscape
“Grid” display is useful to put many child elements in a responsive grid, set display property to grid
Set it to “flex” to customize whether elements will resize or not, their default size, and how much they resize on different screens
flex: 0 80px
flex: 1

# CSS frameworks
CSS tailwind is on the rise, a different syntax that relies on inline CSS in the HTML file
The #1 framework is Bootstrap, consistent user experience but a little too common
To include JavaScript, you must include Bootstrap’s JS module at the end of the body module
Run this command to include JS: npm install bootstrap@5.2.3
Bootstrap for example has a better button class than normal HTML

# JavaScript intro
Officially ECMAScript, JavaScript is the most widely used language
Current version is ES6
Invented by Brendan Eich
With console.log() you can output strings
Time some code:
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
Use it in HTML:
 <button onclick="sayHello()">Say Hello</button>
function sayHello() {
  console.log('hello');
}
To make a var, say let, or const. JS doesn’t make you define a type when declaring the variable
Null
Undefined
Boolean
Number
BigInt
String
Symbol
JS also supports several object types
Object
Function
Date
Array
Map
JSON
== and != will automatically convert the type, leading to unexpected results. This is why typically === and !== are used
There is for, do while, while, for in, for of, etc
A for each statement is actually just a function: words.forEach((word) => console.log(word));
Strings can use backticks `
Strings have functions to act on them like other languages

# JavaScript continued
Functions
Function begins with “function” keyword
Assign a function to a variable to make an anonymous function. You can use it in situations such as a parameter
Creating an inner function allows you to make “private” functions
Arrow functions =>
AKA lambda function, allows for very compact anonymous functions
Can’t use as constructors or iterator generators
Return statement is optional in a single-line no-curly braces function
Use closure to output values contained in scope instead of where the function is called
Array
You can manipulate arrays with many functions, some require arrow functions
JSON
Easy way of transferring JavaScript
Converts everything into objects
Classes and objects
Objects contain keys and values
A constructor is a function returning an object
Can contain functions and #private values
Inheritance through extends 

# JavaScript part 3
Regexes have native support in JavaScript
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
Strings have several functions that accept regexes
Rest and spread
Rest allows flexible quantity of parameters: (num1, …numx)
Spread is the opposite, putting an array into parameters: (...[num1, num2])
Exceptions
There is support for try, catch, finally
A catch block can return a fallback instead of an error state
Destructuring
Like spreading an array, but saving it to variables: const [b, c] = a; If a = [1, 2, 3], then b will be set to 1 and c set to 2
You can even use rest to get remainder of array a

# Scope
Scope
JS uses this keyword in objects. globalThis refers to the browser’s window object
Use closure to access inner local variables outside of their scope, by putting it in an object’s function
Arrow functions are weird, will refer to global context in an object, unless inside of an object function
JavaScript modules
You can import functions and the like from modules, such as alert.js
You can attach it to an HTML document, such as having it activate on a button press
Document Object Model
Object representation of HTML code that the browser uses to render a website
The displayElement function allows access of a DOM element
You can also insert, modify, and delete elements of DOM
JavaScript can even inject HTML into the DOM. Be careful to not let the user be able to modify the data correctly, in order to prevent attacks
eventListener calls a function on a certain element event, such as clipboard, mouse, keys, etc
LocalStorage
The LocalStorage API allows for data to be saved across multiple HTML pages
setItem(), getItem(), removeItem(), clear()

# Promises, async/await
Promises
JavaScript is single threaded, but you can run code concurrently through promises
Has three states: pending, fulfilled, rejected
Implement through setTimeout, you can set delay in milliseconds
You can call a state function to set a condition, such as resolve(‘bruh’) or reject(‘’)
Promise object resolves a timeout, has functionality similar to exception handling. .then(), .catch(), .finally()
Async/await
Use setTimeout in a more concise way in large systems
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
To use this, function has to be called with async keyword
You can then use await keyword to catch the returned promise

Start an executable: chmod +x something.sh

Subdomain: c260.cs.byu.edu. The first part makes it a subdomain

Regex: i means not case sensitive, A|f means A or f, whole thing is /A|f/i

\<div> means division

DOM textContent sets the child text for an element

{n:1}

Valid JSON: {"x":3}

CNAME is the record type to point to another DNS record, A maps it to IP address, TXT stores text on DNS

Normal promise makes code after it execute, but await/async makes all following code in the "then" box

#Final review:

A linux daemon can start when a computer is rebooted, executes independent of a user, and can fork other processes. PM2 is an example of a daemon

Hashing stored passwords is important to imporve security

HTTP code 100 is informational, 200 means success, 300 means redirect, 400 means client error, 500 is server error

Running npm install ws adds ws source code, adds dependency to package.json, and locks version of ws package for the app

Port 80 is reserved for HTTP, 443 for HTTPS, 22 for SSH

Standard HTTP headers: content-type, host, cookie

