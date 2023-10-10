const Supervisor = require('../models/SupervisorListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newSupervisor = new Supervisor(req.body);

        newSupervisor
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

        Supervisor
        .findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete supervisor error' });
        });
    },

    index: (req, res) => {

        Supervisor
        .find(req.params)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Read supervisor error' });
        }); 
    },

    update: (req, res) => {

        Supervisor
        .findByIdAndUpdate(req.params.id, req.body)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Update supervisor error' });
        }); 
    }
};