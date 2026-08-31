const router=require('express').Router(); const c=require('../controllers/blogController'); router.get('/',c.getAll); router.get('/:slug',c.getOne); module.exports=router;
