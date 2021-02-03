	var t1=0;
	var t2=0;
	var t3=0;
	var t4=0;
	var t5=0;
	var t6=0;
	var t7=0;
	var t8=0;
	var t9=0;
	var t10=0;
	var t11=0;
	var t12=0;
	var t13=0;
	var t14=0;
	var t15=0;
	var t16=0;
	var uh;

//A function that changes image 
function changeImg(id, sid){
	var ur = $("#"+id).attr("src");
	var val = $("#"+sid).val();
	$("#"+id).attr("src", val);
	$("#"+sid).val(ur);
	console.log(ur);
}

//A function that concatenate number to money string
function conc(itb){
		console.log(itb);
		var x = itb;
		y= x.toString();
		console.log(x.length);
		console.log(y);
		var up=y.search(",");
		console.log(up);
		var ux = y.substring(0,up);
		console.log(ux);
		var uv = y.substring(up+1,y.length);
		console.log(uv);
		 uh = ux.concat(uv);
		console.log(uh);
		uh= parseInt(uh);
		console.log(uh);
		return uh;
}
//A function that gets the subtotal of all the item in the cart.
function subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16){
						var subtotal=t1+t2+t3+t4+t5+t6+t7+t8+t9+t10+t11+t12+t13+t14+t15+t16;
						$("#total").text(subtotal);
						console.log(uh);
						$("#tota").show();
}

