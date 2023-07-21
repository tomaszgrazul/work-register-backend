const Allower = require('../models/AllowerListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newAllower = new Allower(req.body);

        newAllower
        .save()
        .then(() => {
            res.json({ save: true });
        })
        .catch((err) => {
            return res.json({ error: 'Get allower error' });
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