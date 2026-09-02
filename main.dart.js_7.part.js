((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,E,B={
Je(){var x,w,v
$.t()
x=$.o
if(x==null)x=$.o=D.l
x=x.C("server",y.e)
w=$.o
if(w==null)w=$.o=D.l
v=y.B
v=new B.y1(x,new A.FK(w.C("config",y.F)),A.a([],y.A),A.ch(null,null,null,y.X,y.x),new A.aO(v),new A.aO(v),!1,!1)
v.bZ()
return v},
y1:function y1(d,e,f,g,h,i,j,k){var _=this
_.ax=d
_.ay=e
_.ch=""
_.cx=_.CW=null
_.db=_.cy=""
_.id$=f
_.k1$=g
_.bW$=h
_.bX$=i
_.bU$=j
_.bY$=k},
c_4:function c_4(){},
c_5:function c_5(d,e){this.a=d
this.b=e},
c_6:function c_6(d,e){this.a=d
this.b=e},
c_7:function c_7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y0:function y0(d,e,f,g,h){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h},
eEg(d){switch(d){case"order":return C.a4v
case"factor":return C.Ej
default:return null}},
aKJ:function aKJ(d,e){this.a=d
this.b=e}},C,F
J=c[1]
A=c[0]
D=c[2]
E=c[161]
B=a.updateHolder(c[160],B)
C=c[326]
F=c[243]
B.y1.prototype={
tQ(d){var x,w=this,v=null
if(d.d){A.amj(!1,!1,C.brW,w.ch)
return v}if(d.e){x=w.cy
if(x!=="null")return A.hQ(v,v,"/profile/orders/orderDetails/"+x,v,v,v,v,v,v)
else return v}x=d.c
if(x!=null)return A.hQ(v,v,"/invoice/"+x,v,v,v,A.G(["type","receivedFactor"],y.N,y.z),v,v)
x=d.a
if(x==="basket"){x=d.f
if(x==null)return v
return A.hQ(v,v,"/invoice/"+x,v,v,v,A.G(["type","basket"],y.N,y.z),v,v)}else if(x==="walletCharge"){$.t()
x=$.o
if(x==null)x=$.o=D.l
x=x.C("wallet",y.i).k4
w.ay.VM(A.c("wallet_charge"),!0,x)}else if(x===$.js().b||x===$.l5().b||x===$.ky().b||x===$.pO().b||x===$.r2().b||x===$.tz().b||x===$.pN().b||x===$.v4().b||x===$.p_().b||x===$.Ld().b){x=w.cx
return w.aYW(w.CW,w.cy,x)}else if(x===$.o4().b){x=w.ckv(w.CW,C.Ej)
return x}return v},
aYW(d,e,f){var x=null
switch(f){case C.Ej:if(d!=null)return A.hQ(x,x,"/invoice/"+d,x,x,x,x,x,x)
break
case C.a4v:if(e!=null)return A.hQ(x,x,"/profile/orders/orderDetails/"+e,x,x,x,x,x,x)
break}return A.hQ(x,x,"/dashboard",x,x,x,x,x,x)},
ckv(d,e){return this.aYW(d,null,e)},
Aw(d){return this.b6Y(d)},
b6Y(d){var x=0,w=A.l(y.y),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Aw=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:k={}
j=d.z
if(j)t=u.ax.gaa().ax+"modules/money/v1/client/openPerfectmoneyGateway"
else{s=u.ax
t=d.Q?s.gaa().ax+"modules/money/v1/client/sellAutoVoucher":s.gaa().ax+"modules/"+d.a+"/v1/client/saveOrder"}r=A.ci(t,0,null)
s=y.z
q=A.L(s,s)
p=A.cG()
o=d.a
if(o===$.js().b){q=d.d
p.b=new E.of(d.b,null,q.h(0,"product_price"),q.h(0,"product_name"),q.h(0,"category_name"),"buy",o,null,q.h(0,"country"),q.h(0,"currency"),null)}else if(o===$.r2().b||o===$.tz().b||o===$.pN().b||o===$.v4().b||o===$.p_().b||o===$.Ld().b){q=d.e
n=q.h(0,"product_price")
m=q.h(0,"product_name")
l=q.h(0,"category_name")
j=j?"sell":"buy"
p.b=new E.of(d.b,null,n,m,l,j,o,null,null,q.h(0,"currency"),q.h(0,"is_force"))}else if(o===$.o4().b){j=A.j0(D.f.k(0))
if(j==null)j=0
p.b=new E.of(d.b,null,j,null,null,"buy",o,null,null,null,null)
q=F.d8}else if(o===$.ky().b){q=d.r
p.b=new E.of(d.b,null,q.h(0,"product_price"),q.h(0,"product_name"),q.h(0,"category_name"),"buy",o,q.h(0,"network_name"),null,null,null)}else if(o===$.pO().b){q=d.f
p.b=new E.of(d.b,null,q.h(0,"product_price"),q.h(0,"product_name"),q.h(0,"category_name"),"buy",o,null,null,null,null)}else if(o===$.l5().b){q=d.w
p.b=new E.of(d.b,null,q.h(0,"product_price"),q.h(0,"product_name"),q.h(0,"category_name"),"buy",o,null,q.h(0,"country"),q.h(0,"currency"),null)}j=d.y
q.p(0,"renewal_enabled",j)
o=d.x
if(o!==0&&j)q.p(0,"renewal_period",o)
q.p(0,"data",y.P.a(q.h(0,"data")).lC(0,new B.c_4(),y.N,s))
k.a=!1
j=A.aJ()
s=A.aY().dd(q)
o=r.k(0)
x=3
return A.d(j.ck(s,A.aY().aC(),D.aw,new B.c_5(k,u),new B.c_6(k,u),new B.c_7(k,u,p,d),o),$async$Aw)
case 3:v=k.a
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$Aw,w)}}
B.y0.prototype={
gfh(){return this.a}}
B.aKJ.prototype={
K(){return"RedirectType."+this.b}}
var z=a.updateTypes([])
B.c_4.prototype={
$2(d,e){var x,w="value"
if(y.P.b(e)){x=A.h6(e,y.N,y.z)
x.p(0,w,J.u(e.h(0,w),"null")?"":e.h(0,w))
return new A.b7(d,x,y.Z)}return new A.b7(d,e,y.I)},
$S:1717}
B.c_5.prototype={
$1(d){this.b.db=A.a8(d,"message")
this.a.a=!1},
$S:3}
B.c_6.prototype={
$1(d){this.b.db=A.a8(d,"message")
this.a.a=!1},
$S:2}
B.c_7.prototype={
$1(d){var x,w,v,u,t=this,s="data",r="redirect_to",q=t.b
q.cx=null
A.xp().bbu(t.c.aS())
x=t.d
if(x.z){x=A.F(J.r(d.a,s),!1,y.N)
q.ch=x==null?"":x}else{w=y.N
v=d.a
u=J.bc(v)
if(x.Q){x=A.F(J.r(u.h(v,s),"order_id"),!1,w)
q.cy=x==null?"":x}else{x=A.F(J.r(u.h(v,s),r),!1,w)
if(x==null)x=""
q.ch=x
q.CW=D.b.ga2(x.split("/"))
q.cx=B.eEg(A.F(J.r(J.r(d.a,s),"redirect_to_type"),!0,w))
$.t()
$.a4()
q.cy=D.b.ga2(J.r(J.r(d.a,s),r).split("/"))}}t.a.a=!0},
$S:4};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.y1,A.hN)
x(B.c_4,A.cR)
w(A.bS,[B.c_5,B.c_6,B.c_7])
x(B.y0,A.S)
x(B.aKJ,A.kh)})()
A.br(b.typeUniverse,JSON.parse('{"y1":{"at":[]}}'))
var y=(function rtii(){var x=A.M
return{F:x("x9"),B:x("aO<~>"),A:x("x<~()?>"),x:x("O<~()>"),I:x("b7<m,@>"),Z:x("b7<m,P<m,@>>"),P:x("P<m,@>"),e:x("jG"),N:x("m"),i:x("pC"),y:x("D"),z:x("@"),X:x("S?")}})();(function constants(){C.brW=new A.Jf(2,"perfectMoney")
C.a4v=new B.aKJ(0,"order")
C.Ej=new B.aKJ(1,"factor")})()};
(a=>{a["bJBjS8Tos5/2YbfXP1NypMByxyo="]=a.current})($__dart_deferred_initializers__);