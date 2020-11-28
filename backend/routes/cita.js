const { Router } = require('express');
const cita = Router();
const mysqlConnection = require('../db/db');


// Consultar todas las citas que se encuentran en la tabla cita
// que poseen el numero_id_trabajador de un trabajador.

//MOSTRAR TODAS LAS CITAS QUE SE ENCUENTRAN AGENDADAS
cita.get('/citas', (req,res)=>{
    mysqlConnection.query('SELECT * FROM cita', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// CREACION DE UNA NUEVA CITA CON LOS DATOS DEL USUARIO Y EL TRABAJADOR
// LO ESTOY UTILIZANDO
cita.post('/nueva-cita/solicitud-cita', (req,res)=>{
    const { codigo_cliente, numero_id_trabajador, estado_cita } = req.body;
    
    const cita = [ codigo_cliente, numero_id_trabajador, estado_cita ];

    console.log(cita)
    const nuevaCita = `INSERT INTO cita(codigo_cliente, numero_id_trabajador, estado_cita) VALUES (?,?,?)`;

    mysqlConnection.query(nuevaCita, cita, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `Se ha agregado una nueva cita`});
        }
    });
});

// TABLA: Trabajos realizados 
// OBJETIVO: El trabajador puede visualizar los trabajos que a realizado, estos se visualizaran en forma de cards,
// por ende es necesario consultar los datos que se encuentran en el apartado del cliente, el cual solicito la cita,
// y ya ha terminado.
// URL: /TrabajadoresInicio/TrabajosRealizados
// FUNCIONA, PERO NECESITO LA INFORMACION DEL CLIENTE ADEMAS DE FILTRAR LA INFORMACION POR EL ESTADO
cita.get('/cita/cards/trabajosRealizados/:numero_id_trabajador', (req,res)=>{
    const { numero_id_trabajador } = req.params;
    mysqlConnection.query('SELECT * FROM cita WHERE numero_id_trabajador = ? AND estado_cita = "Finalizada" ',[numero_id_trabajador], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


// TABLA: Trabajos por realizar 
// OBJETIVO: El trabajador puede visualizar los trabajos que debe realizar, estos se visualizaran en forma de cards,
// por ende es necesario consultar los datos que se encuentran en el apartado del cliente, el cual solicito la cita. 
// URL: /TrabajadoresInicio/TrabajosPorRealizar
// FUNCIONA, PERO NECESITO LA INFORMACION DEL CLIENTE ADEMAS DE FILTRAR LA INFORMACION POR EL ESTADO
cita.get('/cita/cards/trabajosPorRealizar/:numero_id_trabajador', (req,res)=>{
    const { numero_id_trabajador } = req.params;
    mysqlConnection.query('SELECT * FROM cita WHERE numero_id_trabajador = ? AND estado_cita = "Activa" ',[numero_id_trabajador], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});




module.exports = cita;