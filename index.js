const download = require('images-downloader').images;

const dest = 'images'

const images = [
'http://imagizer.imageshack.us/a/img902/305/GdhaBC.jpg',
'http://imagizer.imageshack.us/a/img742/3662/00xl37.jpg',
'http://imagizer.imageshack.us/a/img674/4285/xk0pz3.png',
'http://imagizer.imageshack.us/a/img538/577/zRBu5o.png',
'http://imagizer.imageshack.us/a/img537/953/au7Bhs.png',
'http://imagizer.imageshack.us/a/img538/1994/FhcBHJ.jpg',
'http://imagizer.imageshack.us/a/img901/5624/473MbU.jpg',
'http://imagizer.imageshack.us/a/img906/8427/X600qq.jpg',
'http://imagizer.imageshack.us/a/img538/15/sT9KUq.jpg',
'http://imagizer.imageshack.us/a/img540/4694/WYMaaR.jpg',
'http://imagizer.imageshack.us/a/img745/4745/y4h6rc.jpg',
'http://imagizer.imageshack.us/a/img536/930/0399af.jpg',
'http://imagizer.imageshack.us/a/img540/2092/e7aeca.jpg',
'http://imagizer.imageshack.us/a/img540/2203/a91d96.jpg',
'http://imagizer.imageshack.us/a/img537/8233/bb6a20.jpg',
'http://imagizer.imageshack.us/a/img540/484/c65630.jpg',
'http://imagizer.imageshack.us/a/img853/2861/dcnk.jpg',
'http://imagizer.imageshack.us/a/img856/2647/lt99.jpg',
'http://imagizer.imageshack.us/a/img823/7995/95gf.png',
'http://imagizer.imageshack.us/a/img850/6732/q3gd.png',
'http://imagizer.imageshack.us/a/img823/4608/0kch.jpg',
'http://imagizer.imageshack.us/a/img829/3757/mqze.jpg',
'http://imagizer.imageshack.us/a/img834/161/ru5w3.jpg',
'http://imagizer.imageshack.us/a/img822/8674/8dzb.jpg',
'http://imagizer.imageshack.us/a/img837/4568/hydf.jpg',
'http://imagizer.imageshack.us/a/img850/549/o146.jpg',
'http://imagizer.imageshack.us/a/img822/6897/bmot.jpg',
'http://imagizer.imageshack.us/a/img856/9180/jhiy.jpg',
'http://imagizer.imageshack.us/a/img842/8889/mukih.jpg',
'http://imagizer.imageshack.us/a/img841/3909/1ll4w.jpg',
'http://imagizer.imageshack.us/a/img853/2387/ewtc.jpg',
'http://imagizer.imageshack.us/a/img823/4071/z4nf.jpg',
'http://imagizer.imageshack.us/a/img822/2047/p54p.jpg',
'http://imagizer.imageshack.us/a/img843/7514/t783o.jpg']
   
   
download(images, dest)
.then(result => { 
	console.log('Images downloaded', result);	
})
.catch(error => console.log("downloaded error", error))