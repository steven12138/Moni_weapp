// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const id=event.id;
  var res=await db.collection('study').where({
    _id:id,
  }).get();
  res=res.data[0];
  delete res["content"];
  return res;
}