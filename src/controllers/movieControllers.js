import movie from "../models/Movie.js";

class MovieController {

    static async listarMovies (req, res) {
        try {
            const listmovies = await movie.find({}); 
            res.status(200) .json(listmovies);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisicao`});
        };
        
    };
    //method pra pegar apenas um livro
    static async listarMoviePorId (req, res) {
        try {
            const id = req.params.id;
            const findedMovie = await movie.findById(id); 
            res.status(200) .json(findedMovie);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisicao do livro`});
        };
        
    };

    //para salvar 
    static async saveMovie (req, res) {
        try {
          const newMovie = await movie.create(req.body);
          res.status(201).json({ message: "criado com sucesso", movie: newMovie  });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        };
      };


    //pra fazer o cadastro
    static async registMovie (req, res) {
        try{
            const newMovie = await movie.create(req.body);
            res.status (201).json({ message: "created sucessfully", movie: newMovie });

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar filme`})
        }
         
        //res.status(200) .json(listmovies);
    };

};





export default MovieController;