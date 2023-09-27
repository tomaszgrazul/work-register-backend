const TeamMember = require('../models/TeamListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newTeamMember = new TeamMember(req.body);

        newTeamMember
        .save()
        .then(() => {
            res.json({ save: true });
        })
        .catch((err) => {
            return res.json({ error: 'Get TeamMember error' });
        });   
    },

    delete: (req, res) => {

        TeamMember
        // .findByIdAndDelete(req.body.id) //dla post
        .findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete TeamMember error' });
        });
    },

    index: (req, res) => {

        TeamMember
        // .find(req.body)
        .find(req.params)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Read TeamMember error' });
        }); 
    }
};