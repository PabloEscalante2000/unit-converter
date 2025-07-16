import express from "express"
import bodyParser from "body-parser"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
import router404 from "./routes/404route.js"
import routerConverter from "./routes/convertions.js"

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.set("view engine","ejs")
app.set("views","views")

// ? Uso de bodyParser y formularios
app.use(bodyParser.urlencoded({extended:false}))

// ? Habilita usar archivos estáticos
app.use(express.static(path.join(__dirname,"public")))

// * Ruta default
app.get("/",(req,res,next) => {
    res.render("components/main",{pageTitle: "Unit Converter", path:"/"})
})

// ? Enlaces donde estarán las conversiones
app.use("/converter",routerConverter)

app.use(router404)

app.listen(3000)