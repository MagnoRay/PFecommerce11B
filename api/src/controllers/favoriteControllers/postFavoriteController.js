const { User } = require("../../db");

const postFavoriteController = async (email, foodId) => {
  const userByEmail = await User.findOne({where: {email: email}});
  userByEmail.addFood(foodId);
  return 'Favorito agregado.'
};
  
module.exports = { postFavoriteController };