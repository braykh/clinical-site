const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

const dataset = require('./dataset.json');
let bulk = [];

dataset.bloodTestConfig.forEach((data) => {
    bulk.push({
      index: {
        _index: 'blood_test',
      },
    });
    bulk.push(data);
});

client.bulk({ body: bulk }, function (err, response) {
    if (err) {
      console.log('Failed bulk operation.', err);
    } else {
      console.log('Successfully imported', response);
    }
  });