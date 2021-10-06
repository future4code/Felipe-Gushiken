### EXERÍCIO 01
a) 
VARCHAR(255) significa que será uma variável com até 255 caracteres;
DATE significa que o formato será YYYY-MM-DD.

b)
O comando SHOW DATABASES mostra o banco de dados que estamos usando e o comando SHOW TABLES mostra as tabelas criadas nesse banco de dados.

c)
O comando DESCRIBE nos retorna a tabela com suas informações como campos, tipos e se é nulo ou não.

### EXERÍCIO 02

a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b)
O erro ocorreu pois o id "002" já existe e não é permitido valores duplicados.

c)
O erro ocorreu pois o número de colunas não é o mesmo número de linhas.

d)
O erro ocorreu pois o valor do campo nome não foi inserido.

e)
O erro ocorreu pois o valor do campo birth_date não estava entre aspas.

### EXERCÍCIO 03
a)
```
SELECT * from Actor WHERE gender = "female";
```

b)
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c)
```
SELECT * from Actor WHERE gender = "invalid";
```
Foi retornado uma tabela sem nenhum valor.

d)
```
SELECT id, name, salary from Actor WHERE salary <= 500000;
```

e)
O erro ocorreu pois ao invés de 'name', foi escrito 'nome'.

### EXERCÍCIO 04
a)
A query mostrada como exemplo queria como retorno os dados da tabela Actor cujos campos 'name' começassem com A ou J e que o valor do campo salário fosse maior que 300000.

b)
```
SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

c)
```
SELECT * from Actor WHERE name LIKE "%G%" OR "%g%";
```

d)
```
SELECT * from Actor WHERE name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%" AND salary BETWEEN 35000 AND 900000;
```

### EXERCÍCIO 05
a)
```
CREATE TABLE Movies (
	id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    dataDeLancamento DATE NOT NULL,
    avaliacao FLOAT NOT NULL
);
```

### EXERCÍCIO 06
a)
```
SELECT id, nome, avaliacao from Movies WHERE id = "003";
```

b)
```
SELECT * from Movies WHERE nome = "Doce de Mãe";
```

c)
```
SELECT id, nome, sinopse from Movies WHERE avaliacao >= 7;
```

### EXERCÍCIO 07
a)
```
SELECT * from Movies WHERE nome LIKE "%vida%";
```

b)
```
SELECT * from Movies WHERE nome LIKE "%homem%" OR sinopse LIKE "%homem%";
```

c)
```
SELECT * from Movies WHERE dataDeLancamento <= "2021-10-06";
```

d)
```
SELECT * from Movies WHERE dataDeLancamento <= CURDATE() AND (nome LIKE "%homem%" OR sinopse LIKE "%homem%") AND avaliacao >= 7;
```


