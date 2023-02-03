import { Client } from "./Client"
import { Position } from "./Position"

export class Wallet{
    constructor(private _client:Client , position:Position[]){

    }
    private listPosition:Position[] = []

    public get client():Client{
        return this._client
    }
    addPosition(position:Position){
        this.listPosition.push(position)
    }
    listOfPosition():readonly Position[]{
        return this.listPosition
    }
}