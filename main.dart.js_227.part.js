((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,D={
e2g(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new D.oK(i,d,m,e,f,h,o,g,n,r,l,k,j,p,q,"system")},
oK:function oK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s},
K1:function K1(d){this.a=d},
LU:function LU(d,e,f){this.c=d
this.d=e
this.a=f},
dVU(d,e){var x=d.bF(),w=e.bF()
return A.d2(x)===A.d2(w)&&A.da(x)===A.da(w)&&A.eT(x)===A.eT(w)},
bmq(d){var x,w=d.bF(),v=new A.bm(Date.now(),0,!1),u=A.cP(A.d2(v),A.da(v),A.eT(v),0,0,0,0,0),t=A.cP(A.d2(w),A.da(w),A.eT(w),0,0,0,0,0).m(0,u)?A.c("today"):A.fH(w,!0,!0)
$.t()
x=$.a4().a
return t+" - "+new A.a7(x).J(new A.a7(x).Ge(w))}},C
J=c[1]
A=c[0]
B=c[2]
E=c[128]
F=c[313]
G=c[215]
D=a.updateHolder(c[106],D)
C=c[303]
D.oK.prototype={
goO(){var x=this.z
if(x==null)return null
if(x instanceof A.iz)return x
return new A.iz(x,x,y.k)},
geN(){var x=this.as
if(x==null)return null
if(x instanceof A.iz)return x
return new A.iz(x,x,y.m)},
bO(){var x,w,v=this,u=A.L(y.g,y.b)
u.p(0,"id",v.a)
u.p(0,"authorId",v.b)
x=v.c
if(x!=null)u.p(0,"replyToMessageId",x)
x=B.o5.gXg()
w=E.jk(v.d,x)
if(w!=null)u.p(0,"createdAt",w)
w=E.jk(v.e,x)
if(w!=null)u.p(0,"deletedAt",w)
w=E.jk(v.f,x)
if(w!=null)u.p(0,"failedAt",w)
w=E.jk(v.r,x)
if(w!=null)u.p(0,"sentAt",w)
w=E.jk(v.w,x)
if(w!=null)u.p(0,"deliveredAt",w)
w=E.jk(v.x,x)
if(w!=null)u.p(0,"seenAt",w)
x=E.jk(v.y,x)
if(x!=null)u.p(0,"updatedAt",x)
x=v.goO()
if(x!=null)u.p(0,"reactions",x)
x=v.Q
if(x!=null)u.p(0,"pinned",x)
x=v.geN()
if(x!=null)u.p(0,"metadata",x)
x=F.uO.h(0,v.at)
if(x!=null)u.p(0,"status",x)
u.p(0,"text",v.ax)
u.p(0,"type",v.ay)
return u},
m(d,e){var x,w,v,u=this
if(e==null)return!1
if(u!==e){x=!1
if(J.aN(e)===A.a9(u))if(e instanceof D.oK){w=e.a===u.a
if(w||w){w=e.b===u.b
if(w||w){w=e.c==u.c
if(w||w){w=e.d
v=u.d
if(w==v||J.u(w,v)){w=e.e
v=u.e
if(w==v||J.u(w,v)){w=e.f
v=u.f
if(w==v||J.u(w,v)){w=e.r
v=u.r
if(w==v||J.u(w,v)){w=e.w
v=u.w
if(w==v||J.u(w,v)){w=e.x
v=u.x
if(w==v||J.u(w,v)){w=e.y
v=u.y
if(w==v||J.u(w,v))if(B.bz.ew(e.z,u.z)){w=e.Q==u.Q
if(w||w)if(B.bz.ew(e.as,u.as)){w=e.at==u.at
if(w||w){x=e.ax===u.ax
x=x||x}}}}}}}}}}}}}}else x=!0
return x},
gF(d){var x=this
return A.aq(A.a9(x),x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,B.bz.fU(x.z),x.Q,B.bz.fU(x.as),x.at,x.ax,B.a,B.a,B.a,B.a)},
k(d){var x=this
return"Message.system(id: "+x.a+", authorId: "+x.b+", replyToMessageId: "+A.w(x.c)+", createdAt: "+A.w(x.d)+", deletedAt: "+A.w(x.e)+", failedAt: "+A.w(x.f)+", sentAt: "+A.w(x.r)+", deliveredAt: "+A.w(x.w)+", seenAt: "+A.w(x.x)+", updatedAt: "+A.w(x.y)+", reactions: "+A.w(x.goO())+", pinned: "+A.w(x.Q)+", metadata: "+A.w(x.geN())+", status: "+A.w(x.at)+", text: "+x.ax+")"},
ghT(){return this.a},
gmU(){return this.b},
gA2(){return this.c},
gmX(){return this.d},
gz9(){return this.e},
gwI(){return this.f},
grm(){return this.r},
gwB(){return this.w},
gvD(){return this.x},
gAj(){return this.y},
gzV(){return this.Q},
gbd(){return this.at}}
D.K1.prototype={
u(d){var x=null,w=A.q(d),v=new A.bA().aE(d),u=w.ax,t=u.RG,s=t==null,r=A.c2(s?u.k2:t,1,x,x),q=B.n.l(0,5),p=A.ah(C.auJ,u.b,x,x,28),o=$.ac().l(0,7.5),n=y.e
return A.lI(A.jW(!0,new A.U(v,x,A.C(A.a([B.a_,C.as8,r,A.C(A.a([B.a_,A.z(A.a([new A.Y(q,p,x),A.a1(A.y(x,x,B.i,x,x,new A.H(s?u.k2:t,x,x,o,x,x,x,B.m),x,57,x,x,x,x,x,x),1),new A.Y(B.n.l(0,6),C.avv,x)],n),B.d,x,B.e,B.c,0,x),B.a_],n),B.d,x,B.e,B.B,0,x,B.k)],n),B.d,x,B.e,B.c,0,x,B.k),x),!0,!1,B.E,!0,!0))}}
D.LU.prototype={
u(d){var x=null,w=A.q(d),v=this.d,u=v?B.bV:B.c5,t=B.cg.l(0,4),s=B.cg.l(0,4),r=w.ax,q=r.RG
r=q==null?r.k2:q
if(v){v=$.ac()
v=new A.cJ(v.a.l(0,3),v.b.l(0,3),v.c.l(0,3),B.T)}else{v=$.ac()
v=new A.cJ(v.a.l(0,3),v.b.l(0,3),B.T,v.c.l(0,3))}return new A.de(u,x,x,A.y(x,new A.U(x,45,A.n(this.c,x,x,x,x,x,x,x,x),x),B.i,x,G.Is,new A.H(r,x,x,v,x,x,x,B.m),x,x,x,t,s,x,x,x),x)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(D.oK,E.dP)
w(A.T,[D.K1,D.LU])})()
A.br(b.typeUniverse,JSON.parse('{"oK":{"dP":[]},"K1":{"T":[],"e":[]},"LU":{"T":[],"e":[]}}'))
var y={m:A.M("iz<m,@>"),k:A.M("iz<m,O<m>>"),e:A.M("x<e>"),g:A.M("m"),b:A.M("@")};(function constants(){var x=a.makeConstList
C.ai0=new D.LU("Hello! How are you",!1,null)
C.ai_=new D.LU("Hi, how are you?",!0,null)
C.ahZ=new D.LU("I'm good, thanks!",!1,null)
C.ahY=new D.LU("I'm good, thanks for asking!",!0,null)
C.aCH=x([C.ai0,C.ai_,C.ahZ,C.ahY],y.e)
C.amz=new A.ea(B.p,B.e,B.c,B.d,null,B.k,null,0,C.aCH,null)
C.as8=new A.lN(1,B.dl,C.amz,null)
C.auJ=new A.aL(61244,"Iconsax",null,!1)
C.atR=new A.aL(59665,"Iconsax",null,!1)
C.avv=new A.d1(C.atR,28,null,null,null)
C.a8l=new D.K1(null)
C.aae=new A.uU("system",null,null,null,null)})()};
(a=>{a["Q724mbUYHtMZbz0BqRoRiMSCDiI="]=a.current})($__dart_deferred_initializers__);