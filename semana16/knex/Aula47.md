### EXERCÍCIO 01
a)
A resposta que temos quando usamos o RAW é um array com alguns arrays dentro dele. Para filtrar, precisamos especificar o índice no send.

b)
```
app.get("/actors/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = ${id}
    `)

    res.status(201).send(result[0])

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})
```

c)
```
app.get("/actors/gender/", async (req: Request, res: Response) => {
  try {
    const result = await connection.raw(`
      SELECT COUNT(*) AS Count, gender FROM Actor GROUP BY gender;
    `)

    res.status(200).send(result[0])

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})
```

### EXERCÍCIO 02
a)
```
app.put("/actors/:id", async (req, res) => {
  try {
    await connection("Actor")
    .update({
      salary: req.body.salary
    })
    .where({
      id: req.params.id
    })

    res.send("Updated")

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})
```

b)
```
app.delete("/actors/:id", async (req, res) => {
  try {
    await connection("Actor")
    .delete()
    .where({
      id: req.params.id
    })

    res.send("Deleted")

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})
```

c)
```
app.get("/actors/gender/:gender", async (req, res) => {
  try {
    const result = await connection("Actor")
    .avg(
      "salary"
    )
    .where({
      gender: req.params.gender
    }) 

    res.send(result)

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})
```

### EXERCÍCIO 03
a)
```
app.get("/actors/:id", async (req: Request, res: Response) => {
  try {
    const result = await connection("Actor")
    .where({
      id: req.params.id
    })

    res.status(200).send(result)

  } catch (err: any) {
    res.status(400).send({
      message: err.message
    });
  }
});
```

b)
```
app.get("/actor", async (req, res) => {
  try {
    const gender = req.query.gender
    const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
    `)

    res.status(200).send(result[0])

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.Message)
  }
})
```

### EXERCÍCIO 04
a)
```
app.put("/actor", async (req, res) => {
  try {
    const updateActor = await connection("Actor")
    .update({
      salary: req.body.salary,
    })
    .where({
      id: req.body.id
    })

    res.send("Updated")

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})
```

b)
```
app.delete("/actor/:id", async (req, res) => {
  try {
    const deleteActor = await connection("Actor")
    .delete()
    .where({
      id: req.params.id
    })

    res.send("Deleted")

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.sqlMessage || error.message)
  }
})
```



