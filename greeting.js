import { Router } from 'express';
const router = Router();

router.get('/api', function (req, res) {
    res.json({greeting: 'hello API'});
  });

 export default router; 
