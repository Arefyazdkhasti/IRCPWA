((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D={
elS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){return new D.nE(l,d,p,f,g,i,r,h,q,x,o,n,m,u,t,v,w,e,a0,k,s,j,"image")},
nE:function nE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1){var _=this
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
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.db=x
_.dx=a0
_.dy=a1},
dYZ(d,e,f,g){var x=null
return new A.vJ(A.c3M(x,x,new A.AG(d,1,x,B.ns)),x,x,x,g,f,x,B.dy,x,e,B.O,B.dn,!1,x,!1,x)}},C,E
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[120],D)
C=c[128]
E=c[313]
D.nE.prototype={
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
w=C.jk(v.d,x)
if(w!=null)u.p(0,"createdAt",w)
w=C.jk(v.e,x)
if(w!=null)u.p(0,"deletedAt",w)
w=C.jk(v.f,x)
if(w!=null)u.p(0,"failedAt",w)
w=C.jk(v.r,x)
if(w!=null)u.p(0,"sentAt",w)
w=C.jk(v.w,x)
if(w!=null)u.p(0,"deliveredAt",w)
w=C.jk(v.x,x)
if(w!=null)u.p(0,"seenAt",w)
x=C.jk(v.y,x)
if(x!=null)u.p(0,"updatedAt",x)
x=v.goO()
if(x!=null)u.p(0,"reactions",x)
x=v.Q
if(x!=null)u.p(0,"pinned",x)
x=v.geN()
if(x!=null)u.p(0,"metadata",x)
x=E.uO.h(0,v.at)
if(x!=null)u.p(0,"status",x)
u.p(0,"source",v.ax)
x=v.ay
if(x!=null)u.p(0,"text",x)
x=v.ch
if(x!=null)u.p(0,"thumbhash",x)
x=v.CW
if(x!=null)u.p(0,"blurhash",x)
x=v.cx
if(x!=null)u.p(0,"width",x)
x=v.cy
if(x!=null)u.p(0,"height",x)
x=v.db
if(x!=null)u.p(0,"size",x)
x=v.dx
if(x!=null)u.p(0,"hasOverlay",x)
u.p(0,"type",v.dy)
return u},
m(d,e){var x,w,v,u=this
if(e==null)return!1
if(u!==e){x=!1
if(J.aN(e)===A.a9(u))if(e instanceof D.nE){w=e.a===u.a
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
if(w||w){w=e.ax===u.ax
if(w||w){w=e.ay==u.ay
if(w||w){w=e.ch==u.ch
if(w||w){w=e.CW==u.CW
if(w||w){w=e.cx==u.cx
if(w||w){w=e.cy==u.cy
if(w||w){w=e.db==u.db
if(w||w){x=e.dx==u.dx
x=x||x}}}}}}}}}}}}}}}}}}}}}else x=!0
return x},
gF(d){var x=this
return A.b6([A.a9(x),x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,B.bz.fU(x.z),x.Q,B.bz.fU(x.as),x.at,x.ax,x.ay,x.ch,x.CW,x.cx,x.cy,x.db,x.dx])},
k(d){var x=this
return"Message.image(id: "+x.a+", authorId: "+x.b+", replyToMessageId: "+A.w(x.c)+", createdAt: "+A.w(x.d)+", deletedAt: "+A.w(x.e)+", failedAt: "+A.w(x.f)+", sentAt: "+A.w(x.r)+", deliveredAt: "+A.w(x.w)+", seenAt: "+A.w(x.x)+", updatedAt: "+A.w(x.y)+", reactions: "+A.w(x.goO())+", pinned: "+A.w(x.Q)+", metadata: "+A.w(x.geN())+", status: "+A.w(x.at)+", source: "+x.ax+", text: "+A.w(x.ay)+", thumbhash: "+A.w(x.ch)+", blurhash: "+A.w(x.CW)+", width: "+A.w(x.cx)+", height: "+A.w(x.cy)+", size: "+A.w(x.db)+", hasOverlay: "+A.w(x.dx)+")"},
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
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(D.nE,C.dP)})()
A.br(b.typeUniverse,JSON.parse('{"nE":{"dP":[]}}'))
var y={m:A.M("iz<m,@>"),k:A.M("iz<m,O<m>>"),g:A.M("m"),b:A.M("@")}};
(a=>{a["oa9dBvc8N6up9lXk09F7jaSglUo="]=a.current})($__dart_deferred_initializers__);