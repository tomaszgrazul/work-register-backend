const Coordinating = require('../models/CoordinatingListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newCoordinating = new Coordinating(req.body);

        newCoordinating
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

        Coordinating
        .findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete coordinating error' });
        });
    },

    index: (req, res) => {

        Coordinating
        .find(req.params)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Read coordinating error' });
        }); 
    },

    update: (req, res) => {

        Coordinating
        .findByIdAndUpdate(req.params.id, req.body)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Update coordinating error' });
        }); 
    }
};