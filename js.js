$(document).ready(function(){
var tet=[{name:"Tết",m1:Date.parse("January 30 ,2025 00:00:00")},{name:"Tết",m1:Date.parse("January 30 ,2025 00:00:00")},{name:"Tết",m1:Date.parse("January 30 ,2025 00:00:00")},{name:"Tết",m1:Date.parse("January 30 ,2025 00:00:00")}];var tetlength=tet.length;
var setClock=function(){
var timeinterval = setInterval(function(){
	var now=new Date();
	var timenow=now.getTime();
for(var i=0;i<tetlength;i++){
	var m30=tet[i].m1-1000*60*60*24;var m2=tet[i].m1+1000*60*60*24;var m4=tet[i].m1+1000*60*60*24*3;
	if(timenow<=m4){
		var timeend=tet[i].m1;var istet=false;
		var theyear=i+2025;var txttet=tet[i].name+" "+theyear;
		var txttitle="Đếm ngược đến tết "+txttet;
		var txttetornot="ĐẾM NGƯỢC ĐẾN TẾT "+txttet;
		var txtdays="Chúc";var txthours="Mừng";var txtmins="Năm";var txtsecs="Mới";
		var txtdaystext="Ngày";var txthourstext="Giờ";var txtminstext="Phút";var txtsecstext="Giây";
		if(timenow>=tet[i].m1){//m1-m4
			//theyear+=1;
			timeend=m4;
			if(timenow>=m2){//almostover
				txttetornot="Sắp hết tết rồi!!!";
			}else{//tet
				istet=true;txttetornot="Tết rồi!!!Tết rồi!!!";
				txtdaystext="An";txthourstext="Khang";txtminstext="Thịnh";txtsecstext="Vượng";
			}
		}
		else{//almostcoming
		}
		if (!istet){
			var t=timeend-timenow;
			txtsecs=Math.floor((t/1000)%60);txtmins=Math.floor((t/1000/60)%60);txthours=Math.floor((t/(1000*60*60))%24);txtdays=Math.floor(t/(1000*60*60*24));
		}
		$('#tetornot').text(txttetornot);
		$('#days').text(txtdays);
		$('#hours').text(txthours);
		$('#mins').text(txtmins);
		//$('#mins').text(('0'+txtmins).slice(-2));
		$('#secs').text(txtsecs);
		//$('#secs').text(('0'+txtsecs).slice(-2));
		$('#days-text').text(txtdaystext);
		$('#hours-text').text(txthourstext);
		$('#mins-text').text(txtminstext);
		$('#secs-text').text(txtsecstext);
		$('#tet').text(txttet);
		if(timenow>=m30){//30-m4
		$("html").css({"background":"radial-gradient(ellipse at bottom, #efe81d 0%, #f80f1f 100%)"});
		$(".clock").toggleClass('tet');
		$(".clock .text").toggleClass('tet');
		}
		document.title=txttitle;
		$('meta[name="description"]').attr("content", "Còn bao nhiêu ngày đến tết nguyên đán "+txttet+"?");
		$('meta[property="og\\:title"]').attr("content", txttitle);
		$('meta[property="og\\:description"]').attr("content", "Còn bao nhiêu ngày đến tết nguyên đán "+txttet+"?");
		$('meta[property="og\\:image"]').attr("content", "tet.jpg");
		break;
	}
}},1000);}
setClock();
//$(".clock").hover(function(){$(this).toggleClass('colorlight');});
});