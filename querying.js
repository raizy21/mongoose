// CREATE

// There are 2 main options.

// Instantiating model to create document
const newUser = new User({
  firstName: "John",
  lastName: "Doe",
  email: "jd@mail.com",
});
await newUser.save();

//Model.create()
await User.create({ firstName: "John", lastName: "Doe", email: "jd@mail.com" });

// QUERYING

// User.find() : Returns all matching documents
await User.find({ lastName: "Doe" });

//User.findOne() : Returns first match
await User.findOne({ lastName: "Doe" });

// User.findById() : No need of creating an ObjectId manually
await User.findById("someid");


// UPDATE

// User.updateOne() : Updates without returning document
await User.updateOne(({ email: 'some-email' }, { firstName: 'Jane' });

// User.findOneAndUpdate() or User.findByIdAndUpdate(): Updates and returns document
await User.findOneAndUpdate({ email: 'some-email' }, { firstName: 'Jane' });
await User.findByIdAndUpdate('someid', { firstName: 'Jane' });

// Another way is to simply modify the value and then call save. 
// That’s because every instance of a model is a data access object
const jane = await User.findById('someid');
console.log(jane.name); // "Jane"
jane.name = 'Ada'; // the name is still "Jane" in the database
await jane.save();// Now the name was updated to "Ada" in the database!

// DELETE

// User.deleteOne() : Deletes first match
await User.deleteOne({ firstName: 'Jane' });

// User.deleteMany() : Deletes matches
await User.deleteMany({ firstName: 'Jane' });

// User.findOneAndDelete() or User.findByIdAndDelete(): Deletes by id
await User.findOneAndDelete({ email: 'some-email' });
await User.findByIdAndDelete(someid);