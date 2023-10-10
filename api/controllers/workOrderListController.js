const WorkOrder = require('../models/WorkOrderListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newWorkOrder = new WorkOrder(req.body);

        newWorkOrder
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

        WorkOrder
        .findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete workOrder error' });
        });
    },

    index: (req, res) => {

        WorkOrder
        .find(req.params)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Read workOrder error' });
        }); 
    },

    update: (req, res) => {

        WorkOrder
        .findByIdAndUpdate(req.params.id, req.body)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Update workOrder error' });
        }); 
    }
};