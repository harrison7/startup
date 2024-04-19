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

URL format: <scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>

URI's include URL's and URN's. A URN is a unique identifier that doesn't represent location information

Ports 0-1023 are standard protocols, 1024-49151 are for requesting entities, 49152-65535 

# NOTES

Internet
IP address is used to connect to a server through the internet
In the console, traceroute is used to find the hops in a connection
The internet sends data through the TCP/IP model
Application provides functionality like web browsing
Transport allows moving connection information packets
Internet establishes connections
Link provides physical connections
Web servers
A web server knows how to receive internet requests and speak the HTML application protocol
Each running web service is on a unique port, to support multiple running at the same time
Microservices are a common practice. For example, if one instance can support one thousand users, you can run 1000 of those instances to support one million users.
Serverless functionality allows writing of HTTP functions for the server that are completely removed from the architecture
Domain names
Each domain name can have multiple associated IP addresses in case of failure
The governing board ICANN controls the available TLDs, like .com or .net
Subdomains are like startup. or simon., where each has a different IP address
You can use whois in the console to get more information on a domain name
There are a few special DNS servers that all DNS servers reference:
A: record that maps domain name to IP address
CNAME: maps domain name to other domain name
TTL: time to live for domain cache
Fetch
Fetch returns a promise


Web services intro
For the first time we are involving things outside of our browser and into the outside world
We will make our own web server with endpoints
URL
Includes scheme, domain name, port, path, parameters, & anchor
A URL is a URI. URI’s also include URN, which could be like a book’s isbn, info without location information
Port
When connecting to the internet, you need an IP address and a port number
443 is the HTTPS port, 22 is the SSH port
Simon is on port 3000, startup is on port 4000
HTTP
HTTP involves making requests and receiving responses, has headers and a body
GET gets a resource, POST creates a new resource, PUT updates a resource, and DELETE deletes a resource. OPTIONS gets metadata about a resource.
Status codes: 1xx success, 2xx info, 3xx redirect, 4xx client error, 5xx server error
Cookies are a way for the server to track previous HTTP requests
Current version is HTTP3 as of 2022
Fetch
The fetch API is a way for JS to make HTTP requests


First successful application for deploying JavaScript outside of the browser
Node.js runs Google’s V8 engine but in a console

Express is a node package that makes it easy to set up frameworks for applications

SOP and CORS
Same Origin Policy requires that requests can only be viewed from users of the same domain
Cross Origin Resource Sharing permits what can be shared so that the internet can actually function
3rd party services must be tested, as some may be blocked by CORS

A daemon keeps a program running after it shuts down

MySQL supports relational queries for databases, but there are many other database options. We will use MongoDB
Atlas is a service that helps manage MongoDB for us

Each user is authenticated, and then their authentication token is stored on their device
Authorizations usually use standard protocols to make things easier, SSO
Consider AWS Cognito, or Google Firebase for an authentication service\

WS: Created in 2011, built on top of HTTP protocols. Makes it so server doesn’t have to constantly ping or keep a connection open to receive updates


