var path = require('path');
var http = require('http');
var fs = require('fs');
// 图片保存
module.exports = function(imgsrcs, args){
	args = args || {};
	// 保存名
	args.savename = args.savename || path.basename;
	// 保存目录
	args.savedir = path.normalize(args.savedir) || '.';
	// 保存进度
	args.onprogress = args.onprogress || function(){};
	// 保存失败
	args.onerror = args.onerror || function(){};

	mkdir(args.savedir);

	var handcount = 0;
	imgsrcs.forEach(function(v, i){
		http.get(v, function (res) {
			res.setEncoding('binary');//二进制（binary）
			var imageData ='';
			res.on('data',function(data){//图片加载到内存变量
				imageData += data;
			}).on('end',function(){//加载完毕保存图片
				var savename = path.join(args.savedir, args.savename(v));
				fs.writeFile(savename, imageData, 'binary', function (err) {//以二进制格式保存
					++handcount;
					if (err) {
						args.onerror(savename, handcount, err);
					}else{
						args.onprogress(savename, handcount);
					}
				});
			});
		});
	})
}

// 递归创建路径
function mkdir(pth){
	if(fs.existsSync(pth)){return; }
	var dir = path.dirname(pth),
	base = path.basename(pth);
	mkdir(dir);
	fs.mkdirSync(pth);
}