import { Client } from "./Client"
import { Position } from "./Position"
import { Stock } from "./Stock"

export class Wallet{
    constructor(private _client:Client , _position:Position[]){
        

    }
    private _listPosition:Position[] = []

    public get client():Client{
        return this._client
    }
    addPosition(_position:Position){
        this._listPosition.push(_position)
    }
    listOfPosition():readonly Position[]{
        return this._listPosition
    }
    listPriceStock(valueStock:Stock){
        const price = valueStock.value
        const name = valueStock.name
        return `a ação : ${name} , está valendo ${price}`
    }

    
}

