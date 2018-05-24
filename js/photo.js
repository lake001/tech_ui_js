var pht = {};

pht.data = [
	"pic_001.jpg",
	"pic_002.jpg",
	"pic_003.jpg",
	"pic_004.jpg",
	"pic_005.jpg",
	"pic_006.jpg",
	"pic_007.jpg",
	"pic_008.jpg",
	"pic_009.jpg",
	"pic_010.jpg",
	"pic_011.jpg",
	"pic_012.jpg",
	"pic_013.jpg",
	"pic_014.jpg",
	"pic_015.jpg",
	"pic_016.jpg",
	"pic_017.jpg",
	"pic_018.jpg",
	"pic_019.jpg",
	"pic_020.jpg",
	"pic_021.jpg",
	"pic_022.jpg",
	"pic_023.jpg",
	"pic_024.jpg",
	"pic_025.jpg",
	"pic_026.jpg",
	"pic_027.jpg",
	"pic_028.jpg"
];
pht.groupNumber = 1;
pht.showNumber = 1;
pht.groupSize = 6;

pht.showBig = function() {
	dk.$("bigPhotoSrc").src = "images/"+ pht.data[pht.showNumber];
};
pht.showThumb = function(group) {
	var ul = dk.$("smallPhotosList");
	ul.innerHTML='';
	var start = (group-1)*pht.groupSize;
	var end = group*pht.groupSize;
	for (var i=start; (i<end && i<pht.data.length); i++) {
		var li = document.createElement("li");
		li.innerHTML = '<img src="images/'+pht.data[i]+ '" id="thumb'+i+' " width="80" height="40"/>';
		
	
		(function(i) {
			dk.addListener(li,"click", function() {
				pht.showNumber = i;
				pht.showBig();
			});
		})(i);
		
		ul.appendChild(li);
		
	};
};
pht.init = function() {
	pht.showThumb(1);
	dk.addListener(dk.$("prve"),"click", function () {
		pht.prveThumb();
	});
	dk.addListener(dk.$("next"),"click", function() {
		pht.nextThumb();
	});
	dk.addListener(document,"keyup", function (e) {
		e = e || event;
		if (e.keyCode ==37) {
			pht.prveThumb();
		}
		if (e.keyCode ==39) {
			pht.nextThumb();
		}
	});
}
pht.nextThumb = function() {

	pht.groupNumber ++;
	pht.showNumber = (pht.groupNumber-1)*pht.groupSize;
	pht.showThumb(pht.groupNumber);
	pht.showBig();
};
pht.prveThumb = function() {

	pht.groupNumber --;
	pht.showNumber = (pht.groupNumber-1)*pht.groupSize;
	pht.showThumb(pht.groupNumber);
	pht.showBig();
};


pht.init();
