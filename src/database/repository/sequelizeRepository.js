const { rulesToQuery } = require('@casl/ability/extra');
const { Op } = require('sequelize');

/**
 * Tricky way to walk recursively over deeply nested object.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Parameters
 */
function symbolize(query) {
  return JSON.parse(JSON.stringify(query), function keyToSymbol(key, value) {
    if (key[0] === '$') {
      const symbol = Op[key.slice(1)];
      this[symbol] = value;
      return;
    }

    return value;
  });
}

function ruleToSequelize(rule) {
  return rule.inverted ? { $not: rule.conditions } : rule.conditions;
}

function toSequelizeQuery(ability, subject, action) {
  const query = rulesToQuery(ability, action, subject, ruleToSequelize);
  return query === null ? query : symbolize(query);
}

async function accessibleBy(ability, action = 'read') {
  const query = toSequelizeQuery(ability, action, this.name);

  if (query === null) { // there is no accessible records, so no need to send query to db
    return [];
  }

  return this.findAll({
    where: query
  });
}

module.exports = {
  toSequelizeQuery,
  accessibleBy,
};