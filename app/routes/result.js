import Route from '@ember/routing/route';

  

    export default Route.extend({
       model(){
           var UserName = this.controllerFor("details").get("UserName");
           var Password = this.controllerFor("details").get("Password");
           var email= this.controllerFor("details").get("email");
    
           this.controllerFor("result").set("UserName", UserName);
           this.controllerFor("result").set("Password", Password);
           this.controllerFor("result").set("email",email);
       }


});
