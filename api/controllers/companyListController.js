const Company = require('../models/CompanyListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newCompany = new Company(req.body);

        newCompany
        .save()
        .then(() => {
            res.json({ message: '',
                       save: true });
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

        Company
        // .findByIdAndDelete(req.body.id) //dla post
        .findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete company error' });
        });
    },

    index: (req, res) => {

        Company
        // .find(req.body)
        .find(req.params)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Read company error' });
        }); 
    }
};