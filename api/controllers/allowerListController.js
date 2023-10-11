const Allower = require('../models/AllowerListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newAllower = new Allower(req.body);

        newAllower
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

        Allower
        .findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete allower error' });
        });
    },

    index: (req, res) => {

        Allower
        .find(req.params)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Read allower error' });
        }); 
    },

    update: (req, res) => {

        Allower
        .findByIdAndUpdate(req.params.id, req.body)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Update allower error' });
        }); 
    }
};