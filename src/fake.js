const { faker } = require('@faker-js/faker');

const getPicture = (gender) => {
  const map = {
    Male: 'men',
    Female: 'women',
  };
  const num = Math.ceil(Math.random() * 75);
  return `https://randomuser.me/api/portraits/${map[gender]}/${num}.jpg`;
};

const getUser = () => {
  const gender = faker.name.gender(true);
  const name = faker.name.findName(undefined, undefined, gender.toLowerCase());
  const picture = getPicture(gender);
  const emailPrefix = name.toLowerCase().replace(/[^a-z]/g, '.');
  const email = `${emailPrefix}@company.biz`;
  const card = faker.helpers.createCard();
  const {
    address: { streetC, city, country, zipcode },
  } = card;
  const {
    company: { catchPhrase },
  } = card;
  return {
    uuid: faker.datatype.uuid(),
    name,
    gender,
    picture,
    email,
    address: {
      street: streetC,
      city,
      country,
      zipcode,
    },
    catchPhrase,
  };
};

const generateUsers = (num = 20) => {
  return new Array(num).fill(null).map(getUser);
};

module.exports = generateUsers;
