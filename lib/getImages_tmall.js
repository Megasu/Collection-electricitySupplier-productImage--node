var getHtmlParser = require('../lib/getHtmlParser');
// 天猫 获取图片
module.exports = function(url, callbackfn){
	getHtmlParser(url, function(DomUtils, doms){
		var el = DomUtils.getElementsByTagName('img', DomUtils.getElements({id:'J_UlThumb'}, doms)),
		title = DomUtils.getElements({tag_name:'h1'}, DomUtils.getElements({class:'tb-detail-hd'}, doms))[0].children[0].data,
		srcs=[];
		el.forEach(function(v){
			srcs.push(v.attribs.src.replace('_60x60q90.jpg',''));
		});
		callbackfn({
			title: title.trim(),
			images:srcs
		})
	},{encoding: 'gbk'})
}
