((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,D={
edY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new D.pp(i,d,m,e,f,h,o,g,n,r,l,k,j,p,q,"system")},
pp:function pp(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
Lw:function Lw(d){this.a=d},
Nt:function Nt(d,e,f){this.c=d
this.d=e
this.a=f},
e5Z(d,e){var x=d.bL(),w=e.bL()
return A.da(x)===A.da(w)&&A.dg(x)===A.dg(w)&&A.f3(x)===A.f3(w)},
bre(d){var x,w=d.bL(),v=new A.b9(Date.now(),0,!1),u=A.cS(A.da(v),A.dg(v),A.f3(v),0,0,0,0,0),t=A.cS(A.da(w),A.dg(w),A.f3(w),0,0,0,0,0).n(0,u)?A.c("today"):A.fP(w,!0,!0)
$.u()
x=$.a5().a
return t+" - "+new A.a9(x).K(new A.a9(x).Hz(w))}},C
J=c[1]
A=c[0]
B=c[2]
E=c[127]
F=c[309]
G=c[208]
D=a.updateHolder(c[106],D)
C=c[295]
D.pp.prototype={
gpp(){var x=this.z
if(x==null)return null
if(x instanceof A.iR)return x
return new A.iR(x,x,y.k)},
geV(){var x=this.as
if(x==null)return null
if(x instanceof A.iR)return x
return new A.iR(x,x,y.m)},
aN(){var x,w,v=this,u=A.L(y.g,y.b)
u.l(0,"id",v.a)
u.l(0,"authorId",v.b)
x=v.c
if(x!=null)u.l(0,"replyToMessageId",x)
x=B.ok.gZb()
w=E.jJ(v.d,x)
if(w!=null)u.l(0,"createdAt",w)
w=E.jJ(v.e,x)
if(w!=null)u.l(0,"deletedAt",w)
w=E.jJ(v.f,x)
if(w!=null)u.l(0,"failedAt",w)
w=E.jJ(v.r,x)
if(w!=null)u.l(0,"sentAt",w)
w=E.jJ(v.w,x)
if(w!=null)u.l(0,"deliveredAt",w)
w=E.jJ(v.x,x)
if(w!=null)u.l(0,"seenAt",w)
x=E.jJ(v.y,x)
if(x!=null)u.l(0,"updatedAt",x)
x=v.gpp()
if(x!=null)u.l(0,"reactions",x)
x=v.Q
if(x!=null)u.l(0,"pinned",x)
x=v.geV()
if(x!=null)u.l(0,"metadata",x)
x=F.vn.h(0,v.at)
if(x!=null)u.l(0,"status",x)
u.l(0,"text",v.ax)
u.l(0,"type",v.ay)
return u},
n(d,e){var x,w,v,u=this
if(e==null)return!1
if(u!==e){x=!1
if(J.aL(e)===A.aa(u))if(e instanceof D.pp){w=e.a===u.a
if(w||w){w=e.b===u.b
if(w||w){w=e.c==u.c
if(w||w){w=e.d
v=u.d
if(w==v||J.v(w,v)){w=e.e
v=u.e
if(w==v||J.v(w,v)){w=e.f
v=u.f
if(w==v||J.v(w,v)){w=e.r
v=u.r
if(w==v||J.v(w,v)){w=e.w
v=u.w
if(w==v||J.v(w,v)){w=e.x
v=u.x
if(w==v||J.v(w,v)){w=e.y
v=u.y
if(w==v||J.v(w,v))if(B.bu.ez(e.z,u.z)){w=e.Q==u.Q
if(w||w)if(B.bu.ez(e.as,u.as)){w=e.at==u.at
if(w||w){x=e.ax===u.ax
x=x||x}}}}}}}}}}}}}}else x=!0
return x},
gF(d){var x=this
return A.ar(A.aa(x),x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,B.bu.h1(x.z),x.Q,B.bu.h1(x.as),x.at,x.ax,B.a,B.a,B.a,B.a)},
k(d){var x=this
return"Message.system(id: "+x.a+", authorId: "+x.b+", replyToMessageId: "+A.x(x.c)+", createdAt: "+A.x(x.d)+", deletedAt: "+A.x(x.e)+", failedAt: "+A.x(x.f)+", sentAt: "+A.x(x.r)+", deliveredAt: "+A.x(x.w)+", seenAt: "+A.x(x.x)+", updatedAt: "+A.x(x.y)+", reactions: "+A.x(x.gpp())+", pinned: "+A.x(x.Q)+", metadata: "+A.x(x.geV())+", status: "+A.x(x.at)+", text: "+x.ax+")"},
gi9(){return this.a},
gnk(){return this.b},
gB3(){return this.c},
gnn(){return this.d},
gA0(){return this.e},
gxy(){return this.f},
gt2(){return this.r},
gxo(){return this.w},
gwq(){return this.x},
gBm(){return this.y},
gAT(){return this.Q},
gbg(){return this.at}}
D.Lw.prototype={
u(d){var x=null,w=A.r(d),v=new A.bH().aI(d),u=w.ax,t=u.RG,s=t==null,r=A.c9(s?u.k2:t,1,x,x),q=B.n.m(0,5),p=A.aj(C.ax2,u.b,x,x,28),o=$.ae().m(0,7.5),n=y.e
return A.mc(A.kh(!0,new A.W(v,x,A.G(A.a([B.a_,C.aun,r,A.G(A.a([B.a_,A.A(A.a([new A.a1(q,p,x),A.a3(A.z(x,x,B.j,x,x,new A.I(s?u.k2:t,x,x,o,x,x,x,B.m),x,57,x,x,x,x,x,x),1),new A.a1(B.n.m(0,6),C.axP,x)],n),B.d,x,B.e,B.c,0,x),B.a_],n),B.d,x,B.e,B.B,0,x,B.k)],n),B.d,x,B.e,B.c,0,x,B.k),x),!0,!1,B.E,!0,!0))}}
D.Nt.prototype={
u(d){var x=null,w=A.r(d),v=this.d,u=v?B.bR:B.c9,t=B.cz.m(0,4),s=B.cz.m(0,4),r=w.ax,q=r.RG
r=q==null?r.k2:q
if(v){v=$.ae()
v=new A.cL(v.a.m(0,3),v.b.m(0,3),v.c.m(0,3),B.T)}else{v=$.ae()
v=new A.cL(v.a.m(0,3),v.b.m(0,3),B.T,v.c.m(0,3))}return new A.dk(u,x,x,A.z(x,new A.W(x,45,A.p(this.c,x,x,x,x,x,x,x,x),x),B.j,x,G.Jk,new A.I(r,x,x,v,x,x,x,B.m),x,x,x,t,s,x,x,x),x)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(D.pp,E.e0)
w(A.U,[D.Lw,D.Nt])})()
A.bB(b.typeUniverse,JSON.parse('{"pp":{"e0":[]},"Lw":{"U":[],"k":[],"n":[]},"Nt":{"U":[],"k":[],"n":[]}}'))
var y={m:A.P("iR<m,@>"),k:A.P("iR<m,M<m>>"),e:A.P("y<k>"),g:A.P("m"),b:A.P("@")};(function constants(){var x=a.makeConstList
C.ajZ=new D.Nt("Hello! How are you",!1,null)
C.ajY=new D.Nt("Hi, how are you?",!0,null)
C.ajX=new D.Nt("I'm good, thanks!",!1,null)
C.ajW=new D.Nt("I'm good, thanks for asking!",!0,null)
C.aF1=x([C.ajZ,C.ajY,C.ajX,C.ajW],y.e)
C.aox=new A.en(B.p,B.e,B.c,B.d,null,B.k,null,0,C.aF1,null)
C.aun=new A.mg(1,B.dq,C.aox,null)
C.ax2=new A.aN(61244,"Iconsax",null,!1)
C.aw9=new A.aN(59665,"Iconsax",null,!1)
C.axP=new A.d9(C.aw9,28,null,null,null)
C.aae=new D.Lw(null)
C.ac9=new A.vF("system",null,null,null,null)})()};
(a=>{a["FsTLisHRnuaVU88bgrqvpquhshM="]=a.current})($__dart_deferred_initializers__);