module.exports = (sequelize, Sequelize) => {
  const Answer = sequelize.define("answer", {
    qastionID: {
      type: Sequelize.INTEGER
    },
    text: {
      type: Sequelize.TEXT
    }
  });

  return Answer;
};
