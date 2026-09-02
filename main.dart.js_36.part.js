((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B={FD:function FD(){}}
A=c[0]
B=a.updateHolder(c[151],B)
B.FD.prototype={
a6R(d){var y=d.length
if(y<11)return"mobile_number_must_be_eleven_digits"
if(y===11&&!A.e0U(d))return"mobile_number_is_not_valid"
return null},
Tp(d){var y,x=A.bx("^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\\.[a-zA-Z]+",!0,!1,!1)
if(d.length!==0)y=!x.b.test(d)
else y=!1
if(y)return A.c("invalid_email_address")
else return null},
Wv(d){var y,x=A.bx("^[\u0622-\u06cc \u0686 \u06af \u06cc \u06f1 \u06f2 \u06f3 \u06f4 \u06f5 \u06f6 \u06f7 \u06f8 \u06f9 \u06f0]+$",!0,!1,!1)
if(d.length!==0)y=!x.b.test(d)
else y=!1
if(y)return A.c("persian_only")
else return null}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.FD,A.S)})()};
(a=>{a["BLHwVLHU2Gt8FKeo7GZE02c6hWw="]=a.current})($__dart_deferred_initializers__);