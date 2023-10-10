const Manager = require('../models/ManagerListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newManager = new Manager(req.body);

        newManager
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

        Manager
        .findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete manager error' });
        });
    },

    index: (req, res) => {

        Manager
        .find(req.params)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Read manager error' });
        }); 
    },

    update: (req, res) => {

        Manager
        .findByIdAndUpdate(req.params.id, req.body)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Update manager error' });
        }); 
    }
};