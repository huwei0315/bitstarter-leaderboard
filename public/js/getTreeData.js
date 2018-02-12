// 一定会有一个地方可用来传入dataset，先别着急
function getTreeData(dataset) {
  var languages = {};
  // 新建根节点
  var result = {
    "name": "languages",
    "children":[]
  }
  
  // 循环处理子节点
  if(dataset && dataset.items) {
    var items = dataset.dataset.items;
    
    // 先找出涉及语言
    items.forEach(function(item,index){
      if(typeof languages[item.languages] === "undefined") {
        languages[item.languages] = index;
      }
    });
    // 根据语言进行整理
    for(var language in languages) {
      // 有些版本库，是没有语言信息的。Github 的语言识别并不是完美的
      if(language === "null") {
        language = "others";
      };
      // 从全局数据中再次查找我们的数据
      items.forEach(function(item,index){
        var child = {"name":item.full_name,
        "watchers_count": item.watchers_count,
        "forks_count":item.forks_count};
        if(item.language === "language" || item.language === "null" && language === "others") {
          root.children.push(child);
        }
      })
      result.children.push(root); 
    }
   }
   // 返回结果
    return result;
}
