const Office = require('../models/OfficeListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newOffice = new Office(req.body);

        newOffice
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

        Office
        // .findByIdAndDelete(req.body.id) //dla post
        .findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete office error' });
        });
    },

    index: (req, res) => {

        Office
        // .find(req.body)
        .find(req.params)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Read office error' });
        }); 
    }
};