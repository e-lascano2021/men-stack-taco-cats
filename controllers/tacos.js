import { Taco } from "../models/taco.js"



function index(req, res){
  //console.log ('tacos', req)
  //Find all tacos
  Taco.find({})
    //when we have all tacos
  .then(tacos => {
    //do something with the tacos
    res.render("tacos/index", {
      title: "🌮 ",
      tacos,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/tacos")
  })
}



export {
  index
}