const NumberOfAgreement = require('../models/NumberOfAgreementModel');


module.exports = {
  
    create: (req, res) => {
           
        let newNumberOfAgreement = new NumberOfAgreement(req.body);

        newNumberOfAgreement
        .save()
        .then(() => {
            res.json({ message: 'Zapisane' });
        })
        .catch((err) => {
            if (err.code === 11000) {
                return res.json({ message: 'Już istnieje' })
            } else {
                return res.json({ message: 'Wystąpił błąd. Spróbuj jeszcze raz.' });
            }
        });   
    },

    delete: (req, res) => {

        NumberOfAgreement
        .findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete NumberOfAgreement error' });
        });
    },

    index: (req, res) => {

        NumberOfAgreement
        .find(req.params)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Read NumberOfAgreement error' });
        }); 
    },
};