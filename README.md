#### You can run **RabbitMQ** in **Docker**

# First you have to 4 terminal run:

## Terminal 1: run producer.js

### > node producer.js "nodejs.rasoolabdi.rabbitmq" "sendMessage"

### > node producer.js "rabbitmq.rasoolabdi" "sendMessage"

### > node producer.js "rasool.rabbitmq.abdi" "sendMessage"

## Terminal 2: run consumer.js

### > node consumer.js "\*.rasoolabdi.\*"

## Terminal 3: run consumer.js

### > node consumer.js "\#.rasoolabdi"

## Terminal 4: run consumer.js

### > node consumer.js "rasool.\*.abdi"
