((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
dXF(){var x,w
$.t()
x=$.o
if(x==null)x=$.o=D.l
w=y.B
w=new B.aDI(x.C("server_iran_exchange",y.e),A.a([],y.u),A.ew(-1),A.a([],y.F),A.a([],y.A),A.a([],y.z),A.ch(null,null,null,y.X,y.x),new A.aO(w),new A.aO(w),!1,!1)
w.bZ()
return w},
aDI:function aDI(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.ax=d
_.ay=e
_.ch="null"
_.CW=f
_.cx=g
_.cy=h
_.id$=i
_.k1$=j
_.bW$=k
_.bX$=l
_.bU$=m
_.bY$=n},
byM:function byM(){},
byN:function byN(d,e){this.a=d
this.b=e},
byO:function byO(d,e){this.a=d
this.b=e},
byP:function byP(d,e){this.a=d
this.b=e},
byL:function byL(){},
ekd(d){var x,w,v,u,t,s,r,q,p,o,n="documentId",m="question",l="faqCategory",k=y.N,j=A.W(d.h(0,n),!1,k)
if(j==null)j=""
x=A.W(d.h(0,"coinName"),!1,k)
if(x==null)x=""
if(d.h(0,m)!=null){w=J.cH(y.j.a(d.h(0,m)),new B.byT(),y.v)
w=A.aa(w,w.$ti.j("ax.E"))}else w=A.a([],y.I)
if(d.h(0,l)!=null){v=d.h(0,l)
u=A.W(v.h(0,n),!1,k)
if(u==null)u=""
t=A.W(v.h(0,"slug"),!1,k)
if(t==null)t=""
s=A.W(v.h(0,"title"),!1,k)
if(s==null)s=""
v=v.h(0,"icon")
v=A.W(v==null?null:J.r(v,"name"),!0,k)
v=$.e9O().h(0,v)
v=new B.Wr(u,t,s,v==null?D.MD:v)}else v=null
if(d.h(0,"faqType")!=null){u=d.h(0,"faqType")
t=J.bc(u)
s=A.W(t.h(u,"id"),!1,y.H)
if(s==null)s=0
r=A.W(t.h(u,n),!1,k)
if(r==null)r=""
q=A.W(t.h(u,"slug"),!1,k)
if(q==null)q=""
p=A.W(t.h(u,"createdAt"),!1,k)
if(p==null)p=""
o=A.W(t.h(u,"updatedAt"),!1,k)
if(o==null)o=""
k=A.W(t.h(u,"publishedAt"),!1,k)
k=new B.aDJ(s,r,q,p,o,k==null?"":k)}else k=null
return new B.Dv(j,w,x,v,k)},
Dv:function Dv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
byT:function byT(){},
Wr:function Wr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xs:function xs(d,e,f){this.a=d
this.b=e
this.c=f},
aDJ:function aDJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
lX:function lX(d,e){this.a=d
this.b=e}},C,E,F,G
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[154],B)
C=c[325]
E=c[281]
F=c[292]
G=c[183]
B.aDI.prototype={
a8k(d){var x,w,v
D.b.Y(this.ay)
x=d.length
w=J.d7(x,y.y)
for(v=0;v<x;++v)w[v]=!1
this.ay=w},
NV(d){return this.b4X(d)},
b4X(d){var x=0,w=A.l(y.y),v,u=this,t,s,r,q
var $async$NV=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:q={}
q.a=!1
t=d.b
if(t.a!==0){s=A.K(t).j("fn<1,2>")
r=A.rQ(new A.fn(t,s),new B.byM(),s.j("V.E"),y.N).bV(0,"&")}else r=""
r+=r.length===0?"":"&"
r+=r.length===0?"":"&"
t=d.a
if(t!=null)r+="populate="+t
t=A.aJ()
s=u.ax.gaa()
x=3
return A.d(t.b3(A.cb().f0(!1),D.W,new B.byN(q,u),new B.byO(q,u),new B.byP(q,u),s.z+"faqs?"+r),$async$NV)
case 3:v=q.a
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$NV,w)}}
B.Dv.prototype={
c21(d){var x,w,v,u,t,s=this,r=s.d,q=null
if(r==null)r=q
else{q=r.a
x=r.b
w=r.c
r=r.d
r=new B.Wr(q,x,w,r)}q=s.e
x=null
if(q==null)q=x
else{x=q.a
w=q.b
v=q.c
u=q.d
t=q.e
q=q.f
q=new B.aDJ(x,w,v,u,t,q)}return new B.Dv(s.a,d,s.c,r,q)}}
B.Wr.prototype={}
B.xs.prototype={}
B.aDJ.prototype={}
B.lX.prototype={
K(){return"StrapiFaqFilterType."+this.b},
cmM(d){return"["+this.b+"][slug][$eq]="+d}}
var z=a.updateTypes(["Dv(@)","xs(@)"])
B.byM.prototype={
$1(d){return"filters"+("["+d.a.b+"][slug][$eq]="+d.b)},
$S:1665}
B.byN.prototype={
$1(d){this.b.ch=A.a8(d,"message")
this.a.a=!1},
$S:3}
B.byO.prototype={
$1(d){this.b.ch=A.a8(d,"message")
this.a.a=!1},
$S:2}
B.byP.prototype={
$1(d){var x,w,v,u,t,s,r=this.b
D.b.Y(r.cx)
x=J.cH(y.j.a(J.r(d.a,"data")),new B.byL(),y.J)
x=A.aa(x,x.$ti.j("ax.E"))
r.cx=x
x=r.cy
D.b.Y(x)
for(r=r.cx,w=r.length,v=0;v<r.length;r.length===w||(0,A.a_)(r),++v){u=r[v].d
if(u!=null)x.push(u)}r=A.L(y.N,y.K)
for(w=x.length,v=0;v<x.length;x.length===w||(0,A.a_)(x),++v){t=x[v]
r.p(0,t.a,t)}w=r.$ti.j("cp<2>")
s=A.aa(new A.cp(r,w),w.j("V.E"))
D.b.Y(x)
D.b.v(x,s)
this.a.a=!0},
$S:4}
B.byL.prototype={
$1(d){return B.ekd(d)},
$S:z+0}
B.byT.prototype={
$1(d){var x,w,v=A.W(d.h(0,"id"),!1,y.H)
if(v==null)v=0
x=y.N
w=A.W(d.h(0,"question"),!1,x)
if(w==null)w=""
x=A.W(d.h(0,"answer"),!1,x)
return new B.xs(v,w,x==null?"":x)},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aDI,A.hN)
w(A.bS,[B.byM,B.byN,B.byO,B.byP,B.byL,B.byT])
w(A.S,[B.Dv,B.Wr,B.xs,B.aDJ])
x(B.lX,A.kh)})()
A.br(b.typeUniverse,JSON.parse('{"aDI":{"at":[]}}'))
var y=(function rtii(){var x=A.M
return{J:x("Dv"),K:x("Wr"),v:x("xs"),B:x("aO<~>"),F:x("x<Dv>"),A:x("x<Wr>"),I:x("x<xs>"),u:x("x<D>"),z:x("x<~()?>"),j:x("O<@>"),x:x("O<~()>"),e:x("pv"),N:x("m"),y:x("D"),X:x("S?"),H:x("aU")}})();(function constants(){C.atS=new A.aL(59687,"Iconsax",null,!1)
C.atT=new A.aL(59689,"Iconsax",null,!1)
C.atU=new A.aL(59691,"Iconsax",null,!1)
C.atV=new A.aL(59693,"Iconsax",null,!1)
C.au2=new A.aL(59859,"Iconsax",null,!1)
C.AQ=new A.aL(59863,"Iconsax",null,!1)
C.au7=new A.aL(6e4,"Iconsax",null,!1)
C.au8=new A.aL(60001,"Iconsax",null,!1)
C.au9=new A.aL(60010,"Iconsax",null,!1)
C.aub=new A.aL(60046,"Iconsax",null,!1)
C.auc=new A.aL(60053,"Iconsax",null,!1)
C.auk=new A.aL(60240,"Iconsax",null,!1)
C.aux=new A.aL(60724,"Iconsax",null,!1)
C.auI=new A.aL(61165,"Iconsax",null,!1)
C.auZ=new A.aL(61610,"Iconsax",null,!1)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"eNm","e9O",()=>A.G(["MoneyRecive",D.AX,"MoneySend",D.AY,"DiscountShape",C.auk,"FingerCricle",E.MK,"AddCircle",G.oV,"AddSquare",D.Mu,"Alarm",D.Mv,"AlignHorizontally",C.atS,"AlignLeft",C.atT,"AlignRight",C.atU,"AlignVertically",C.atV,"ArrangeVertical",D.Mw,"ArrowRotateLeft",C.auI,"Bank",F.AP,"Bitcoin",C.AQ,"BitcoinCard",C.au2,"BuyCrypto",E.Mz,"Candle",C.au8,"Candle2",C.au7,"CardCoin",C.au9,"Cardano",C.AQ,"Chainlink",C.AQ,"Chart",C.auc,"Chart1",C.aub,"Lock",C.aux,"Wallet",C.auZ,"Wallet3",D.N9],y.N,A.M("aL")))})()};
(a=>{a["c1AdSLtncZMeLxZfSZBMmrdhPGs="]=a.current})($__dart_deferred_initializers__);