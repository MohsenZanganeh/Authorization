const { AbilityBuilder, Ability } = require('@casl/ability');

function defineAbilitiesFor(user) {
  const { rules, can } = AbilityBuilder.extract();

  can('read', ['Post', 'Comment']);
  can('create', 'User');

  if (user) {
    can(['create', 'delete'], ['Post', 'Comment'], { author: user._id });
    can(['read', 'aa'], 'User', { _id: user.id },);
  }

  return new Ability(rules);
}

const ANONYMOUS_ABILITY = defineAbilitiesFor(null);

module.exports = function createAbilities(req, res, next) {
  console.log('----createAbilities----');
  // req.ability = req.user.email ? defineAbilitiesFor(req.user) : ANONYMOUS_ABILITY;
  next();
};
