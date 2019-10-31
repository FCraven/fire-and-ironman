const Sequelize = require('sequelize')
const db = require('./index')
const crypto = require('crypto')
const _ = require('lodash')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
  },
  salt: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  }
} , {
  hooks: {
    beforeCreate: setSaltAndPassword,
    beforeUpdate: setSaltAndPassword
  }
}
);

//Instance methods
User.prototype.correctPassword = function(candidatePassword) {
  return this.Model.encryptPassword(candidatePassword, this.salt) === this.password;
};

User.prototype.sanitize = function() {
  return _.omit(this.toJSON(), ['password', 'salt']);
}

//Class methods
User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
}

User.encryptPassword = function (plainText, salt) {
  const hash = crypto.createHash('sha1');
  hash.update(plainText);
  hash.update(salt);
  return hash.digest('hex');
}

function setSaltAndPassword(user) {
  if(user.changed('password')) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password, user.salt)
  }
}


module.exports = User
