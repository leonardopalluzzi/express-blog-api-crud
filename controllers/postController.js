const data = require('../data/posts');

function index(req, res) {
    
    let filterData = data;

    if(req.query.tag){
        filterData = data.filter(post => post.tags.includes(req.query.tag));
    }

    if(filterData.length == 0){
        return res.status(404).json({
            error: 'Not found',
            message: 'Tag not found in any post'
        })
    }

    res.json(filterData);
}

function show(req, res) {

    const post = data.find(post => post.slug == req.params.slug);

    if (!post) {
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
    //create new slug
    const newSlug = req.body.title.replace(/\s+/g, '-').toLowerCase();
    console.log(newSlug);

    const newPost = {
        title: req.body.title,
        slug: newSlug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    data.push(newPost);

    console.log(data);
    
    res.status(201);
    res.json(newPost);
    
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

    const currentSlug = data.find(post => post.slug == postSlug);
    console.log(currentSlug);

    if (!currentSlug) {
        return res.status(404).json({
            error: 'Not found',
            message: 'Post not found'
        })
    }

    data.forEach((post, i, arr) => {
        if (currentSlug === postSlug) {
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