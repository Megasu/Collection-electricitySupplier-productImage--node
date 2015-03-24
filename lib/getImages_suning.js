var getHtmlParser = require('../lib/getHtmlParser');
// 苏宁 获取图片
module.exports = function(url, callbackfn){
	getHtmlParser(url, function(DomUtils, doms){
		var el = DomUtils.getElementsByTagName('img', DomUtils.getElements({class:'thumbnai-box'}, doms)),
		title = DomUtils.getElements({tag_name:'h1', class:'wb'}, doms)[0].attribs.title,
		srcs=[];
		el.forEach(function(v){
			srcs.push(v.attribs.src3);
		})
		callbackfn({
			title: title,
			images:srcs
		})
	})
}
