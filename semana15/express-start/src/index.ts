import express, { Request, Response } from "express"
import cors from 'cors'
import { countries } from "./data"
import { country } from "./types";

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
})

// ENDPOINT 01 - BUSCAR TODOS OS PAÍSES
app.get('/countries', (req: Request, res: Response) => {
  const resultAllCountries = countries.map(country => ({
    id: country.id,
    name: country.name
  }))
  res.status(200).send(resultAllCountries)
})

// ENDPOINT 3 - BUSCAR COM FILTRO
app.get('/countries/search', (req: Request, res: Response) => {
  let resultFiltered: country[] = countries
  try {
    if (!req.query.name && !req.query.capital && !req.query.continent) {
      throw new Error("Not found")
    }
    if (req.query.name) {
      resultFiltered = resultFiltered.filter((country =>
        country.name.includes(req.query.name as string)
      ))
    }
    if (req.query.capital) {
      resultFiltered = resultFiltered.filter((country =>
        country.capital.includes(req.query.capital as string)
      ))
    }
    if (req.query.continent) {
      resultFiltered = resultFiltered.filter((country =>
        country.continent.includes(req.query.continent as string)
      ))
    }
    res.status(200).send(resultFiltered)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}
)

// ENDPOINT 02 - BUSCAR PAÍS ATRAVÉS DO ID
app.get('/countries/:id', (req: Request, res: Response) => {
  if (!Number(req.params.id)) {
    res.status(404).send("Country not found")
  } else {
    const resultCountriesById = countries.find(country => (
      country.id === Number(req.params.id)
    ))
    res.status(200).send(resultCountriesById)
  }
})

// ENDPOINT 04 - EDITAR PAÍS
app.post('/countries/:id', (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const countryId: number = countries.findIndex((country) => country.id === Number(req.params.id)
    )
    if (countryId === -1) {
      errorCode = 404
      throw new Error()
    }
  
    if (!req.body.name && !req.body.capital) {
      throw new Error("Invalid parameters")
    }
  
    if (req.body.name) {
      countries[countryId].name = req.body.name
    }
    if (req.query.capital) {
      countries[countryId].capital = req.body.capital
    }
    res.status(200).send("Sucessfully updated")
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// ENDPOINT 05 - DELETAR UM PAÍS
app.delete('/countries/:id', (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization
    if (!token || token.length < 10) {
      res.statusCode = 401
      throw new Error("User not found")
    }
    if (!Number(req.params.id)) {
      res.statusCode = 400
      throw new Error("Invalid id")
    }
    const index = countries.findIndex((country) => {
      return country.id === Number(req.params.id)
    })

    if (index === -1) {
      res.statusCode = 404
      throw new Error("Country not found")
    }

    countries.splice(index, 1)
    res.status(204).end
  } catch (error: any) {
    res.send(error.message)
  }
})