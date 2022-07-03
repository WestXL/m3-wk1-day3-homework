router.get('/', function (req, res, next) {
    res.render('content', {
        title: 'Food Blog'
    });
});

module.exports = router;