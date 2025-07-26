const express = require('express')
// const fs = require('fs')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

// REACT JS  Front
app.get('/', (req, res) => {

  console.log('path /')

  // const file = fs.readFileSync('/home/ayoub/Desktop/@itcomp/edition_3/js/ex3/git-exercise/index.html',{encoding: "utf-8"})
  // Module Native  | module npm 
  console.log(file)

  res.send(file)

//   res.send(`
//     <!DOCTYPE html>
// <html>
//   <head>
//     <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Matemasie&family=Whisper&display=swap" rel="stylesheet">
//     <title>Ex1 </title>
//     <link href="./style.css" rel="stylesheet" />
//   </head>
//   <body>
//     <nav class="navbar">
//       <p> Navbar</p>
//       <ul>
//         <li>home</li>
//         <li> about us</li>
//       </ul>
//       <button>Login</button>
//     </nav>
//     <ul id="list">
//     </ul>
//     <script src="./index.js" >
//     </script>
//   </body>
//   </html>
//     `)
})

app.get('/style.css', (req, res) => {

  res.set('Content-Type','text/css') 

  res.send(`

    body{
    background: orange;
    }
    .navbar{
display: flex;
justify-content: space-between;
border-bottom: 1px solid;
}

.navbar ul{
    display: flex;
    list-style-type: none;
}

.navbar ul li{
    margin: 0 10px;
}

.slider{

    width: 600px;
    margin: 100px auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

#left-btn{
    position: absolute;
    left: 0;
}

#right-btn{
    position: absolute;
    right: 0;
}
    `)
})

app.get('/index.js', (req, res) => {

  res.send(`

    const fetchData = async () => {
    
        const response = await fetch("http://localhost:3000/products")
        const data = await response.json()
 
        console.log(data)
        const list = document.getElementById("list")
    
    }

   fetchData().then()






    `)
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.get('/products',async (req,res)=> {

     const data = [
        {
            quantity: 60
            , image: "/tech-logo/css.svg",
             name: "speaker",
              price: "1300"
        },
        {
            quantity: 120
            , image: "/tech-logo/css.svg",
             name: "iphone",
              price: "1300"
        }
        ,{
            quantity: 180
            , image: "/tech-logo/css.svg",
             name: "tv",
              price: "1300"
        }
    ]

    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