Common terms
Hacking - The process of making a system do something it's not supposed to do.
Exploit - Code or input that takes advantage of a programming or configuration flaw.
Attack Vector - The method that a hacker employs to penetrate and exploit a system.
Attack Surface - The exposed parts of a system that an attacker can access. For example, open ports (22, 443, 80), service endpoints, or user accounts.
Attack Payload - The actual code, or data, that a hacker delivers to a system in order to exploit it.
Input sanitization - "Cleaning" any input of potentially malicious data.
Black box testing - Testing an application without knowledge of the internals of the application.
White box testing - Testing an application by with knowledge of the source code and internal infrastructure.
Penetration Testing - Attempting to gain access to, or exploit, a system in ways that are not anticipated by the developers.
Mitigation - The action taken to remove, or reduce, a threat.
Motivation
Disruption - By overloading a system, encrypting essential data, or deleting critical infrastructure, an attacker can destroy normal business operations. This may be an attempt at extortion, or simply be an attempt to punish a business that that attacker does not agree with.
Data exfiltration - By privately extracting, or publicly exposing, a system's data, an attacker can embarrass the company, exploit insider information, sell the information to competitors, or leverage the information for additional attacks.
Resource consumption - By taking control of a company's computing resources an attacker can use it for other purposes such as mining cryptocurrency, gathering customer information, or attacking other systems.
Hacking techniques
Injection: When an application interacts with a database on the backend, a programmer will often take user input and concatenate it directly into a search query. This allows a hacker can use a specially crafted query to make the database reveal hidden information or even delete the database.
Cross-Site Scripting (XSS): A category of attacks where an attacker can make malicious code execute on a different user's browser. If successful, an attacker can turn a website that a user trusts, into one that can steal passwords and hijack a user's account.
Denial of Service: This includes any attack where the main goal is to render any service inaccessible. This can be done by deleting a database using an SQL injection, by sending unexpected data to a service endpoint that causes the program to crash, or by simply making more requests than a server can handle.
Credential Stuffing: People have a tendency to reuse passwords or variations of passwords on different websites. If a hacker has a user's credentials from a previous website attack, then there is a good chance that they can successfully use those credentials on a different website. A hacker can also try to brute force attack a system by trying every possible combination of password.
Social engineering - Appealing to a human's desire to help, in order to gain unauthorized access or information.
Preventions
Sanitize input data - Always assume that any data you receive from outside your system will be used to exploit your system. Consider if the input data can be turned into an executable expression, or can overload computing, bandwidth, or storage resources.
Logging - It is not possible to think of every way that your system can be exploited, but you can create an immutable log of requests that will expose when a system is being exploited. You can then trigger alerts, and periodically review the logs for unexpected activity.
Traps - Create what appears to be valuable information and then trigger alarms when the data is accessed.
Educate - Teach yourself, your users, and everyone you work with, to be security minded. Anyone who has access to your system should understand how to prevent physical, social, and software attacks.
Reduce attack surfaces - Do not open access anymore than is necessary to properly provide your application. This includes what network ports are open, what account privileges are allowed, where you can access the system from, and what endpoints are available.
Layered security - Do not assume that one safeguard is enough. Create multiple layers of security that each take different approaches. For example, secure your physical environment, secure your network, secure your server, secure your public network traffic, secure your private network traffic, encrypt your storage, separate your production systems from your development systems, put your payment information in a separate environment from your application environment. Do not allow data from one layer to move to other layers. For example, do not allow an employee to take data out of the production system.
Least required access policy - Do not give any one user all the credentials necessary to control the entire system. Only give a user what access they need to do the work they are required to do.
Safeguard credentials - Do not store credentials in accessible locations such as a public GitHub repository or a sticky note taped to a monitor. Automatically rotate credentials in order to limit the impact of an exposure. Only award credentials that are necessary to do a specific task.
Public review - Do not rely on obscurity to keep your system safe. Assume instead that an attacker knows everything about your system and then make it difficult for anyone to exploit the system. If you can attack your system, then a hacker will be able to also. By soliciting public review and the work of external penetration testers, you will be able to discover and remove potential exploits.
OWASP
A01 Broken Access Control: when app doesn’t properly enforce permissions, like a user obtaining admin access from a certain link.
A02 Cryptographic Failures: when private data isn’t properly encrypted
A03 Injection: SQL commands are injected into database
A04 Insecure Design: app doesn’t focus on security
A05 Security Misconfiguration: using default passwords, not updating software, etc
A06 Vulnerable and Outdated Components
A07 Identification and Authentication Failures: when app doesn’t prevent attackers from impersonating users (like brute force password guessing)
A08 Software and Data Integrity Failure: external software can compromise security
A09 Security Logging and Monitoring Failures: logs can be accessed by attackers, who will delete them to cover up their presence
A10 Server Side Request Forgery (SSRF): exploit internal server requests to reveal information


Vue: combines HTML, CSS, and JavaScript into one file
Svelte is the same but more compact
In react, CSS is defined outside of the file, but HTML and JS are combined (JSX)
A React component is a JS function that you can sprinkle with markup
Their names must start with capital letters. Return statements must be wrapped with parentheses
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}
Will return Hello world
Elements can be parameters, and attributes can be found with props.who


TypeScript
Adds static type checking to JavaScript
VS Code will give you an error if you use an invalid type
New enumeration shortcut:
type AuthState = 'unknown' | 'authenticated' | 'unauthenticated';


Performance monitoring
Your application should load in less than a second to keep users
Pay attention to following:
Browser application latency: processing of user’s own browser/device
Network latency: impacted by amount of data, bandwidth, and distance from server
Service endpoint latency: impacted by amount of requests and processing time, should be <10 ms
