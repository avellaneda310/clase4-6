const express = require ("express");
const router = express.Router();//manejador de rutas

let post = [
    {
        "description": "sqswqswqs",
        "timestamp": "2019-11-29T12:46:21.633Z",
        "id": 1,
        "name": "topics test xqxq",
        "thumbnail": "waterfall-or-agile-inforgraphics-thumbnail-1575031579309.jpg",
        "category_id": "5de0fe0b4f76c22ebce2b70a",
        "__v": 0
    },
    {
        "description": "sqswqswqs",
        "timestamp": "2019-11-29T12:50:35.627Z",
        "id": 2,
        "name": "topics test xqxq",
        "thumbnail": "waterfall-or-agile-inforgraphics-thumbnail-1575031835605.jpg",
        "category_id": "5de0fe0b4f76c22ebce2b70a",
        "__v": 0
    },
    {
        "description": " ",
        "timestamp": "2019-11-30T06:51:18.936Z",
        "id": 3,
        "name": "topics test xqxq",
        "thumbnail": "waterfall-or-agile-inforgraphics-thumbnail-1575096678917.jpg",
        "category_id": "5de0fe0b4f76c22ebce2b70a",
        "__v": 0
    },
    {
        "description": "null",
        "timestamp": "2019-11-30T06:51:41.060Z",
        "id": 4,
        "name": "topics test xqxq",
        "thumbnail": "waterfall-or-agile-inforgraphics-thumbnail-1575096701051.jpg",
        "category_id": "5de0fe0b4f76c22ebce2b70a",
        "__v": 0
    },
    {
        "description": "swqdwqd wwwwdwq",
        "timestamp": "2019-11-30T07:05:22.398Z",
        "id": 5,
        "name": "topics test xqxq",
        "thumbnail": "waterfall-or-agile-inforgraphics-thumbnail-1575097522372.jpg",
        "category_id": "5de0fe0b4f76c22ebce2b70a",
        "__v": 0
    },
    {
        "description": "swqdwqd wwwwdwq",
        "timestamp": "2019-11-30T07:36:48.894Z",
        "id": 6,
        "name": "topics test xqxq",
        "thumbnail": "waterfall-or-agile-inforgraphics-thumbnail-1575099408870.jpg",
        "category_id": "5de0fe0b4f76c22ebce2b70a",
        "__v": 0
    }
];

router.get("/top10", (req, res) => {
    res.send(post.slice(0,2))
});

router.get("/one/:id", (req, res) => {
    const id = req.params.id;
    console.log("id:", id);
    if (id) {
        const postOne = post.find((item) => {
            return item.id == id;
        })
        if (postOne) {
            res.send(postOne)
        } else {
            res.status(404).send("Post no encontrado")
        }

    }
    
});

router.get ("/two", (req, res) => {
    let cant = parseInt(req.query.cant);
    let desde = parseInt(req.query.desde);

    console.log("desde:", desde);

    res.send({
        results: post.slice(desde, desde + cant),
        totaPost: post.length
    })
})

module.exports = router;