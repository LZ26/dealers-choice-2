const db = require('./db');
const { Accessory, Phone } = require('./models');

Phone.hasMany(Accessory);
Accessory.belongsTo(Phone);

const syncAndSeed = async () => {
  await db.sync({ force: true });

  const [iPhone11ProMax, SamsungZFold2, LGVelvet, OnePlus8] = await Promise.all(
    [
      Phone.create({
        model: 'iPhone11ProMax',
        price: 1100,
        battery: '4000mAh',
        is5GCapable: false,
        pictureUrl:
          '/Users/Laziz/Fullstack/dealers-choice-2/server/public/img/iPhone_11_Pro_Max_MG_2_carousel.png',
      }),
      Phone.create({
        model: 'SamsungZFold2',
        price: 2000,
        battery: '4500mAh',
        is5GCapable: true,
        pictureUrl:
          '/Users/Laziz/Fullstack/dealers-choice-2/server/public/img/ZFOLD2.png',
      }),
      Phone.create({
        model: 'LGVelvet',
        price: 600,
        battery: '4000mAh',
        is5GCapable: true,
        pictureUrl:
          '/Users/Laziz/Fullstack/dealers-choice-2/server/public/img/LGVELVET.png',
      }),
      Phone.create({
        model: 'OnePlus8',
        price: 1100,
        battery: '4300mAh',
        is5GCapable: true,
        pictureUrl:
          '/Users/Laziz/Fullstack/dealers-choice-2/server/public/img/ONEPLUS8.png',
      }),
    ]
  );

  const [cover, screenProtector, audio, charger] = await Promise.all([
    Accessory.create({
      manufacaturer: 'Speck',
      category: 'cover',
      price: 40,
      warranty: '3-years',
    }),

    Accessory.create({
      manufacaturer: 'ZAGG',
      category: 'screen-protector',
      price: 50,
      warranty: 'lifetime',
    }),
    Accessory.create({
      manufacaturer: 'JBL',
      category: 'audio',
      price: 150,
      warranty: '3-years',
    }),
    Accessory.create({
      manufacaturer: 'ubioLabs',
      category: 'charger',
      price: 50,
      warranty: 'one-year',
    }),
  ]);
};

module.exports = {
  db,
  syncAndSeed,
  Phone,
  Accessory,
};
