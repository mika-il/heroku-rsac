var nodemailer = require('nodemailer')

module.exports = {
    index: function(req,res) {
        //validate the input
        req.checkBody('name', 'Name is required').notEmpty()
        req.checkBody('email', 'Email is required').notEmpty()
        req.checkBody('email', 'Email is not valid').isEmail()
        req.checkBody('subject', 'Subject is required').notEmpty()

        //check the validation object for errors
        var errors = req.validationErrors()
        if (errors) {
           console.log(errors)
           res.json({status: errors})
        }else {
            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'ismas.alan@gmail.com', // Your email id
                    pass: 'tel091710923' // Your password
                }
            });
           
            var mailOptions = {
                from: req.body.email, // sender address
                to: 'alan.ismas@outlook.com', // list of receivers
                subject: req.body.subject + '[ ' + req.body.name + ' ]', // Subject line
                html: req.body.message
            };
        
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    //console.log(error);
                    res.json({status: 'error'});
                }else{
                    //console.log('Message sent: ' + info.response);
                    res.json({status: 'success'});
                };
            });
        }
        
    }
}