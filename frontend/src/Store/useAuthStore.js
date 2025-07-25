import { create } from 'zustand';
import { axiosInstance } from '../../lib/axios.js';
import { data } from 'react-router';
import toast from "react-hot-toast";


export const userAuthStore=create((set)=>({
    authUser:null,
    isCheckingAuth:true,
    isSigningUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,


    checkAuth:async()=>{

        try{
            const res =await axiosInstance.get("/auth/check");

            set({authUser:res.data});


        }catch(error){

            console.log(error);

               set({authUser:null});
               


        }finally{

            set({isCheckingAuth:false});

        }

        


       
     

    },

      signup:async(data)=>{
        set({isSigningUp:true});

        try{
          const res=  await axiosInstance.post("/auth/signup",data);
          toast.success("Account Created Successfully");
          set({authUser:res.data});



        }catch(error){
            console.log(error);
            toast.error(error.response.data.message);



        }
       


      },

      logout:async()=>{
        try{

         const res=   await axiosInstance.post("/auth/logout");
         set({authUser:null});
         toast.success("logout successfully");
        }catch(error){
               toast.error(error.response.data.message);
            


        }

      },

      login:async(data)=>{
        set({isLoggingIn:true});
        try{
            const res =await axiosInstance.post("/auth/login",data);
            set({authUser:res.data});
            toast.success("Logged In Successfull");

        }catch(error){
            toast.error(error.response.data.message);
            console.log(error);

        }finally{
            set({isLoggingIn:false});

        }


      }
    
    
             

}));