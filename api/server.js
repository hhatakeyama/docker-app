const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
    MongoClient.connect("mongodb://admin:admin@localhost:27017", (err, client) => {
        if(err) throw err;

        const db = client.db("teste");
        const query = {_id: new ObjectId("625cc1742e4144fabf3d14c1")};
        db.collection("users").findOne(query, (err, result) => {
            if (err) throw err;
            client.close();
            console.log(result);
            resp.send(result);
        });
    });
    // resp.send({message: "teste"});
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Conexão estabelecida pela porta ${process.env.PORT}`);
});