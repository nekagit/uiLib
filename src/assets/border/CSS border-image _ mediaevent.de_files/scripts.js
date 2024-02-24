{
/** Accordion **/
function createClass(name,rules){
	const style=document.createElement('style');
	style.type='text/css';
	document.querySelector('head').appendChild(style);
	style.sheet.insertRule(name+"{"+rules+"}",0);
}

const mql = window.matchMedia("screen and (min-width:980px)");
const hf=document.querySelectorAll('#nav_menu h4');

function accordion (mql) {
	const ul=document.querySelectorAll('#nav_menu ul');
	let maxheight = 0;
	
	for (let i=0; i<ul.length; i++) {
		if (ul[i].clientHeight > maxheight){
			maxheight=ul[i].clientHeight;
		}
		ul[i].classList.add('acco');
	}
	
	if (mql.matches) {
		console.log ("matches", maxheight)
		createClass('.open','height:' + parseInt(maxheight + 20) + 'px !IMPORTANT;');
	} else {
		createClass('.open','height:auto !IMPORTANT; max-height:1400px;');
	}
}
accordion (mql);

let found=false;
let fields=window.location.pathname.split('/');
let thisDoc=fields[fields.length-1];
let listItem=document.querySelectorAll('#nav_menu a');

for (let i=0;i<listItem.length;i++) {
	let parts = listItem[i].getAttribute('href').split('/');
	let URL=parts[parts.length-1];
	if (URL == thisDoc){
		listItem[i].parentNode.parentNode.classList.add('open');
		listItem[i].setAttribute ('style','border-left:6px solid var(--me-color)');
		found=true;
	}
	if (found==true){break;}
}

if(found==false){
	if (ul[0]){
		ul[0].classList.add('open');
	}
}

let len=hf.length;
for (let i=0;i<len;i++){
	hf[i].onclick=function (evt) {
		document.querySelector('.open').classList.toggle('open');
		this.nextElementSibling.classList.toggle('open');
	}
}

// Social Media Icons 

const social = document.getElementById("social");
const siteTitle=document.querySelector ('title').innerHTML;
const siteURL=document.querySelector('link[rel=canonical]').getAttribute('href');

let siteDescription='';
if (document.querySelector('script[type="application/ld+json"]')) {
	const jsonld = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText);
	const siteDescription = jsonld.description;
	
	const tmp = jsonld.primaryImageOfPage;
	const siteMedia = tmp.replace(/\[+([^\][]+)]+/g,"$1");
	
	if (document.getElementById("soface")) {
		document.querySelector('#soface').addEventListener ('click',function(){
			var url='https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(siteURL) + '&amp;title=' + encodeURI(siteTitle);
			window.open(url, '_blank').focus();
		});
	}

	if (document.getElementById("sopint")) {
		document.getElementById("sopint").addEventListener ("click", function () {
			const url='https://pinterest.com/pin/create/bookmarklet/?media='+encodeURI(siteMedia)+'&amp;url='+encodeURI(siteURL)+'&amp;is_video=false&amp;description='+encodeURI(siteDescription);
			window.open(url, '_blank').focus();
		});
	}

	if (document.getElementById("sotwit")) {
		document.getElementById("sotwit").addEventListener('click',function(){
			const title = encodeURI(document.querySelector("meta[name='twitter:title']").getAttribute ("content"));
			const mediaUrl   = encodeURI(document.querySelector("meta[name='twitter:url']").getAttribute ("content"));
			const url = `https://twitter.com/intent/tweet?text=${title}&url=${mediaUrl}`
			//console.log (url);
			window.open(url, '_blank').focus();		
		});
	}
}

if (localStorage["cid"] != null ) {
	const vanilla = document.createElement("script");
	vanilla.src = "/wp-content/themes/cantate/js/vanilla.js";
	document.body.appendChild(vanilla);
}
	
};

