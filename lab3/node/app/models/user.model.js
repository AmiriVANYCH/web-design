module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("userProfill", {
    name: {
      type: Sequelize.TEXT
    },
    mail: {
      type: Sequelize.TEXT
    },
    pass: {
      type: Sequelize.TEXT
    },
    bd: {
      type: Sequelize.TEXT
    },
    sex: {
      type: Sequelize.INTEGER
    },
    avatar: {
      type: Sequelize.TEXT
    },
    userId: {
      type: Sequelize.INTEGER
    }


  });

  return User;
};
