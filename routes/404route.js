import express from "express"

const router = express.Router()

router.use((req,res,next) => {
    res.status(404).render("components/main",{pageTitle:"Page not found"})
})

export default router