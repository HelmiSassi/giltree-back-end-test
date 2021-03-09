const model = require('../models/user.models');

const verifyChekDuplicate = (req, res, next) => {
    const loginInfo = req.body;
      model.findOne({
        where: {
          email: loginInfo.email
        }}, user => {
          if(user?.email) {
              res.status(401).send('wrong email or password');
              return;
          }
          next();
        })
      };
      
    //   }).then(user => {
    //     if (user) {
    //       res.status(400).send({
    //         message: "Failed! Email is already in use!"
    //       });
    //       return;
    //     }
  
    //     next();
    //   });
    // };

    
    

    module.exports = verifyChekDuplicate;