var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Members = require('../../Members.js');
var expresses = require('express');
var router = expresses.Router();
var uuid = require('uuid');
var idFilter = function (req) { return function (member) { return member.id === parseInt(req.params.id); }; };
//Get all members
router.get('/', function (req, res) {
    res.json(Members);
});
//Get a single member
router.get('/:id', function (req, res) {
    var checkMember = Members.some(function (member) { return member.id === parseInt(req.params.id); });
    if (checkMember) {
        res.send(Members.filter(function (member) { return member.id === parseInt(req.params.id); }));
    }
    else {
        res.status(404).json({ msg: "Member with " + Members.id + " not found" });
    }
});
router.post('/', function (req, res) {
    var newMember = __assign(__assign({}, req.body), { id: uuid.v4(), status: 'active' });
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and email' });
    }
    Members.push(newMember);
    res.json(Members);
    // res.redirect('/');
});
// Update Member
router.put('/:id', function (req, res) {
    var found = Members.some(idFilter(req));
    if (found) {
        Members.forEach(function (member, i) {
            if (idFilter(req)(member)) {
                var updMember = __assign(__assign({}, member), req.body);
                Members[i] = updMember;
                res.json({ msg: 'Member updated', updMember: updMember });
            }
        });
    }
    else {
        res.status(400).json({ msg: "No member with the id of " + req.params.id });
    }
});
// Delete Member
router["delete"]('/:id', function (req, res) {
    var found = Members.some(idFilter(req));
    if (found) {
        res.json({
            msg: 'Member deleted',
            members: Members.filter(function (member) { return !idFilter(req)(member); })
        });
    }
    else {
        res.status(400).json({ msg: "No member with the id of " + req.params.id });
    }
});
module.exports = router;
