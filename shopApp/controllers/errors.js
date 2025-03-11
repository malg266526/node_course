exports.getPageNotFound = (req, res) => {
    res.render('404', {pageTitle: 'Not Found', path:""});
}