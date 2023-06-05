class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:newId
    detail(req, res) {
        res.send('News Details');
    }
}

export default new NewsController();
