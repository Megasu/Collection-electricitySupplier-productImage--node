// 存放API相关代码

 
// 调试输出文件
// console.log =console.warn =console.error=console.info=console.dir = function(){
// 	var fs = require('fs');
// 	[].forEach.call(arguments, function(v, i){
// 		if(typeof v =='object'){
// 			try{
// 				v = JSON.stringify(v);
// 			}catch(ex){
// 				// throw ex;
// 			}
// 		}
// 		fs.writeFile('console.js', v + '\n', {flag: 'w'}, function(error){
// 			if(error)throw error;
// 		})
// 	})
// }

var saveImages = require('../lib/saveImages');
module.exports = function (type, urls){
	if(['suning','tmall'].indexOf(type)==-1) type = 'suning';
	urls = [].slice.call(arguments, 1);
	var getImages = require('../lib/getImages_' + type);
	urls.forEach(function(url){
		getImages(url, function(args){
			var srcs = args.images;
			saveImages(srcs, {
				savedir:'output/'+args.title,
				onprogress: function(name, count){
					console.log(count/srcs.length*100+'%', name);
				},
				onerror:function(name, count, err){
					console.log(count/srcs.length*100+'%', '保存失败：'+name+" error: " + err.message)
				}
			})
		})
	})
}
