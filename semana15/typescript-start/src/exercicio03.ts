// 03.a)

type postsData = {
  autor: string,
  texto: string
}

const posts: postsData[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

function buscarPostsPorAutor(posts: postsData[], autorInformado?: string) {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}
console.log(buscarPostsPorAutor(posts, "Lord Voldemort"))