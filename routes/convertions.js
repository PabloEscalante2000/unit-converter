import express from "express"
import { convLength } from "../helpers/convertions.js"
import { convertLength } from "../helpers/function.js"

const router = express.Router()

// ? Lenght Convertions

router.get("/length",(req,res,next) => {

    const { unit, from , to } = req.query;

    let aviable = false;
    let response = 0;

    if(typeof unit !== "undefined" && typeof from !== "undefined" && typeof to !== "undefined"){
        if( !isNaN(Number(unit)) && convLength[from] && convLength[to]){
            aviable = true
            response = convertLength(Number(unit))
        }
    }

    res.render("components/main",{pageTitle:"Unit Converter - Length",path:"/converter/length", aviable:aviable, unit:unit, from: from, to:to, response:response})
})

export default router

