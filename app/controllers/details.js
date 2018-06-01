import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        submitAction: function() {
            var username = this.get('username');
            console.log(username);
            var email = this.get('email'); 
            console.log(email);
            var password = this.get('password');
            console.log(password);
            var login = {
                "username":username,
                "email":email,
                "password":password
            }


            

            console.log('arjun',email);
            
            return $.ajax({
            url:'http://localhost:8082/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(login),
            success: function(response) {
            console.log(JSON.stringify(response));
            console.log("res123...>>>",response);
            alert(''+response.message+'');

                if(email="manoj@rapidqube.com"){
                    this.transitionToRoute('result');
                    console.log(result)
                 }
                 else
                   console.log("Invalid Emailid and Password")
                 
                
                }});
            
            }
        
        
            
        }
      }
    
);

