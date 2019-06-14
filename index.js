var fspath = require('path');

var faIcons = function(path, options) {
	var settings = {
		class: 'fas',
		...options,
	};

	var base = fspath.basename(path);
	return settings.class + ' ' + faIcons.index.find(i => i.re.test(base)).icon;
};

faIcons.index = [
	{re: /\.(avi|mpg|mp4)$/, icon: 'fa-file-video'},
	{re: /\.(bmp|jpg|gif|png|webm)$/, icon: 'fa-file-image'},
	{re: /\.(bz2|gz|gzip|rar|tar|zip)$/, icon: 'fa-file-archive'},
	{re: /\.(c|js|r|ts|vbs)$/, icon: 'fa-file-code'},
	{re: /\.(csv)$/, icon: 'fa-file-csv'},
	{re: /\.(doc)$/, icon: 'fa-file-word'},
	{re: /\.(mp3|wav)$/, icon: 'fa-file-audio'},
	{re: /\.(pdf)$/, icon: 'fa-file-pdf'},
	{re: /\.(ppt)$/, icon: 'fa-file-powerpoint'},
	{re: /\.(tsv|xls)$/, icon: 'fa-file-spreadsheet'},
	{re: /./, icon: 'fa-file'},
];


module.exports = faIcons;
