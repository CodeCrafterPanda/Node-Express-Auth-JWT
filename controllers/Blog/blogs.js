const router = require('express').Router();
const { jwtMiddleware, blogAuthMiddleware } = require('../../middlewares');

const {
  createNewBlog,
  findBlogs,
  findSingleBlog,
  updateBlog,
  deleteBlog
} = require('../../data/blog/blogData');
// ----------------------------Getting All Blogs----------------------------------------------
router.get('/', blogAuthMiddleware, async (req, res) => {
  const blogs = await findBlogs();
  res.json(blogs);
});
// ----------------------------Creating New Blog----------------------------------------------
router.post('/', jwtMiddleware, blogAuthMiddleware, async (req, res) => {
  const blog = await createNewBlog(req.body);
  res.json(blog);
});
// ----------------------------Getting Specific Blog----------------------------------------------
router.get('/:id', blogAuthMiddleware, async (req, res) => {
  const blog = await findSingleBlog(req.params.id);
  res.json(blog);
});
// ----------------------------Updating Blog----------------------------------------------
router.patch('/:id', jwtMiddleware, blogAuthMiddleware, async (req, res) => {
  const blog = await updateBlog(req.params.id, req.body);
  res.json(blog);
});
// ----------------------------Updating Blog----------------------------------------------
router.delete('/:id', jwtMiddleware, blogAuthMiddleware, async (req, res) => {
  const blog = await deleteBlog(req.params.id);
  res.json(blog);
});

module.exports = router;
