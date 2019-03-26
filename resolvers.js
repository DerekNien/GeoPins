const user = {
  _id: "1",
  name: "Derek",
  email: "derek@gmail.com",
  picture: "https://cloudinary.com/asdf"
};

export default {
  Query: {
    me: () => user
  }
}