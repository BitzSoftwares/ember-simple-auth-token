"use strict"
define("dummy/adapters/application",["exports","ember-data","ember-simple-auth/mixins/data-adapter-mixin"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.RESTAdapter.extend(i.default,{authorizer:"authorizer:token"})}),define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,i,n){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,i.default)(a,n.default.modulePrefix),e.default=a}),define("dummy/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({session:Ember.inject.service("session"),sessionData:Ember.computed("session.session.content.authenticated",function(){return JSON.stringify(this.get("session.session.content.authenticated"),null,"\t")}),tokenData:Ember.computed("session.session.content.authenticated",function(){var e=Ember.getOwner(this).lookup("authenticator:jwt"),t=this.get("session.session.content.authenticated"),i={}
return t&&Object.keys(t).length>0&&(i=e.getTokenData(t.token)),JSON.stringify(i,null,"\t")})})}),define("dummy/controllers/array",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller}),define("dummy/controllers/login",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({identification:"admin",password:"abc123",session:Ember.inject.service("session"),actions:{authenticate:function(){var e=this.getProperties("identification","password")
this.get("session").authenticate("authenticator:jwt",e)}}})}),define("dummy/controllers/object",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/ember-simple-auth",["exports","dummy/config/environment","ember-simple-auth/configuration","ember-simple-auth/initializers/setup-session","ember-simple-auth/initializers/setup-session-service"],function(e,t,i,n,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-simple-auth",initialize:function(e){var o=t.default["ember-simple-auth"]||{}
o.baseURL=t.default.rootURL||t.default.baseURL,i.default.load(o),(0,n.default)(e),(0,a.default)(e)}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function i(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var i
if("undefined"!=typeof window)i=window
else if("undefined"!=typeof global)i=global
else{if("undefined"==typeof self)return
i=self}var n,a=t.default.exportApplicationGlobal
n="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),i[n]||(i[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default={name:"export-application-global",initialize:i}}),define("dummy/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("dummy/initializers/simple-auth-token",["exports","ember-simple-auth-token/authenticators/token","ember-simple-auth-token/authenticators/jwt","ember-simple-auth-token/authorizers/token","ember-simple-auth-token/configuration","dummy/config/environment"],function(e,t,i,n,a,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-simple-auth-token",before:"ember-simple-auth",initialize:function(e){a.default.load(e,o.default["ember-simple-auth-token"]||{}),e.register("authorizer:token",n.default),e.register("authenticator:token",t.default),e.register("authenticator:jwt",i.default)}}}),define("dummy/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("dummy/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("dummy/instance-initializers/ember-simple-auth",["exports","ember-simple-auth/instance-initializers/setup-session-restoration"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-simple-auth",initialize:function(e){(0,t.default)(e)}}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var i=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
i.map(function(){this.route("login")}),e.default=i}),define("dummy/routes/application",["exports","ember-simple-auth/mixins/application-route-mixin"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend(t.default,{session:Ember.inject.service("session"),actions:{invalidateSession:function(){this.get("session").invalidate()}}})}),define("dummy/routes/index",["exports","ember-simple-auth/mixins/authenticated-route-mixin","dummy/config/environment"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend(t.default,{model:function(){return Ember.getOwner(this).lookup("adapter:application").ajax((i.default.API_URL||"")+"/api/users/","GET")},setupController:function(e,t){t.username||this.get("session").invalidate()}})}),define("dummy/routes/login",["exports","ember-simple-auth/mixins/unauthenticated-route-mixin"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend(t.default)}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/cookies",["exports","ember-cookies/services/cookies"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/services/session",["exports","ember-simple-auth/services/session"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/session-stores/application",["exports","ember-simple-auth/session-stores/adaptive"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend()}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"gCKf4g3Z",block:'{"symbols":[],"statements":[[6,"h2"],[9,"id","title"],[7],[0,"Demo: ember-simple-auth-token"],[8],[0,"\\n\\n"],[6,"ul"],[7],[0,"\\n"],[4,"link-to",["index"],[["tagName"],["li"]],{"statements":[[0,"    "],[6,"a"],[9,"style","cursor: pointer"],[7],[0,"Protected Page"],[8],[0,"\\n"]],"parameters":[]},null],[4,"if",[[20,["session","isAuthenticated"]]],null,{"statements":[[0,"    "],[6,"li"],[7],[0,"\\n      "],[6,"a"],[3,"action",[[19,0,[]],"invalidateSession"]],[7],[0,"Logout"],[8],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[]},{"statements":[[4,"link-to",["login"],[["tagName"],["li"]],{"statements":[[0,"      "],[6,"a"],[9,"style","cursor: pointer"],[7],[0,"Login"],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[]}],[8],[0,"\\n\\n"],[1,[18,"outlet"],false],[0,"\\n\\n"],[6,"hr"],[7],[8],[0,"\\n\\n"],[6,"p"],[7],[0,"Settings"],[8],[0,"\\n"],[6,"pre"],[7],[0,"\\n  ENV[\'ember-simple-auth-token\'] = {\\n    refreshTokenPropertyName: \'token\',\\n    serverTokenEndpoint: \'/api/token-auth/\',\\n    serverTokenRefreshEndpoint: \'/api/token-refresh/\',\\n    refreshLeeway: 5\\n  };\\n"],[8],[0,"\\n\\n"],[6,"p"],[7],[0,"Session Contents:"],[8],[0,"\\n"],[6,"pre"],[7],[1,[18,"sessionData"],false],[8],[0,"\\n\\n"],[6,"p"],[7],[0,"Token Contents:"],[8],[0,"\\n"],[6,"pre"],[7],[1,[18,"tokenData"],false],[8]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"PAT1v+Ow",block:'{"symbols":[],"statements":[[6,"p"],[7],[0,"This is a protected page only visible to authenticated users!"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/index.hbs"}})})
define("dummy/templates/login",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"+O4lhnOJ",block:'{"symbols":[],"statements":[[6,"form"],[3,"action",[[19,0,[]],"authenticate"],[["on"],["submit"]]],[7],[0,"\\n  "],[6,"label"],[9,"for","identification"],[7],[0,"Login"],[8],[0,"\\n  "],[1,[25,"input",null,[["id","placeholder","value"],["identification","Enter Login",[20,["identification"]]]]],false],[0,"\\n  "],[6,"label"],[9,"for","password"],[7],[0,"Password"],[8],[0,"\\n  "],[1,[25,"input",null,[["id","placeholder","type","value"],["password","Enter Password","password",[20,["password"]]]]],false],[0,"\\n  "],[6,"button"],[9,"type","submit"],[7],[0,"Login"],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/login.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),i={default:JSON.parse(unescape(t))}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})