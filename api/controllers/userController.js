const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

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
            // const token = user.generateAuthToken(user);
            // res.json({ username: user.username, jwt: token });
            if(!user) {
                // console.log('aaa');
                res.json({
                    error: true,
                    message: 'Użytkownik nie istnieje',
                    // user: req.body
                    })
                    return;
            } else {
                bcrypt.compare(req.body.password, user.password, (err, logged) => {

                    if (err) {
                        res.status(500).json({
                            error: true,
                            message: 'Błąd logowania'
                            })
                        return;
                    }

                    if (logged) {
                        const token = user.generateAuthToken(user);
                        // res.json({ name: user.name, jwt: token });
                        console.log('logged');
                        res.status(200).json({
                            error: false,
                            message: 'Użytkownik zalogowany',
                            user: req.body.username,
                            jwt: token
                            })
                    } else {
                        res.status(400).json({
                            error: true,
                            message: 'Niezgodność danych logowania'
                            })
                        return;
                    }
                })
            }
            
      })
      .catch((err) => {
            res.status(400).json({error: err});
        })
    },

    logout: (req, res) => {
        // res.clearCookie('AuthToken');
        res.json({
            error: false,
            message: 'Użytkownik wylogowany',
            user: req.body
            })
        // console.log('Wylogowany');
    }
}