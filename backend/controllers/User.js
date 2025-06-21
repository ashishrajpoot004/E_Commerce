import {User} from '../model/User.js'


export const register=(req,res)=>{
    const {name,email,password}=req.body;
    try {
        const user = User.create({
            name,
            email,
            password,
        })
        res.json({user,message:"user created",success:true})
        
    } catch (error) {
        res.json(
            {
                message:"USer not found",
                success:false,
            }
            
        )
        
    }
}