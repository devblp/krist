import Notification from "../Models/notification.js";
import User from "../Models/userM.js";
import catchAsync from "../Utils/catchAsync.js";



export const creatNotification = catchAsync(async(userId,type,message)=>{
    const newNotification = await Notification.create({
        user:userId,
        type,
        message
    })
    console.log(type)
    const user = await User.findByIdAndUpdate(userId,{$push:{notifications:newNotification._id}},{new:true})
    return user
})

export const getNotifications = catchAsync(async(userId)=>{
    const notificatins = await Notification.find({user:userId}).sort({createdAt :-1})
    return notificatins
})


export const readNotifications = catchAsync(async(notificationId)=>{
    const RedNotification = await Notification.findByIdAndUpdate(
        notificationId,
        {isRead:true},
        {new:true}
    )
    return RedNotification
})

export const deleteNotification = catchAsync(async(notificationId)=>{
    await Notification.findByIdAndDelete(
        notificationId
    )
    return true
})

export const deleteAllNotification = catchAsync(async(userId)=>{
    await Notification.deleteMany({user:userId})
    return true
})