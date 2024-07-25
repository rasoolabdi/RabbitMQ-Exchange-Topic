const amqp = require("amqplib");
const exchangeName = "topicMessage";
const logTypes = process.argv.slice(2);

async function reciveData () {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel =  await connection.createChannel();
    await channel.assertExchange(exchangeName , "topic");
    const assertQueue = await channel.assertQueue("" , {exclusive: true});
    for (const pattern of logTypes) {
        channel.bindQueue(assertQueue.queue , exchangeName , pattern);
    }
    channel.consume(assertQueue.queue , (msg) => {
        console.log(msg.content.toString());
    })
};

reciveData();
