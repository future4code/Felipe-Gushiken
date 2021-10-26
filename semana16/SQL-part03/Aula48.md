### EXERCÍCIO 01
a)
FOREIGN KEY é a query que faz a relação entre duas tabelas.

b)
```
INSERT INTO Rating
VALUES
	("1", "Nunca assisti a esse filme", 3, 1),
    ("2", "Entre os 5 filmes de Rurouni Kenshin, esse é o melhor", 10, 2),
    ("3", "Nunca assisti a esse filme", 0, 3),
    ("4", "Filme legal", 6, 4),
    ("5", "Filme sensacional da trilogia do Nolan", 10, 5),
    ("6", "Melhor filme da Marvel até agora", 10, 6);
```

c)
O MySQL acusa erro pois não há referência na tabela de filmes.

d)
```
ALTER TABLE Movies DROP COLUMN avaliacao;
```

e)
Não é possível apagar um filme que possui avaliação pois ele está atrelado à tabela de ratings.

### EXERCÍCIO 02
a)

b)
```
INSERT INTO MovieCast(movies_id, actor_id)
VALUES
	(2, "005"),
    (2, "003"),
    (2, "1633651974493"),
    (5, "1633622926586"),
    (5, "1633623468365"),
    (6, "1633624056285");
```

c)
O MySQL acusa erro pois não existe filme correspondente ao id informado.

d)
Não foi possível apagar o ator pois ele está relacionado em outra tabela.

### EXERCÍCIO 03
a)
O operador ON faz a relação entre os campos das tabelas.

b)
```
SELECT nome, Movies.id, rate
FROM Movies
JOIN Rating
ON Movies.id = Rating.id;
```



