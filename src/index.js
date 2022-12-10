const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.RegisterData = async (event, context) => {
  // obtener datos del evento
  const data = JSON.parse(event.body);


  const id = context.awsRequestId

  // preparar el nuevo elemento
  const item = {
    id,
    data,
  };

  // registrar el nuevo elemento en DynamoDB
  const params = {
    TableName: 'MyTable',
    Item: item,
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 201,
      body: JSON.stringify(item),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};

exports.GetAllData = async (event, context) => {
  //Creo la instancia de DynamoDB
  const dynamo = new AWS.DynamoDB();
  //Especifico la tabla sobre la que se leeran los datos
  const table = 'MyTable';

  try {
    //Realizo la consulta completa de los datos con el metodo SCAN
    const result = await dynamo.scan({ TableName: "MyTable" }).promise();

    return {
      statusCode: 201,
      body: JSON.stringify(result),
    }

  }
  catch (err) {
    return{
      statusCode: 500,
      body: JSON.stringify(err),
    }
  }

}

exports.GetData = async(event, context)=>{
  const dynamo = AWS.DynamoDB();
  const table = 'MyTable';
  const name = event.pathParameters.id;

  const params = {
    Key: {
      id: id,
    },
    TableName: table
  };

  try{
    const result = await dynamo.get(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    }
  }
  catch(err){
    return {
      statusCode:500,
      body: JSON.stringify(err),
    }
  }

}
