const WorkOrder = require('../models/WorkOrderListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newWorkOrder = new WorkOrder(req.body);

        newWorkOrder
        .save()
        .then(() => {
            res.json({ save: true });
        })
        .catch((err) => {
            return res.json({ error: 'Get workOrder error' });
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