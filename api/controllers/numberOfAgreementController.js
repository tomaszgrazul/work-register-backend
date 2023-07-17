const NumberOfAgreement = require('../models/NumberOfAgreementModel');


module.exports = {
  
    create: (req, res) => {
           
        let newNumberOfAgreement = new NumberOfAgreement(req.body);
        
        newNumberOfAgreement
        .db.collection("numberOfAgreement")
        .save()
        .then(() => {
            res.json({ save: true });
        })
        .catch((err) => {
            return res.json({ error: 'Get NumberOfAgreement error' });
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