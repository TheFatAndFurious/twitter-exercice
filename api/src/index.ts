import { randomUUID } from 'crypto';
import express, { Request, Response } from 'express'
//import fs from 'fs';
//import path from 'path';


//const dataPath = path.join(__dirname, './data.json');

let users = [    {
        id: 1,
        name: "Karim",
        userName: "@KebabKiller",
        image: "https://www.parismatch.com/lmnr/f/webp/r/1144,763,FFFFFF,forcex,center-middle/img/var/pm/public/media/image/2022/03/18/16/1985GettyImagescouv.jpg?VersionId=rLNr_kuza9tM1dI_T1um4ra5Y58ySspK"
    },
    {
        id: 2,
        name: "Kody",
        userName: '@IllCrushYourSoulToo',
        image: "https://www.coup-de-vieux.fr/wp-content/uploads/2010/01/OverTheTop1.jpg"
    },
    {
        id: 3,
        name: "Mila",
        userName: "@chickenAintMeatAnyway", 
        image: "https://upload.wikimedia.org/wikipedia/en/0/05/Elmer_in_Rabbit_Fire_%281951%29.png"
    }
    ]


let tweets = [
        {
        id: 1,
        user: 1,
        body: "Donde es mi kebabs ???",
        image: "KebabKiller"
    },
     {
        id: 2,
        user: 2,
        body: "Bow down before your king ya shits",
        image: 'IllCrushYourSoulToo'
    }
]



const app = express();
const PORT =  3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000/tweets');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

//route pour recuperer tous les tweets
app.get('/tweets/', (req, res) => {
    return res.json(tweets)
})

//route pour recuperer les users
app.get('/users/', (req,res) => {
    return res.json(users)
})

//route pour recuperer les tweets d'un user en particulier
app.get('/tweets/:id', (req, res) => {
    const tweetsByUser = tweets.find(t => {
        return t.id === +req.params.id
    })
    res.json({data: tweetsByUser})
})

//route pour rajouter un tweet
app.post('/test', (req, res) => {
    const newId = tweets[tweets.length -1].id+1;
    tweets.push({
        id: newId,
        user: 3,
        body: req.body.body,
        image: "test"
    })
    res.json(tweets)
})

//route pour effacer un tweet
app.delete('/delete/:id', (req, res) => {
    const tweetToDelete = +req.params.id;
    tweets.splice(tweetToDelete, 1)
    res.json(tweets)
})

app.put('/edit/:id', (req, res) => {
    const tweetToEdit = +req.params.id;
    tweets[tweetToEdit].body = req.body.body;
    res.json(tweets);
    }
)



// app.get('/api/data', (req: Request, res:Response) => {
//     console.log(dataPath)
//     fs.readFile(dataPath, 'utf8', (err, data) => {
//         if (err) throw err;
//         res.json(JSON.parse(data));
//     })
// })



// app.post('/api/data', (req:Request, res:Response) => {
//     const newData = req.body;
//     fs.readFile('data.json', 'utf8', (err, data) => {
//         if (err) throw err;
//         const currentData = JSON.parse(data);
//         currentData.push(newData);
//         fs.writeFile('data.json', JSON.stringify(currentData), (err) => {
//             if (err) throw err;
//             res.json(currentData)
//         })
//     } )
// })

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})