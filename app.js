// CREATE - POST
app.post("/product", async (req, res) => {
  const createdProduct = await Product.create(req.body);
  res.json(createdProduct);
});

const productSchema = mongoose.Schema({
  name: "Wireless Keyboard",
  price: "49.99",
  stock: 100,
});

// READ - GET
app.get("/product", async (req, res) => {
  // test
  const foundProduct = await Product.find();
  res.json(foundProduct);
});

//DELETE
app.delete("/pets/:petId", async (req, res) => {
  // test
  const deletedPet = await Pet.findByIdAndDelete(req.params.petId);
  res.json(deletedPet);
});

// UPDATE - PUT
app.put("/product/:productId", async (req, res) => {
  // test
  res.json({ message: `Update route with the param ${req.params.petId}` });
});

app.put("/:productId", async (req, res) => {
  // product query
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.petId,
    req.body
  );
  res.json(updatedProduct);
});

//{
//"userId": "userIdHere",
//"productId": "productIdHere",
//"quantity": 2
//}
