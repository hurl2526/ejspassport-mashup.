const express = require('express');
const app = express();
const path = require('path')
const axios = require ('axios')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))


app.get('/',(req,res)=> {

  let name = 'Pat'
  res.render('movies',{name});//render looks at above dirname first(views)
})

app.get('/movies',(req,res)=>{
  res.render('movies')
})

app.get('/random',(req,res)=>{
  axios.get('https://randomuser.me/api/?results=20')

.then(data => 
  // console.log(data.data.results))
  res.render('random',{data}))
.catch(error => console.log(error))
  // res.render('random',people)
})

// app.get('/loop', (req,res)=>{
// let places = [
//   {city:'jamestown', state:'NY'},
//   {city:'lakewood', state:'NY'},
//   {city:'buffalo', state:'NY'}
// ]


//   res.render('index',{places});
// })

app.get('/movies',(req,res)=>{
  res.render('about')
})

app.get('/movies',(req,res)=>{
  res.render('about')
})


//bootstarp

// app.get('/boot',(req,res)=>{
//   res.render('original')
// })

// app.get('/:dog/:cat',(req,res)=> {
// let bear = req.query.search;//localhost333/...?search=papa
//   let dog = req.params.dog
//   let cat = req.params.cat
//   res.render('index', {myDog: dog,cat, bear} );//render looks at above dirname first(views)
// })
app.listen(3005, ()=>{
  console.log(`listening on 3005`);
});

// 1. <%  no output
// 2. <%= Outputs the value into the template
// 3. <%- Outputs the unescaped value into the template  (can be used for includes)
// 4. <%# Comment tag, no execution, no output
// 5. <%% Outputs a literal '<%'
// 6.  %> Plain ending tag
// 7. #%> End the comment tag