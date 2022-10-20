const router = require('express').Router();
// define routes 
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');

// use routes 

router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

// export routes

module.exports=router

