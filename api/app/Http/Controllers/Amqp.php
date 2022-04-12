<?php

namespace App\Http\Controllers;


use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Exchange\AMQPExchangeType;
use PhpAmqpLib\Message\AMQPMessage;


class Amqp extends Controller
{
    use HasFactory;
   public function RabbitMq(){
     
        $exchange = "z.portal.mt.ex";
     
        $host =  config("amqp.MQ_HOST");
        $user = config("amqp.MQ_USER");
        $pass = config("amqp.MQ_PASS");
        $port = config("amqp.MQ_PORT");
        
        $connection = new AMQPStreamConnection($host , $port, $user, $pass);
        $channel = $connection->channel();

        $messageBody = json_encode(array('msg'=>'Hello This Is my Test msg.'));


        
        $message = new AMQPMessage($messageBody, array('content_type' => 'text/plain', 'delivery_mode' => AMQPMessage::DELIVERY_MODE_PERSISTENT));
        $channel->basic_publish($message, $exchange);

        $channel->close();
        $connection->close();

        return "Model ";
    }
}
