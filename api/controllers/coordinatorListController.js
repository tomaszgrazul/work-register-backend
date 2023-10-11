const Coordinator = require('../models/CoordinatorListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newCoordinator = new Coordinator(req.body);

        newCoordinator
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

        Coordinator
        .findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete coordinator error' });
        });
    },

    index: (req, res) => {

        Coordinator
        .find(req.params)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Read coordinator error' });
        }); 
    },

    update: (req, res) => {

        Coordinator
        .findByIdAndUpdate(req.params.id, req.body)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Update coordinator error' });
        }); 
    }
};