const data = require('../data/posts');

function index(req, res) {
    res.json(data);
}

function show(req, res) {
    
    const post = data.find(post => post.slug == req.params.slug);

    if(!post){
        return res.status(404).json({
            error: 'Not found',
            messager: 'Post not found'
        })
    }

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
    const postSlug = req.params.slug;
    console.log(postSlug);
    

    data.forEach((post, i, arr) => {
        const currentSlug = post.slug;
        console.log(currentSlug);
        
        if(currentSlug === postSlug){
            arr.splice(i, 1);
        }
    })

    
    
    console.log(data);
    
    
    res.sendStatus(204);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}