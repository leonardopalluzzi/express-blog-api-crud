const data = require('../data/posts');

function index(req, res) {
    res.json(data);
}

function show(req, res) {
    const post = data.find(post => post.slug == req.params.slug);

    //for loop implementation
    /*
    let post;
    for(let i = 0; i < data.length; i++){
        const reqPost = req.params.slug
        if(data[i].slug == reqPost){
            post = data[i];
            break;
        }
    }
    */

    res.json(post);
}

function store(req, res) {
    res.send('Upload a new post');
}

function update(req, res) {
    res.send(`Update the post: ${req.params.slug}`);
}

function modify(req, res) {
    res.send(`Modify the post: ${req.params.slug}`);
}

function destroy(req, res) {
    res.send(`Delete the post: ${req.params.slug}`);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}