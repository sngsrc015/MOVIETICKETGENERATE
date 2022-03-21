function call()
{j= 1000+parseInt(Math.random()*8999)
	alert(j)

otpspan.innerHTML=`<input type='text' placeholder="submit otp" id="code" ><input type="button" value="submit" id="cap"  onclick="submit(j)"><input type="button" value="Ticket" id="btn" disabled onclick="show()">
`

}
function show()
{
	
	var mov= movie.options[movie.selectedIndex].text
	var price=150
	var sno=Th.value
	var to=qty.value
	var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
	var md=new Date(bd.value)
	var movday= days[md.getDay()]
	var dis
	if(movday=="Friday")
	{dis=5}
	else if(to>=10)
	{dis=10}
	else
	{dis=0}
	var totpri=price*to
	var totdis=(totpri*dis)/100
	var netamt=totpri-totdis
	


	var t ="<table border='1' cellspacing='0' cellpadding='5'>"
	t+="<caption><b>TICKET INVOICE:</b><caption>"
	t+="<tr bgcolor='grey'><th rowspan='7'><img src='"+mov+".jpg' width='200'></th></tr>"
    t+=`<tr bgcolor='yellow'><th colspan='3'>DATE: ${md.getDate()}:${md.getMonth()}:${md.getFullYear()}</th></tr>`
	t+="<tr bgcolor='orange'><th>MOVIE NAME: </th><th>SCREEN NO:  </th><th>TOTAL TICKETS:</th></tr>"
	t+="<tr bgcolor='white'><td  align='center'>"+mov+"</td><td align='center'>"+sno+"</td><td align='center'> "+to+"</td></tr>"

	t+="<tr  bgcolor='orange'><th>PRICE per BODY:150 &#8377;/Unit</th><th colspan='2'>Discount["+dis+"% ]:</th></tr>"
	t+="<tr  bgcolor='white'><td>"+price+"</td><td colspan='2'>"+totdis+"</td></tr>"
	t+="<tr bgcolor='lightblue'><th colspan='3'>NET AMOUNT: "+netamt+" &#8377;/Unit </th></tr></table>"


	sw.innerHTML=t

	}











function submit(otp)
{
	if(code.value==otp)
	{ btn.disabled=false}

	else
	{
		alert("invalid otp")
	}
}