// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const page=event.page;
  const start=(page-1)*50;
  const res=await db.collection('near_hot').skip(start).limit(50).orderBy("time","desc").get();
  var data=res.data;
  for(var i=0;i<data.length;i++)
  {
    delete data[i]["content"];
  }
  return data;
}