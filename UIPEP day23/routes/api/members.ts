const Members = require('../../Members.js')
const expresses = require('express')
const router = expresses.Router()
const uuid = require('uuid')
const idFilter = req => member => member.id === parseInt(req.params.id);


//Get all members
router.get('/',(req,res) => {
    res.json(Members)
})

//Get a single member
router.get('/:id', (req,res) =>{
    const checkMember = Members.some(member => member.id === parseInt(req.params.id))

    if(checkMember){
        res.send(Members.filter(member => member.id === parseInt(req.params.id)))
    }else{
        res.status(404).json({msg: `Member with ${Members.id} not found`})
    }    
})

router.post('/', (req, res) => {
    const newMember = {
      ...req.body,
      id: uuid.v4(),
      status: 'active'
    };
  
    if (!newMember.name || !newMember.email) {
      return res.status(400).json({ msg: 'Please include a name and email' });
    }
  
    Members.push(newMember);
    res.json(Members);
    // res.redirect('/');
  });

  // Update Member
router.put('/:id', (req, res) => {
    const found = Members.some(idFilter(req));
  
    if (found) {
      Members.forEach((member, i) => {
        if (idFilter(req)(member)) {
  
          const updMember = {...member, ...req.body};
          Members[i] = updMember
          res.json({ msg: 'Member updated', updMember });
        }
      });
    } else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
  });
  
  // Delete Member
  router.delete('/:id', (req, res) => {
    const found = Members.some(idFilter(req));
  
    if (found) {
      res.json({
        msg: 'Member deleted',
        members: Members.filter(member => !idFilter(req)(member))
      });
    } else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
  });
  

module.exports = router