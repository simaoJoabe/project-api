export class Client{
      constructor(private _name: string,private _document: string){

    }
    public get document(): string {
        return this._document;
    }
    
    public get name(): string {
        return this._name;
    }
    
}
