const Principal = require('../models/PrincipalListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newPrincipal = new Principal(req.body);

        newPrincipal
        .save()
        .then(() => {
            res.json({ save: true });
        })
        .catch((err) => {
            return res.json({ error: 'Get principal error' });
        });   
    },

    delete: (req, res) => {

        Principal
        .findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete principal error' });
        });
    },

    index: (req, res) => {

        Principal
        .find(req.params)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Read principal error' });
        }); 
    },

    update: (req, res) => {
        console.log(req.params.id, req.body);
        Principal
        .findByIdAndUpdate(req.params.id, req.body)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Update principal error' });
        }); 
    }
};