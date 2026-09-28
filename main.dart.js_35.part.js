((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B={GY:function GY(){}}
A=c[0]
B=a.updateHolder(c[149],B)
B.GY.prototype={
a92(d){var y=d.length
if(y<11)return"mobile_number_must_be_eleven_digits"
if(y===11&&!A.ecb(d))return"mobile_number_is_not_valid"
return null},
Vl(d){var y,x=A.bb("^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\\.[a-zA-Z]+",!0,!1,!1)
if(d.length!==0)y=!x.b.test(d)
else y=!1
if(y)return A.c("invalid_email_address")
else return null},
Yo(d){var y,x=A.bb("^[\u0622-\u06cc \u0686 \u06af \u06cc \u06f1 \u06f2 \u06f3 \u06f4 \u06f5 \u06f6 \u06f7 \u06f8 \u06f9 \u06f0]+$",!0,!1,!1)
if(d.length!==0)y=!x.b.test(d)
else y=!1
if(y)return A.c("persian_only")
else return null}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.GY,A.R)})()};
(a=>{a["iYCTUXozGVuWo4KHXO7poOySkrk="]=a.current})($__dart_deferred_initializers__);