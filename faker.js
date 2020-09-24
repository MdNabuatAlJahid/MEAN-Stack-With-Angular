const faker = require("faker");

module.exports = () => {
  const PublicEventDTO = [];
  for (let i = 1; i < 51; i++) {
    PublicEventDTO.push({
      eventId: i,
      eventName: faker.commerce.productName(),
      eventDescription: faker.lorem.sentence(),
      companyName: faker.company.companyName(),
      website: faker.company.companyName(),
      contactPhone: faker.phone.phoneNumber(),
      contactEmail: faker.internet.email(),
      defaultLanguage: faker.lorem.word(),
      startDate: faker.date.recent(),
      endDate: faker.date.future(),
    });
  }
  return {
    PublicEventDTO: PublicEventDTO,
  };
};
