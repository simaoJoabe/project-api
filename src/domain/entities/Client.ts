export class Client{
    public get document(): string {
        return this._document;
    }
    public set document(value: string) {
        this._document = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    constructor(private _name: string,private _document: string){

    }
}