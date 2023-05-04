//the real login and registration 

var aluminiModel = require('./aluminiModel');
var key = 'aluminiPortal1234';
var encryptor = require('simple-encryptor')(key);

module.exports.createStudentDBService = (aluminiDetails) => {


   return new Promise(function myFn(resolve, reject) {

       var aluminiModelData = new aluminiModel();

       aluminiModelData.name = aluminiDetails.name;
       aluminiModelData.aluminiId = aluminiDetails.aluminiId;
       aluminiModelData.email = aluminiDetails.email;
       aluminiModelData.password = aluminiDetails.password;
       var encrypted = encryptor.encrypt(aluminiDetails.password);
       aluminiModelData.password = encrypted;

       aluminiModelData.save(function resultHandle(error, result) {

           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
       });

   });

}

module.exports.loginuserDBService = (aluminiDetails)=> 
{
   return new Promise(function myFn(resolve, reject) 
   {

    aluminiModel.findOne({ email: aluminiDetails.email},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               var decrypted = encryptor.decrypt(result.password);

               if(decrypted== aluminiDetails.password)
               {
                  resolve({status: true,msg: "Alumini Validated Successfully"});
               }
               else
               {
                  reject({status: false,msg: "alumini Validated failed"});
               }
            }
            else
            {
               reject({status: false,msg: "alumini Error Detailssss"});
            }

         }
      
      });
      
   });
}