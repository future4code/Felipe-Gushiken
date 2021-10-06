import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

type user = {
  nome: string,
  cpf: number,
  dataDeNascimento: string,
  saldo: number,
  extrato: movimentacao[]
}

type movimentacao = [
  {
    valor: number,
    data: string,
    descricao: string
  }
]

let users: user[] = [
  {
    nome: "Felipe",
    cpf: 123456789,
    dataDeNascimento: "01/01/1989",
    saldo: 500,
    extrato: []
  },
  {
    nome: "Juca",
    cpf: 987654321,
    dataDeNascimento: "13/05/1991",
    saldo: 100,
    extrato: []
  },
  {
    nome: "Zomo",
    cpf: 147258369,
    dataDeNascimento: "16/09/1994",
    saldo: 50,
    extrato: []
  }
]

//PEGAR AS INFORMAÇÕES INICIAS DAS CONTAS
app.get('/users', (req: Request, res: Response) => {
  res.status(200).send(users)
})

//vERIFICAR O SALDO DA CONTA ATRAVÉS DO NOME E DO CPF
app.get('/users/search', (req: Request, res: Response) => {
  let resultado = users
  try {
    if (!req.query.nome && !Number(req.query.cpf)) {
      throw new Error("Digite o nome e o CPF do titular da conta")
    }
    if (req.query.nome) {
      resultado = users.filter((user: any) =>
        user.nome.includes(req.query.nome)
      )
    }

    if (Number(req.query.cpf)) {
      resultado = users.filter((user: any) =>
        user.cpf === Number((req.query.cpf)))
    }

    res.status(200).send(resultado)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//CRIAR CONTA
app.post('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    // const nome = req.body.nome,
    // const cpf = req.body.cpf,
    // cont dataDeNascimento = req.body.dataDeNascimento,
    // const saldo = req.body.saldo,
    // const extrato = req.body.extrato
    const { nome, cpf, dataDeNascimento, saldo, extrato: [{valor, data, descricao}] } = req.body

    if (!nome || !cpf || !dataDeNascimento || !saldo) {
      errorCode = 422
      throw new Error("Preencha os campos corretamente")
    }

    const newUser: user = {
      nome,
      cpf,
      dataDeNascimento,
      saldo,
      extrato: [{valor, data, descricao}]
    }

    users.push(newUser)

    res.status(201).send("Usuário criado com sucesso")

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})
