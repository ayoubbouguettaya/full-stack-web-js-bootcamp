//vous pouvez lancer votre serveur par ```node exemple1``` 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Handling Query Parameters
//Concept: Extracting values from query parameters (?name=Ahmed).
// http://localhost:3000/greet?name=Ahmed

app.get('/greet', (req, res) => {
    const name = req.query.name;

    res.send(`Hello, ${name}!`);
});


//Handling URL Parameters
//Concept: Extracting dynamic route parameters (/user/123)

app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Handling POST Requests (JSON Body)

app.use(express.json());

app.post('/data', (req, res) => {
  res.json({ message: 'Data received', data: req.body });
});

// Handling Form Data (URL Encoded)
// Concept: Handling form submissions (application/x-www-form-urlencoded).
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    res.send(`Received: ${req.body.name}`);
});

// Sending Different Response Types
// Concept: Responding with different content types.

app.get('/text', (req, res) => res.send('Plain text response'));
app.get('/json', (req, res) => res.json({ message: 'JSON response' }));
app.get('/html', (req, res) => res.send('<h1>HTML Response</h1>'));

//Middleware to Modify Request
// Concept: Modifying the request object using middleware.

app.use((req, res, next) => {
  req.customProperty = 'Injected by Middleware';
  next();
});

app.get('/middleware', (req, res) => {
  res.send(req.customProperty);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})