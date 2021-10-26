### EXERCÍCIO 01
a) 
Isso deletaria a coluna que contém os salários.

b)
Isso trocaria o nome da coluna 'GENDER' para 'SEX'.

c)
Isso aumentaria o limite de caracteres de 6 para 255.

d)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### EXERCÍCIO 02
a)
```
UPDATE Actor
SET name = "Emi Takei", birth_date = "1993-12-25"
WHERE id ="003";
```

b)
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

c)
```
UPDATE Actor
SET name = "Tao Tsuchiya", salary = 500000, birth_date = "1995-02-03", gender = "female", hometown = "Tokyo", favorite_ice_cream_flavor = "Vanilla"
WHERE id = "005";
```

d)
```
UPDATE Actor
SET name = "Takeru Sato"
WHERE id = "009";
```
O MySQL não acusa erro, porém ele não atualiza pois o id informado não existe.

### EXERCÍCIO 03
a)
```
DELETE FROM Actor WHERE name = "Glória Pires";
```

b)
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

### EXERCÍCIO 04
a)
```
SELECT MAX(salary) FROM Actor;
```

b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d)
```
SELECT SUM(salary) FROM Actor;
```

### EXERCÍCIO 05
a)
A função somou a quantidade de pessoas de cada gênero e as separou.

b)
```
SELECT  id, name FROM Actor ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor ORDER BY salary;
```

d)
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

e)
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

### EXERCÍCIO 06
a)
```
ALTER TABLE Movies
ADD COLUMN playing_limit_date DATE;
```
```
UPDATE Movies
SET playing_limit_date = "2006-01-26"
WHERE id = "001";
```
```
UPDATE Movies
SET playing_limit_date = "2013-01-07"
WHERE id = "002";
```
```
UPDATE Movies
SET playing_limit_date = "2017-11-22"
WHERE id = "003";
```
```
UPDATE Movies
SET playing_limit_date = "2003-06-23"
WHERE id = "004";
```

b)
```
ALTER TABLE Movies
CHANGE avaliacao avaliacao FLOAT;
```

c)
```
UPDATE Movies
SET playing_limit_date = CURDATE()
WHERE id = "003";
```

d)
```
DELETE FROM Movies WHERE id = "002";
```
```
UPDATE Movies
SET sinopse = "Kenshin vive tranquilamente com Kaoru e seus amigos, mas é chamado pelo Governo do Imperador Meiji
WHERE id = "002";
```
O MySQL não acusa nenhum erro porém a sinopse não foi alterada pois o filme do id informado não existe mais.

### EXERCÍCIO 07
a)
```
SELECT COUNT(*) FROM Movies WHERE avaliacao >= 7.5;
```

b)
```
SELECT AVG(avaliacao) FROM Movies;
```

c)
```
SELECT COUNT(*) FROM Movies WHERE playing_limit_date >= CURDATE();
```

d)
```
SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();
```

e)
```
SELECT MAX(avaliacao) FROM Movies;
```

f)
```
SELECT MIN(avaliacao) FROM Movies;
```

### EXERCÍCIO 08
a)
```
SELECT * FROM Movies
ORDER BY nome;
```

b)
```
SELECT * FROM Movies
ORDER BY nome
LIMIT 5;
```

c)
```
SELECT * FROM Movies
ORDER BY playing_limit_date DESC
LIMIT 3;
```

d)
```
SELECT * FROM Movies
ORDER BY avaliacao DESC
LIMIT 3;
```



