import models from "../models";
import mongoose from "mongoose";

export const saveUser = async(user)=>{
    const userDoc = new models.User({username:user.username, createdAt:new Date()})
    const savedUser = await userDoc.save();
    return savedUser;
}

export const getAllUser = async ()=>{
    const User = models.User;
    const users = await User.find({});
    return users;
}


export const updateById = async(user)=>{
    const _id = user._id;
    const _user = await models.User.findById(_id);
    if(_user){
        _user.username = user.username;
        _user.save();
        return _user;
    }
    return null;
}

export const deleteById = async (id)=>{
    const _id = mongoose.Types.ObjectId(id);
    const result = await models.User.deleteOne(_id);
    return result;
}

