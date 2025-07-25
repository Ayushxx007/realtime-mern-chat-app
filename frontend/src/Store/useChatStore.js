import { create} from "zustand";
import toast from "react-hot-toast";
import {axiosInstance} from "../lib/axios.js";

export const useChatStore = create((set) => ({
  messages: [],
  users:[],
  selectedUser:null,
  isUsersLoading: false,
  isMessagesLoading:false,



  getUsers:async()=>{
    set({isUsersLoading:true});
    try {
      const response = await axiosInstance.get('messages/users');
      set({users: response.data});
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to load users");
    
    }finally {
      set({isUsersLoading: false});
    }

  },
  getMessages:async(userId)=>{
    set({isMessagesLoading:true});
    try {
      const response = await axiosInstance.get(`messages/${userId}`);
      set({messages: response.data});
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Failed to load messages");
    
    }finally {
      set({isMessagesLoading: false});
    }


  }



 
}));   