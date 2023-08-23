const User = require('../models/UserModel');
// const bcrypt = require('bcrypt');

module.exports = {
    create: (req, res) => {
        let newUser = new User(req.body);
        
        newUser
        .save()
        .then(() => {
            res.json({ save: true });
        })
        .catch((err) => {
            // if (err.code === 11000) {
            //     res.render('userViews/signupUser', {
            //         error: true,
            //         message: 'User already exist',
            //         user: req.body
            //     })
            // }
            return res.json({ error: `${err.code}` });
        }); 
    },

    login: (req, res) => {

        User
        // .findOne({email: req.body.email})
        .findOne({username: req.body.username})
        .then((user) => {
            // console.log('user', user);
            if(!user) {
                res.json({
                    error: true,
                    message: 'Użytkownik nie istnieje',
                    user: req.body
                    })
                    return;
            } else {
                // bcrypt.compare(req.body.password, user.password, (err, logged) => {

                    // if (err) {
                    //     res.json({
                    //         error: true,
                    //         message: 'Błąd logowania',
                    //         user: req.body
                    //         })
                    //     return;
                    // }

                    // if (logged) {
                        // if (user) {
                        // const token = user.generateAuthToken(user);
                        // // res.send(token);
                        // res.cookie('AuthToken', token);
                        // res.redirect('/blog');
                        res.json({
                            error: false,
                            message: 'Użytkownik zalogowany',
                            user: req.body
                            })
                        console.log('Zalogowany');
                    // } else {
                    //     res.json({
                    //         error: true,
                    //         message: 'Nie prawidłowe dane logowania',
                    //         user: { email: req.body.email, password: '' }
                    //         })
                    //     return;
                    // }
                // })
            }
            
      })
      .catch((err) => {
            res.send(err);
        })
    },

    logout: (req, res) => {
        // res.clearCookie('AuthToken');
        // res.redirect('/user/login');
        res.json({
            error: false,
            message: 'Użytkownik wylogowany',
            user: req.body
            })
        console.log('Wylogowany');
    }
}