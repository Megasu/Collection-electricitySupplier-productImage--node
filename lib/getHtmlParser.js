var htmlparser  = require('htmlparser');
var request = require('request')
var iconv = require('iconv-lite');
iconv.extendNodeEncodings();
/**
 * 使用htmlparser解析html字符串，并返回解析过的object和dom分析工具
 * @param  {string} url        请求路径
 * @param  {function} callbackfn 回调函数
 *     {object}  DomUtils  dom分析工具
 *     {array}  doms  分析完成的doms tree
 */
module.exports= function(url, callbackfn, args){
	args = args || {};
	request({
		url: url,
		encoding: args.encoding || 'utf-8'
	}, function(err, res, html){
		if(err) throw err;
		if(200 != res.statusCode){throw new Error('读取失败', res.statusCode); }
		var handler = new htmlparser.DefaultHandler(function(err, dom){
			if(err)throw err;
			callbackfn(htmlparser.DomUtils, dom);
		})
		var parser = new htmlparser.Parser(handler);
		parser.parseComplete(html);
	}).on('error', function(e) {
	  	console.log("错误：" + e.message);
	});
}