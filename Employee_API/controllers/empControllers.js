import Employee from "../models/Employee.js";

const postEmp = async(req, res)=>{

    let {EmpName,EmpPlace,EmpPhone} = req.body ;

    try {
        if(!EmpName || !EmpPlace || !EmpPhone){
            return res.status(400).send("Emp details can't be empty")
        }

        let newEmp = await Employee.create(
            {
                EmpName:EmpName ,
                EmpPlace:EmpPlace,
                EmpPhone:EmpPhone
            }
        ) 
        res.status(201).send(newEmp)
    } catch (error) {
            res.status(401).send(error.message)
    }
}

const getEmps = async (req, res)=>{
    try {
        let emps = await Employee.find()
        res.status(201).send(emps)
    } catch (error) {
        res.status(401).send(error.message)
    }
}

const getEmp = async (req, res)=>{
    let {id} = req.params
    
    try {
        let emp =await Employee.findById(id)
        res.status(201).send(emp)
    } catch (error) {
        res.status(401).send(error.message)
    }
}

const putEmp = async(req, res)=>{
    let {id} = req.params

    let {EmpName,EmpPlace,EmpPhone,EmpActive} = req.body ;

    try {
        let updatedEmp = await Employee.findByIdAndUpdate(
            id,
            {EmpName,EmpPlace,EmpPhone,EmpActive} , 
            {new:true}
        )
        res.status(201).send(updatedEmp)
    } catch (error) {
        res.status(401).send(error.message)
        
    }
}

const deleteEmp = async (req,res)=>{
    let {id} = req.params
    try {
        await Employee.findByIdAndDelete(id)
    } catch (error) {
        res.status(401).send(error.message)
    }
}

export {postEmp, getEmps, getEmp, putEmp, deleteEmp} ;
