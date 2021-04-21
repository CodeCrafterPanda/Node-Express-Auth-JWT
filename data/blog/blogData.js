const Blog = require('../../models/Blog');
// ------------------------  Create new Blog ---------------------------------------
const createNewBlog = async data => {
  const { title, content, creator, tags } = data;
  const blog = new Blog({
    title,
    content,
    creator,
    tags
  });
  const savedBlog = await blog.save();
  return savedBlog;
};
//------------------------- Find All Blogs -------------------------------------
const findBlogs = async () => {
  const blogs = await Blog.find();
  return blogs;
};
//------------------------- Find Single Blogs -------------------------------------
const findSingleBlog = async data => {
  const blog = await Blog.findOne({ _id: data });
  return blog;
};

//------------------------- Update Single Blog -------------------------------------
const updateBlog = async (id, data) => {
  const blog = await Blog.updateOne({ _id: id }, data);
  return blog;
};

//------------------------- Delete Single Blog -------------------------------------
const deleteBlog = async id => {
  const blog = await Blog.deleteOne({ _id: id });
  return blog;
};

module.exports.createNewBlog = createNewBlog;
module.exports.findBlogs = findBlogs;
module.exports.findSingleBlog = findSingleBlog;
module.exports.updateBlog = updateBlog;
module.exports.deleteBlog = deleteBlog;
