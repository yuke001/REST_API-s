import express from "express";
import {postEmp,getEmps,getEmp,putEmp,deleteEmp} from "../controllers/empControllers.js"


let router = express.Router()

router.post("/", postEmp) ; 

router.get("/", getEmps)

router.get("/:id" , getEmp)

router.put("/:id", putEmp)

router.delete("/:id" , deleteEmp)

export default router ;