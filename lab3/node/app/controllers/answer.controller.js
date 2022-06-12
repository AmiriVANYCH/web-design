const db = require("../models");
const Answer = db.answer
const Op = db.Sequelize.Op;


exports.getAnswer = (req, res) => {
  const id = req.params.id;

    Answer.findAll({where:{qastionID:id}})
        .then(resalt => {
            if (resalt.length != 0) {
                res.send(resalt);

            }
            else {
                res.send({ exist: 0 });
            }
        });
       
};




