``` mermaid
classDiagram
    class Stock{
        -id: string
        -name: string
        -value: Money
    }

    class Money {
        -value: number
        +getValue(): int
        +add(): value
    }

    class Client {
        name: string
        document: string
    }

    class Position{
        stock: Stock[]
        quantity: number
    }

    class Wallet {
        client: Client
        positions: Position[]
    }

    Position --o Wallet
    Client --o Wallet
    Stock --o Position
    Money --o Stock
```
