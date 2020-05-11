// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const id=event.id;
  res=await db.collection('study').where({
    _id:id,
  }).get();
  return res.data[0].content;
}