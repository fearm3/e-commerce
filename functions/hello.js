//domain/.netlify/functions/hello
// const items = [{ id: 1, name: "John" }];
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "Hello Word",
  };
};
