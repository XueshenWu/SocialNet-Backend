import { Injectable } from '@nestjs/common';
import {connect, Connection, Channel } from 'amqplib';
import CreateReviewPostDto from "../dto/createReviewPostDto";



@Injectable()
export class MqService {

    connection!: Connection;
    channel!: Channel;
    
    
    private readonly rabbit_url: string = process.env['RABBIT_URL']??"amqp://guest:guest@localhost:5672"
    private readonly review_queue: string = process.env['RABBIT_REVIEW_QUEUE']??"review";

    available: boolean = false;

    constructor() {
       
       
    }


    async init(){

        this.connection = await connect(this.rabbit_url)
        this.channel = await this.connection.createChannel();
        await this.channel.assertQueue(this.review_queue);
        this.available = true;

        // .then(async (conn) => {
        //     this.connection = conn;
        //     this.channel = await this.connection.createChannel();
        //     await this.channel.assertQueue(this.review_queue);
        //     this.available = true;
        // })
    }


   

    send_review(createReviewPostDto:CreateReviewPostDto):boolean {
        if(!this.available){
            console.log("MQ not available")
            return false;
        }else{
           
            const res = this.channel.sendToQueue(this.review_queue, Buffer.from(JSON.stringify(createReviewPostDto)), {
                persistent: true
            });
            return res;
        }
    }


    async close(){
        if(this.available){
            this.available = false;
            await this.channel.close();
            await this.connection.close();
           
        }
    }


}
