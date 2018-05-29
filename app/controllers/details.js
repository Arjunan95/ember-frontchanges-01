import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        submitAction: function() {
            var UserName = this.get('UserName');
            var Password = this.get('Password');
            var email = this.get('email');
            

           
            this.set('UserName', UserName);
            this.set('Password', Password);
            this.set('email',email);
            
            
            $.ajax({
                type: 'POST',
                url: "http://localhost:3005/login",
                dataType: 'json',
                data:{name:UserName,pass:Password,email:email} ,
                cache: false,
                success: function(result) {
                if(result){
                    console.log(result)
                  
                  
                    //alert(result)
                  
                    
                }else{
                    alert("error");
                }
                }
            });
        
 
            this.transitionToRoute('result');
        }
      }
    
});

