const sgMail = require ('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to:'rewainy98@gmail.com',
//     from:'rewainy98@gmail.com',
//     subject: 'Very Important !!',
//     text: 'I hope This find you well Love You !!'
// })

const sendWelocmeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from:'rewainy98@gmail.com',
        subject:'Thank for singn in!',
        text: `Welcome to app, ${name}.let you know get long with app.`
    })
}

const sendCancelatioEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from :'rewainy98@gmail.com',
        subject:'sorry to see you',
        text:'See you soon.${name}. Bye!!'
    })
}
 
module.expotrs = {
    sendWelocmeEmail,
    sendCancelatioEmail
}
