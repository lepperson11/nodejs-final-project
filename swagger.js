const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "My Employee API",
    description: "An API that shows employees data.",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputfile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputfile, endpointFiles, doc);

swaggerAutogen(outputfile, endpointFiles, doc).then(async () => {
  await import("./server.js");
});