function update(um,ou){
		var tet1;
		var tet2;
		var tet3;
		var tet4;
		var tet5;
		var tet6;
		var tet7;
		var tet8;
		var tet9;
		var tet10;
		var tet11;
		var tet12;
		var tet13;
		var tet14;
		var tet15;
		var tet16;
		
		if(ou =="qty1"){
			if(um<1){
				$("#qty1").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t1 = va1 * parseInt(um);
			tet1 = um;
			console.log(tet1);
		}
		else{
			if($("#chkut").css("display")=="inline"){
				tet1=$("#qty1").val();
			}
			else{
				tet1=0;
			}
		}
		
		if(ou == "qty2"){
			if(um < 1){
				$("#qty2").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t2 = va2 * parseInt(um);
			tet2 = um;
		}
		else{
			if($("#chkut2").css("display")=="inline"){
				console.log("kkomp");
				tet2=$("#qty2").val();
			}
			else{
				console.log("kkomp1");
				tet2=0;
			}
		}
		
		if(ou=="qty3"){
			if(um<1){
				$("#qty3").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t3 = va3 * parseInt(um);
			tet3 = um;
		}
		else{
			if($("#chkut3").css("display")=="inline"){
				tet3=$("#qty3").val();
				console.log("kkompuy");
			}
			else{
				tet3=0;
			}
		}
		if(ou=="qty4"){
			if(um<1){
				$("#qty4").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t4 = va4 * parseInt(um);
			tet4 = um;
		}
		else{
			if($("#chkut4").css("display")=="inline"){
				tet4=$("#qty4").val();
			}
			else{
				tet4=0;
			}
		}
		if(ou=="qty5"){
			if(um<1){
			$("#qty5").val(1);
			um=1;
			}
			console.log(um);
			console.log(uh);
			t5 = va5 * parseInt(um);
			tet5 = um;
		}
		else{
			if($("#chkut5").css("display")=="inline"){
				tet5=$("#qty5").val();
			}
			else{
				tet5=0;
			}
		}
		if(ou=="qty6"){
			if(um<1){
				$("#qty6").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t6 = va6 * parseInt(um);
			tet6 = um;
		}
		else{
			if($("#chkut6").css("display")=="inline"){
				tet6=$("#qty6").val();
			}
			else{
				tet6=0;
			}
		}
		if(ou=="qty7"){
			if(um<1){
				$("#qty7").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t7 = va7 * parseInt(um);
			tet7 = um;
		}
		else{
			if($("#chkut7").css("display")=="inline"){
				tet7=$("#qty7").val();
			}
			else{
				tet7=0;
			}
		}
		if(ou=="qty8"){
			if(um<1){
				$("#qty8").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t8 = uh * parseInt(um);
			tet8 = um;
		}
		else{
			console.log($("#chkut8").css("display"));
			if($("#chkut8").css("display")=="inline"){
				console.log("mup");
				tet8=$("#qty8").val();
			}
			else{
				tet8=0;
			}
		}
		if(ou=="qty9"){
			if(um<1){
				$("#qty9").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t9 = va9 * parseInt(um);
			tet9 = um;
		}
		else{
			if($("#chkut9").css("display")=="inline"){
				tet9=$("#qty9").val();
			}
			else{
				tet9=0;
			}
		}
		if(ou=="qty10"){
			if(um<1){
				$("#qty10").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t10 = va10 * parseInt(um);
			tet10 = um;
		}
		else{
			if($("chkut10").css("display")=="inline"){
				tet10=$("#qty10").val();
				console.log("iom");
			}
			else{
			console.log("mahah");
				tet10=0;
			}
		}
		
		if(ou=="qty11"){
			if(um<1){
				$("#qty11").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t11 = va11 * parseInt(um);
			tet11 = um;
		}
		else{
			if($("#chkut11").css("display")=="inline"){
				tet11=$("#qty11").val();
			}
			else{
				tet11=0;
			}
		}
		
		if(ou=="qty12"){
			if(um<1){
				$("#qty12").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t12 = va12 * parseInt(um);
			tet12 = um;
		}
		else{
			if($("#chkut12").css("display")=="inline"){
				tet12=$("#qty12").val();
			}
			else{
				tet12=0;
			}
		}
		if(ou=="qty13"){
			if(um<1){
				$("#qty13").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t13 = va13 * parseInt(um);
			tet13 = um;
		}
		else{
			if($("#chkut13").css("display")=="inline"){
				tet13=$("#qty13").val();
			}
			else{
				tet13=0;
			}
		}
		if(ou=="qty14"){
			if(um<1){
				$("#qty14").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t14 = va14 * parseInt(um);
			tet14 = um;
		}
		else{
			if($("#chkut14").css("display")=="inline"){
				tet14=$("#qty14").val();
			}
			else{
				tet14=0;
			}
		}
		if(ou=="qty15"){
			if(um<1){
				$("#qty15").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t15 = va15 * parseInt(um);
			tet15 = um;
		}
		else{
			if($("#chkut15").css("display")=="inline"){
				tet15=$("#qty15").val();
			}
			else{
				tet15=0;
			}
		}
		if(ou=="qty16"){
			if(um<1){
				$("#qty16").val(1);
				um=1;
			}
			console.log(um);
			console.log(uh);
			t16 = va16 * parseInt(um);
			tet16 = um;
		}
		else{
			if($("#chkut16").css("display")=="inline"){
				tet16=$("#qty16").val();
				console.log("mosd");
			}
			else{
				tet16=0;
			}
		}
		console.log(tet1,tet2,tet3,tet4,tet5,tet6,tet7,tet8,tet9,tet10,tet11,tet12,tet13,tet14,tet15,tet16);
		var iop =parseInt(tet1)+parseInt(tet2)+parseInt(tet3)+parseInt(tet4)+parseInt(tet5)+parseInt(tet6)+parseInt(tet7)+parseInt(tet8)+parseInt(tet9)+parseInt(tet10)+parseInt(tet11)+parseInt(tet12)+parseInt(tet13)+parseInt(tet14)+parseInt(tet15)+parseInt(tet16);
		console.log(iop);
		$("#cartval").text(iop);
		console.log(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
		console.log(um);
		console.log(uh);
		console.log(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
		subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
		
		console.log("hhiii");
}
$(document).ready(function(){
	var x = $("#cartval").text();
	var y = $("#bul").html();	
	var t =$("#sh1").html();
	var lii=$("#itml1").html();
	console.log(t);
	var up = 0 ;
	var lo = 0;
	var ip = 0;
	var puk = 0;
	var pok = 0;
	var tok = 0;
	var rok = 0;
	var lok =0;
	var ra = 0;
	var rb = 0;
	var rc = 0;
	var rd = 0;
	var re = 0;
	var rf = 0;
	var rg = 0;
	var rh = 0;
	
	var ti1=0;
	var ti2=0;
	var ti3=0;
	var ti4=0;
	var ti5=0;
	var ti6=0;
	var ti7=0;
	var ti8=0;
	var ti9=0;
	var ti10=0;
	var ti11=0;
	var ti12=0;
	var ti13=0;
	var ti14=0;
	var ti15=0;
	var ti16=0;

	
				$("#add1").click(function(){
						ti1 = 0 ;
						console.log(up);
						var itb= $("#i1b").text();
						console.log(itb);
						va1 = conc(itb);
					if(up < 1){
						up += 1;
						var tr=$("#sh1").attr("src");
						console.log(tr);
						$(".br1").show();
						var dr = $("#it1").text();
						var drb= $("#it1b").text();
						console.log(dr);
						console.log(lii);
						$("#itml1").show();
						$("#emp").hide();
						$("#itd").append("<b id='fst' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty1' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
						$("#chkut").show();
						$( "#a1" ).show();
						$("#a1").append("<img id='a' src='"+tr+"' style='width:40; height:50px;'/>");	
					}
					else{
							console.log("kk");
							var tp = parseInt($("#qty1").val())+1;
							$("#qty1").val(tp);

					}	
						console.log(ti1+"uuuu");
						console.log(parseInt(ti2+"uuuu"));
						$("#cartval").text(parseInt($("#cartval").text())+1);
						console.log(parseInt($("#qty1").val())+"kkkk");
						console.log(parseInt($("#i1b").text())+"jjjjj");
						t1 = uh * parseInt($("#qty1").val());
						console.log(t1 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
				})
					$("#add2").click(function(){
						ti2 = 0 ;		
						var itb= $("#i2b").text();
						console.log(itb);
						va2 =conc(itb);
						if(lo < 1){
							lo += 1;
							var tr=$("#sh2").attr("src");
							console.log(tr);
							$( "#b1" ).show();
							$("#b1").append("<img id='b' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br2").show();
							var up=$(".br1").css("display");
							console.log(up);
							console.log(y);
							$(".br1").hide();
							$("#emp").hide();
							$("#itml2").show();
							var dr = $("#it2").text();
							var drb = $("#it2b").text();
							console.log(dr);
							$("#itd2").append("<b id='scnd' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty2' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut2").show();
							if($("#fst").css("display") == "inline"){
							$(".br1").css("display","inline");
							console.log("sobonto");
							}
						}
						else{
							var tp = parseInt($("#qty2").val())+1;
							$("#qty2").val(tp);
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t2 = uh * parseInt($("#qty2").val());
						console.log(t2 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add3").click(function(){
						ti3 = 0 ;
						var itb= $("#i3b").text();
						console.log(itb);
						va3 =conc(itb);
						if(ip < 1){
							ip += 1;
							var tr=$("#sh3").attr("src");
							console.log(tr);
							$( "#c1" ).show();
							$("#c1").append("<img id='c' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br3").show();
							var up=$(".br2").css("display");
							console.log(up);
							console.log(y);
							$(".br2").hide();
							$("#emp").hide();
							$("#itml3").show();
							var dr = $("#it3").text();
							var drb = $("#it3b").text();
							console.log(dr);
							$("#itd3").append("<b id='thrd' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty3' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut3").show();
							if($("#scnd").css("display") == "inline"){
								$(".br2").css("display","inline");
								console.log("sobonto");
							}
						}
						else{
							var tp = parseInt($("#qty3").val())+1;
							$("#qty3").val(tp);
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
					
						t3 = uh * parseInt($("#qty3").val());
						console.log(t3 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					
					$("#add4").click(function(){
							ti4 = 0 ;	
							var itb= $("#i4b").text();
								console.log(itb);
								va4 =conc(itb);
							if(puk < 1){
								puk += 1;
								var tr=$("#sh4").attr("src");
								console.log(tr);
								$( "#d1" ).show();
								$("#d1").append("<img id='d' src='"+tr+"' style='width:40; height:50px;'/>");
								$(".br4").show();
								var up=$(".br3").css("display");
								console.log(up);
							console.log(y);
							
							$(".br3").hide();
							$("#emp").hide();
							$("#itml4").show();
							var dr = $("#it4").text();
							var drb = $("#it4b").text();
							console.log(dr);
							$("#itd4").append("<b id='foth' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty4' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut4").show();
							if($("#thrd").css("display") == "inline"){
							$(".br3").css("display","inline");
							console.log("sobonto");
							
							}
						}
						else{
							var tp = parseInt($("#qty4").val())+1;
								$("#qty4").val(tp);
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t4 = uh * parseInt($("#qty4").val());
						console.log(t4 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add5").click(function(){
						ti5 = 0 ;
						var itb= $("#i5b").text();
						console.log(itb);
						va5 =conc(itb);
						if(pok < 1){
							pok += 1;
							var tr=$("#sh5").attr("src");
							console.log(tr);
							$( "#e1" ).show();
							$("#e1").append("<img id='e' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br5").show();
							var up=$(".br4").css("display");
							console.log(up);
							console.log(y);
							$(".br4").hide();
							$("#emp").hide();
							$("#itml5").show();
							var dr = $("#it5").text();
							var drb = $("#it5b").text();
							console.log(dr);
							$("#itd5").append("<b id='five' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty5' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut5").show();
							if($("#foth").css("display") == "inline"){
							$(".br4").css("display","inline");
							console.log("sobonto");
							}
						}
						else{
							var tp = parseInt($("#qty5").val())+1;
							$("#qty5").val(tp);
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t5 = uh * parseInt($("#qty5").val());
						console.log(t5 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add6").click(function(){
						ti6 = 0 ;
						var itb= $("#i6b").text();
						console.log(itb);
						va6 =conc(itb);
						if(tok < 1){
							tok += 1;
							var tr=$("#sh6").attr("src");
							console.log(tr);
							$( "#f1" ).show();
							$("#f1" ).append("<img id='f' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br6").show();
							var up=$(".br5").css("display");
							console.log(up);
							console.log(y);
							$(".br5").hide();
							$("#emp").hide();
							$("#itml6").show();
							var dr = $("#it6").text();
							var drb = $("#it6b").text();
							console.log(dr);
							$("#itd6").append("<b id='six' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty6' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut6").show();
							if($("#five").css("display") == "inline"){
								$(".br5").css("display","inline");
								console.log("sobonto");
							}
						}
						else{
							var tp = parseInt($("#qty6").val())+1;
							$("#qty6").val(tp);
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t6 = uh * parseInt($("#qty6").val());
						console.log(t6 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add7").click(function(){
						ti7 = 0 ;
						var itb= $("#i7b").text();
						console.log(itb);
						va7 =conc(itb);
						if(rok < 1){
							rok += 1
							var tr=$("#sh7").attr("src");
							console.log(tr);
							$( "#g1" ).show();
							$("#g1").append("<img id='g' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br7").show();
							var up=$(".br6").css("display");
							console.log(up);
							console.log(y);
							$(".br6").hide();
							$("#emp").hide();
							$("#itml7").show();
							var dr = $("#it7").text();
							var drb = $("#it7b").text();
							console.log(dr);
							$("#itd7").append("<b id='sev' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty7' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut7").show();
							if($("#six").css("display") == "inline"){
								$(".br6").css("display","inline");
								console.log("sobonto");
							}
						}
						else{
							var tp = parseInt($("#qty7").val())+1;
							$("#qty7").val(tp);
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t7 = uh * parseInt($("#qty7").val());
						console.log(t7 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add8").click(function(){
						ti8 = 0 ;
						var itb= $("#i8b").text();
						console.log(itb);
						va8 =conc(itb);
						if(lok < 1){
							lok += 1
							var tr=$("#sh8").attr("src");
							console.log(tr);
							$( "#h1" ).show();
							$("#h1").append("<img id='h' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br8").show();
							var up=$(".br7").css("display");
							console.log(up);
							console.log(y);
							$(".br7").hide();
							$("#emp").hide();
							$("#itml8").show();
							var dr = $("#it8").text();
							var drb = $("#it8b").text();
							console.log(dr);
							$("#itd8").append("<b id='eight' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty8' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut8").show();
							if($("#sev").css("display") == "inline"){
							$(".br7").css("display","inline");
							console.log("sobonto");
							}
						}
						else{
							var tp = parseInt($("#qty8").val())+1;
							$("#qty8").val(tp);
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t8 = uh * parseInt($("#qty8").val());
						console.log(t8 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add9").click(function(){
						ti9 = 0 ;
						var itb= $("#i9b").text();
							console.log(itb);
							va9 =conc(itb);
						if(ra < 1){
						ra += 1
						var tr=$("#sh9").attr("src");
						console.log(tr);
							$( "#i1" ).show();
							$("#i1").append("<img id='i' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br9").show();
							var up=$(".br8").css("display");
							console.log(up);
							console.log(y);
							$(".br8").hide();
							$("#emp").hide();
							$("#itml9").show();
							var dr = $("#it9").text();
							var drb = $("#it9b").text();
							console.log(dr);
							$("#itd9").append("<b id='nine' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty9' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut9").show();
							if($("#eight").css("display") == "inline"){
							$(".br8").css("display","inline");
							console.log("sobonto");
							}
						}
						else{
							var tp = parseInt($("#qty9").val())+1;
							$("#qty9").val(tp);
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t9 = uh * parseInt($("#qty9").val());
						console.log(t9 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add10").click(function(){
							ti10 = 0 ;	
							var itb= $("#i10b").text();
							console.log(itb);
							va10 =conc(itb);
							if(rb < 1){
									rb += 1
								var tr=$("#sh10").attr("src");
							console.log(tr);
							$( "#j1" ).show();
							$("#j1").append("<img id='j' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br10").show();
							var up=$(".br9").css("display");
							console.log(up);
							console.log(y);
							$(".br9").hide();
							$("#emp").hide();
							$("#itml10").show();
							var dr = $("#it10").text();
							var drb = $("#it10b").text();
							console.log(dr);
							$("#itd10").append("<b id='ten' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty10' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut10").show();
							if($("#nine").css("display") == "inline"){
							$(".br9").css("display","inline");
							console.log("sobonto");
							}
						}
						else{
							var tp = parseInt($("#qty10").val())+1;
							$("#qty10").val(tp);
						
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t10 = uh * parseInt($("#qty10").val());
						console.log(t10 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add11").click(function(){
						ti11 = 0 ;
						var itb= $("#i11b").text();
						console.log(itb);
						va11 =conc(itb);
						if(rc < 1){
							rc += 1
							var tr=$("#sh11").attr("src");
							console.log(tr);
							$( "#k1" ).show();
							$("#k1").append("<img id='k' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br11").show();
							var up=$(".br10").css("display");
							console.log(up);
							console.log(y);
							$(".br10").hide();
							$("#emp").hide();
							$("#itml11").show();
							var dr = $("#it11").text();
							var drb = $("#it11b").text();
							console.log(dr);
							$("#itd11").append("<b id='ele' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty11' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut11").show();
							if($("#ten").css("display") == "inline"){
							$(".br10").css("display","inline");
							console.log("sobonto");
							}
						}
						else{
							var tp = parseInt($("#qty11").val())+1;
							$("#qty11").val(tp);

						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t11 = uh * parseInt($("#qty11").val());
						console.log(t11 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add12").click(function(){
						ti12 = 0 ;
						var itb= $("#i12b").text();
						console.log(itb);
						va12 =conc(itb);
						if(rd < 1){
							rd += 1
							var tr=$("#sh12").attr("src");
							console.log(tr);
							$( "#l1" ).show();
							$("#l1").append("<img id='l' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br12").show();
							var up=$(".br11").css("display");
							console.log(up);
							console.log(y);
							$(".br11").hide();
							$("#emp").hide();
							$("#itml12").show();
							var dr = $("#it12").text();
							var drb = $("#it12b").text();
							console.log(dr);
							$("#itd12").append("<b id='tuev' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty12' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut12").show();
							if($("#ele").css("display") == "inline"){
							$(".br11").css("display","inline");
							console.log("sobonto");
							}
						}
						else{
							var tp = parseInt($("#qty12").val())+1;
							$("#qty12").val(tp);
							
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t12 = uh * parseInt($("#qty12").val());
							console.log(t12 +"lovf");
							subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add13").click(function(){
						ti13 = 0 ;
						var itb= $("#i13b").text();
						console.log(itb);
						va13 =conc(itb);
						if(re < 1){
							re += 1
							var tr=$("#sh13").attr("src");
							console.log(tr);
							$( "#m1" ).show();
							$("#m1").append("<img id='m' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br13").show();
							var up=$(".br12").css("display");
							console.log(up);
							console.log(y);
							$(".br12").hide();
							
							$("#emp").hide();
							$("#itml13").show();
							var dr = $("#it13").text();
							var drb = $("#it13b").text();
							console.log(dr);
							$("#itd13").append("<b id='thirt' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty13' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut13").show();
							if($("#tuev").css("display") == "inline"){
							$(".br12").css("display","inline");
							console.log("sobonto");
							}
						}
						else{
							var tp = parseInt($("#qty13").val())+1;
							$("#qty13").val(tp);
							
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t13 = uh * parseInt($("#qty13").val());
						console.log(t13 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add14").click(function(){
						ti14 = 0 ;
						var itb= $("#i14b").text();
						console.log(itb);
						va14 =conc(itb);
						if(rf < 1){
							rf += 1
							var tr=$("#sh14").attr("src");
							console.log(tr);
							$( "#n1" ).show();
							$("#n1").append("<img id='n' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br14").show();
							var up=$(".br13").css("display");
							console.log(up);
							console.log(y);
							$(".br13").hide();
							$("#emp").hide();
							$("#itml14").show();
							var dr = $("#it14").text();
							var drb = $("#it14b").text();
							console.log(dr);
							$("#itd14").append("<b id='fotin' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty14' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut14").show();
							if($("#thirt").css("display") == "inline"){
							$(".br13").css("display","inline");
							console.log("sobonto");
							}
						}
						else{
							var tp = parseInt($("#qty14").val())+1;
							$("#qty14").val(tp);
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t14 = uh * parseInt($("#qty14").val());
						console.log(t14 +"lovf");
						subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add15").click(function(){
						ti15 = 0 ;
						var itb= $("#i15b").text();
						console.log(itb);
						va15 =conc(itb);
						if(rg < 1){
							rg += 1
							var tr=$("#sh15").attr("src");
							console.log(tr);
							$( "#o1" ).show();
							$("#o1").append("<img id='o' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br15").show();
							var up=$(".br14").css("display");
							console.log(up);
							console.log(y);
							$(".br14").hide();
							$("#emp").hide();
							$("#itml15").show();
							var dr = $("#it15").text();
							var drb = $("#it15b").text();
							console.log(dr);
							$("#itd15").append("<b id='fiftin' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty15' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut15").show();
							if($("#fotin").css("display") == "inline"){
							$(".br14").css("display","inline");
							console.log("sobonto");
							}
							$(".br15").show();
						}
						else{
							var tp = parseInt($("#qty15").val())+1;
							$("#qty15").val(tp);
							
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
						t15 = uh * parseInt($("#qty15").val());
							console.log(t15 +"lovf");
							subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#add16").click(function(){
						ti16 = 0 ;
						var itb= $("#i16b").text();
						console.log(itb);
						va16 =conc(itb);
						if(rh < 1){
							rh += 1
							var tr=$("#sh16").attr("src");
							console.log(tr);
							$( "#p1" ).show();
							$("#p1").append("<img id='p' src='"+tr+"' style='width:40; height:50px;'/>");
							$(".br16").show();
							var up=$(".br15").css("display");
							console.log(up);
							console.log(y);
							$(".br15").hide();
							
							$("#emp").hide();
							$("#itml16").show();
							var dr = $("#it16").text();
							var drb = $("#it16b").text();
							console.log(dr);
							$("#itd16").append("<b id='sixtin' style='font-size:12px;'>"+dr+'<br/>'+drb+"&nbsp;&nbsp;&nbsp;&nbsp;qty:<input type='number' min='1' style='width:40px;' value='1' id='qty16' onchange='update(this.value,this.id)' onkeyup='update(this.value,this.id)'></input></b>");
							$("#chkut16").show();
							if($("#fiftin").css("display") == "inline"){
							$(".br15").css("display","inline");
							console.log("sobonto");
							}
							$(".br16").show();
						}
						else{
							var tp = parseInt($("#qty16").val())+1;
							$("#qty16").val(tp);
							
						}
						$("#cartval").text(parseInt($("#cartval").text())+1);
							t16 = uh * parseInt($("#qty16").val());
							console.log(t16 +"lovf");
							subt(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16);
					})
					$("#cart").mouseenter(function(){
						if(parseInt($("#cartval").text())==0){
						$("#emp").show();
						
						}
						$("#cartpanel").fadeToggle(1000);
					
					
					})
				
					$("#remove").click(function(){
							$("#total").text(parseInt($("#total").text())-t1);
							t1=0;
							var ux = parseInt($("#cartval").text())-parseInt($("#qty1").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							up=0;
							t1=0;
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							console.log($("#qty1").val()+"hey");
							$("#chkut").hide();
							$("#emp").show();
							$( "#fst" ).remove();
							$( "#a" ).remove();
							$( "#a1" ).hide();
							$(".br1").hide();
							console.log($("#fst").text()+"hey");

							up=0;
						}
						else {
							$("#chkut").hide();
							$(".br1").hide();
							$( "#a" ).remove();
							$( "#a1" ).hide();
							$("#fst").remove();
							console.log(parseInt($("#qty1").text())+"hey");
						}
					})
					$("#remove1").click(function(){
						$("#total").text(parseInt($("#total").text())-t2);
						t2=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty2").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							lo=0;
							
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							$("#chkut2").hide();
							$("#emp").show();
							$( "#scnd" ).remove();
							$( "#b" ).remove();
							$( "#b1" ).hide();
							$(".br2").hide();
							
						}
						else {
							$("#chkut2").hide();
							$(".br2").hide();
							$( "#b" ).remove();
							$( "#b1" ).hide();
						
							$("#scnd").remove();
							
				
						}
					})
					$("#remove2").click(function(){
						$("#total").text(parseInt($("#total").text())-t3);
						t3=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty3").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							ip=0;
						if(parseInt( $("#cartval").text())==0){
							$("#chkut3").hide();
							$("#emp").show();
							$("#tota").hide();
								
								$( "#thrd" ).remove();
								$(".br3").hide();
								$( "#c" ).remove();
								$( "#c1" ).hide();
						}
						else {
							$( "#c" ).remove();
							$( "#c1" ).hide();
							$("#chkut3").hide();
							$(".br3").hide();
						
							$( "#thrd" ).remove();
								x=parseInt(x);
								console.log(x);
								
						}
					})
					$("#remove3").click(function(){
						$("#total").text(parseInt($("#total").text())-t4);
						t4=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty4").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							puk=0;
						if(parseInt($("#cartval").text())==0){
						$("#chkut4").hide();
						$("#emp").show();
						$("#tota").hide();
						
							$( "#foth" ).remove();
							$(".br4").hide();
							$( "#d" ).remove();
							$( "#d1" ).hide();
						}
						else {
						$("#chkut4").hide();
						$(".br4").hide();
						$( "#d" ).remove();
						$( "#d1" ).hide();
						$("#foth").remove();
							
							
						}
					})
					$("#remove4").click(function(){
						$("#total").text(parseInt($("#total").text())-t5);
						t5=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty5").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							pok=0;
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							$("#chkut5").hide();
							$("#emp").show();
							$( "#five" ).remove();
							$(".br5").hide();
							$( "#e" ).remove();
							$( "#e1" ).hide();
						}
						else {
							$("#chkut5").hide();
							$(".br5").hide();
							$( "#e" ).remove();
							$( "#e1" ).hide();
							$("#five").remove();
						}
					})
					$("#remove5").click(function(){
						$("#total").text(parseInt($("#total").text())-t6);
						t6=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty6").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							tok=0;
						if(parseInt($("#cartval").text())==0){
							$("#chkut6").hide();
							$("#emp").show();
							$("#tota").hide();
							$( "#six" ).remove();
							$(".br6").hide();
							$( "#f" ).remove();
							$( "#f1" ).hide();
						}
						else {
						$("#chkut6").hide();
						$(".br6").hide();
						$( "#f" ).remove();
						$( "#f1" ).hide();
						$("#six").remove();
							
						}
					})
					$("#remove6").click(function(){
						$("#total").text(parseInt($("#total").text())-t7);
						t7=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty7").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							rok=0;
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							$("#chkut7").hide();
							$("#emp").show();
							$( "#sev" ).remove();
							$(".br7").hide();
							$( "#g" ).remove();
							$( "#g1" ).hide();
						}
						else {
						$("#chkut7").hide();
						$(".br7").hide();
						$( "#g" ).remove();
						$( "#g1" ).hide();
						$("#sev").remove();
							
						}
					})
					$("#remove7").click(function(){
						$("#total").text(parseInt($("#total").text())-t8);
						t8=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty8").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							lok=0;
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							$("#chkut8").hide();
							$("#emp").show();
							$( "#eight" ).remove();
							$(".br8").hide();
							$( "#h" ).remove();
							$( "#h1" ).hide();
						}
						else {
							$("#chkut8").hide();
							$(".br8").hide();
							$( "#h" ).remove();
							$( "#h1" ).hide();
							$("#eight").remove();
						}
					})
					$("#remove8").click(function(){
						$("#total").text(parseInt($("#total").text())-t9);
						t9=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty9").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							ra=0;
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							$("#chkut9").hide();
							$("#emp").show();
							$( "#nine" ).remove();
							$(".br9").hide();
							$( "#i" ).remove();
							$( "#i1" ).hide();
						}
						else {
							$("#chkut9").hide();
							$(".br9").hide();
							$("#nine").remove();
							$( "#i" ).remove();
							$( "#i1" ).hide();
						}
					})
					$("#remove9").click(function(){
						$("#total").text(parseInt($("#total").text())-t10);
						t10=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty10").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							rb=0;
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							$("#chkut10").hide();
							$("#emp").show();
							$( "#ten" ).remove();
							$(".br10").hide();
							$( "#j" ).remove();
							$( "#j1" ).hide();
						}
						else {
						$("#chkut10").hide();
						$(".br10").hide();
						$( "#j" ).remove();
						$( "#j1" ).hide();
						$("#ten").remove();
						}
					})
					$("#remove10").click(function(){
						$("#total").text(parseInt($("#total").text())-t11);
						t11=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty11").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							rc=0;
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							$("#chkut11").hide();
							$("#emp").show();
							$( "#ele" ).remove();
							$(".br11").hide();
							$( "#k" ).remove();
							$( "#k1" ).hide();
						}
						else {
							$("#chkut11").hide();
							$(".br11").hide();
							$( "#k" ).remove();
							$( "#k1" ).hide();
							$("#ele").remove();
						}
					})
					$("#remove11").click(function(){
						$("#total").text(parseInt($("#total").text())-t12);
						t12=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty12").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							rd=0;
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							$("#chkut12").hide();
							$("#emp").show();
							$( "#tuev" ).remove();
							$(".br12").hide();
							$( "#l" ).remove();
							$( "#l1" ).hide();
						}
						else {
							$("#chkut12").hide();
							$(".br12").hide();
							$( "#l" ).remove();
							$( "#l1" ).hide();
							$("#tuev").remove();
						}
					})
					$("#remove12").click(function(){
						$("#total").text(parseInt($("#total").text())-t13);
						t13=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty13").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							re=0;
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							$("#chkut13").hide();
							$("#emp").show();
							$( "#thirt" ).remove();
							$(".br13").hide();
							$( "#m" ).remove();
							$( "#m1" ).hide();
						}
						else {
							$("#chkut13").hide();
							$(".br13").hide();
							$( "#m" ).remove();
							$( "#m1" ).hide();
							$("#thirt").remove();
						}
					})
					$("#remove13").click(function(){
						$("#total").text(parseInt($("#total").text())-t14);
						t14=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty14").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							rf=0;
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							$("#chkut14").hide();
							$("#emp").show();
							$( "#fotin" ).remove();
							$(".br14").hide();
							$( "#n" ).remove();
							$( "#n1" ).hide();
						}
						else {
							$("#chkut14").hide();
							$(".br14").hide();
							$( "#n" ).remove();
							$( "#n1" ).hide();
							$("#fotin").remove();
						}
					})
					$("#remove14").click(function(){
						$("#total").text(parseInt($("#total").text())-t15);
						t15=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty15").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							rg=0;
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							$("#chkut15").hide();
							$("#emp").show();
							$( "#fiftin" ).remove();
							$(".br15").hide();
							$( "#o" ).remove();
							$( "#o1" ).hide();
						}
						else {
						$("#chkut15").hide();
						$(".br15").hide();
						$( "#o" ).remove();
						$( "#o1" ).hide();
						$("#fiftin").remove();
						}
					})
					$("#remove15").click(function(){
						$("#total").text(parseInt($("#total").text())-t16);
						t16=0;
						var ux = parseInt($("#cartval").text())-parseInt($("#qty16").val());
							console.log(ux);
							 $("#cartval").text(ux);	
							rh=0;
						if(parseInt($("#cartval").text())==0){
							$("#tota").hide();
							$("#chkut16").hide();
							$("#emp").show();
							$( "#sixtin" ).remove();
							$(".br16").hide();
							$( "#p" ).remove();
							$( "#p1" ).hide();
						}
						else {
						$("#chkut16").hide();
						$(".br16").hide();
						$( "#p" ).remove();
						$( "#p1" ).hide();
						$("#sixtin").remove();
						}
					})

					$("#item2").mouseenter(function(){
						var ur =$("#sh2").attr("src");
						console.log(ur);
						if($("#sh2").attr("src")=="shoe2.jpg"){
							$("#sh2").attr("src","shoe2b.jpg");
						}
						else{
							$("#sh2").attr("src","shoe2.jpg");
						}
					})
					$("#item3").mouseenter(function(){
						var ur =$("#sh3").attr("src");
						console.log(ur);
						if($("#sh3").attr("src")=="shoe3.jpg"){
							$("#sh3").attr("src","shoe3b.jpg");
						}
						else{
							$("#sh3").attr("src","shoe3.jpg");
						}
					})
					$("#item4").mouseenter(function(){
						var ur =$("#sh4").attr("src");
						console.log(ur);
						if($("#sh4").attr("src")=="shoe4.jpg"){
							$("#sh4").attr("src","shoe4b.jpg");
						}
						else{
							$("#sh4").attr("src","shoe4.jpg");
						}
					})
					$("#item5").mouseenter(function(){
						var ur =$("#sh5").attr("src");
						console.log(ur);
						if($("#sh5").attr("src")=="shoe5.jpg"){
							$("#sh5").attr("src","shoe5b.jpg");
						}
						else{
							$("#sh5").attr("src","shoe5.jpg");
						}
					})
					$("#item6").mouseenter(function(){
						var ur =$("#sh6").attr("src");
						console.log(ur);
						if($("#sh6").attr("src")=="shoe6.jpg"){
							$("#sh6").attr("src","shoe6b.jpg");
						}
						else{
							$("#sh6").attr("src","shoe6.jpg");
						}
					})
					$("#item7").mouseenter(function(){
						var ur =$("#sh7").attr("src");
						console.log(ur);
						if($("#sh7").attr("src")=="shoe7.jpg"){
							$("#sh7").attr("src","shoe7b.jpg");
						}
						else{
							$("#sh7").attr("src","shoe7.jpg");
						}
					})
					$("#item8").mouseenter(function(){
						var ur =$("#sh8").attr("src");
						console.log(ur);
						if($("#sh8").attr("src")=="shoe8.jpg"){
							$("#sh8").attr("src","shoe8b.jpg");
						}
						else{
							$("#sh8").attr("src","shoe8.jpg");
						}
					})
					$("#item9").mouseenter(function(){
						var ur =$("#sh9").attr("src");
						console.log(ur);
						if($("#sh9").attr("src")=="shoe9.jpg"){
							$("#sh9").attr("src","shoe9b.jpg");
						}
						else{
							$("#sh9").attr("src","shoe9.jpg");
						}
					})
					$("#item10").mouseenter(function(){
						var ur =$("#sh10").attr("src");
						console.log(ur);
						if($("#sh10").attr("src")=="shoe10.jpg"){
							$("#sh10").attr("src","shoe10b.jpg");
						}
						else{
							$("#sh10").attr("src","shoe10.jpg");
						}
					})
					$("#item11").mouseenter(function(){
						var ur =$("#sh11").attr("src");
						console.log(ur);
						if($("#sh11").attr("src")=="shoe11..jpg"){
							$("#sh11").attr("src","shoe11b.jpg");
						}
						else{
							$("#sh11").attr("src","shoe11..jpg");
						}
					})
					$("#item12").mouseenter(function(){
						var ur =$("#sh12").attr("src");
						console.log(ur);
						if($("#sh12").attr("src")=="shoe12.jpg"){
							$("#sh12").attr("src","shoe12b.jpg");
						}
						else{
							$("#sh12").attr("src","shoe12.jpg");
						}
					})
					$("#item13").mouseenter(function(){
						var ur =$("#sh13").attr("src");
						console.log(ur);
						if($("#sh13").attr("src")=="shoe13.jpg"){
							$("#sh13").attr("src","shoe13b.jpg");
						}
						else{
							$("#sh13").attr("src","shoe13.jpg");
						}
					})
					$("#item14").mouseenter(function(){
						var ur =$("#sh14").attr("src");
						console.log(ur);
						if($("#sh14").attr("src")=="shoe14.jpg"){
							$("#sh14").attr("src","shoe14b.jpg");
						}
						else{
							$("#sh14").attr("src","shoe14.jpg");
						}
					})
					$("#item15").mouseenter(function(){
						var ur =$("#sh15").attr("src");
						var up = $("#it15").text();
						console.log(ur);
						console.log(up);
						if($("#sh15").attr("src")=="shoe15.jpg"){
							$("#sh15").attr("src","shoe15b.jpg");
						}
						else{
							$("#sh15").attr("src","shoe15.jpg");
						}
					})
					$("#item16").mouseenter(function(){
						var ur =$("#sh16").attr("src");
						console.log(ur);
						if($("#sh16").attr("src")=="shoe16.jpg"){
							$("#sh16").attr("src","shoe16b.jpg");
						}
						else{
							$("#sh16").attr("src","shoe16.jpg");
						}
					})
					$("#navbar").click(function(){
						$("#mitem").css("position","relative");
						$("#nav").css("position","relative");
						$("#menu").animate({
						left:"0%"});
						$("#mitem").animate({
						left:"100%"
						});
						$("#nav").hide();
						$("#mitem").hide();
						$("#nav").animate({
						left:"100%"
						});
					})
					$("#x").click(function(){
						$("#mitem").css("position","static");
						$("#nav").css("position","static");
						$("#menu").animate({left:"-100%"});
						$("#mitem").show();
						$("#nav").animate({left:"0%"});
						$("#nav").show();
					})
					$("#shba").click(function(){
							$("#catofsh").toggle();
							console.log($("#shba").attr("class"));
							console.log($("#catofsh").css("display"));
						if($("#catofsh").css("display")== "block"){
							console.log("holla");
							//$("shba").attr("class","fa fa-caret-up");
							$( "#shba" ).addClass( "fa fa-caret-up" );
						}
						else{
							$("#shba").removeClass("fa fa-caret-up");
							$("#shba").addClass("fa fa-caret-down");
						}
					})
			})		