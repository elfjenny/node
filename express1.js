const express = require ('Express'); 
const exp1 = express(); 
port = 3000; 

exp1.get('/', (req, res)=>{
    res.send('Bienvenue sur EXPRESS1');
}); 

exp1.listen(port, (err)=>{
    if (err){
        throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
});

exp1.get('/api/movies', (req, res)=>{
    res.send('All films');
});

exp1.get('/api/movies\<movie id\>', (req, res)=>{
    res.json({id:\<movie id\});
});

exp1.get('/api/employee', (req, res)=>{
    res.status(304);
});

exp1.get('/api/employee?name=\<employee name\>', (req, res)=>{
    res.status(404).send('Unable to retrieve employee' + <name of employee the employee \>);
});