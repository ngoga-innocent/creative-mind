import  express from "express";
import { v4 as uuidv4 } from 'uuid';

const router =express.Router();

let users =[];


router.get('/',(req,res) =>{
    
// res.send("hello");
res.send(users);
});

router.post('/',(req,res)=>{
    const user =req.body;
users.push({ ... user, id:uuidv4()})
    res.send(`User with the name ${user.username} added sucessfully`);
});
router.get('/:id',(req,res)=>{
    const {id }=req.params;
    const founduser = users.find((user)=>user.id ==id)

    res.send(founduser);
});

router.delete('/:id',(req,res)=>{
    const { id }=req.params;

    users=users.filter((user)=>user.id !==id );
    res.send(`user with id ${id} is deleted`);
});
router.patch('/:id',(req,res) =>{
const { id }=req.params;
const { username,fullname,phone,password,isAdmin,isSeller }=req.body;

const user= users.find((user) =>users.id==id);

if (username){
    user.username=username;
}
if (fullname){
    user.fullname=fullname;
}
if (phone){
    user.phone=phone;
}
if (password){
    user.password=password;
}
if (isAdmin){
    user.isAdmin=isAdmin;
}
if (isSeller){
    user.isSeller=isSeller;
}

res.send(`User with id @{id} has been updated`)

});

export default router;