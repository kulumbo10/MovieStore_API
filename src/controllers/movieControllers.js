import movie from "../models/Movie.js";

class MovieController {
    //get
    static async listarMovie (req, res) {
        try {
            const listmovie = await movie.find({}); 
            res.status(200) .json(listmovie);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisicao`});
        };
        
    };
    //get   method pra pegar apenas um livro
    static async listarMoviePorId (req, res) {
        try {
            const id = req.params.id;
            const findedMovie = await movie.findById(id); 
            res.status(200) .json(findedMovie);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisicao do filme`});
        };
        
    };

    //Post      para cadastrar 
    static async saveMovie (req, res) {
        try {
          const newMovie = await movie.create(req.body);
          res.status(201).json({ message: "criado com sucesso", movie: newMovie  });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        };
      };


    /*pra fazer o cadastro Post
    static async registMovie (req, res) {
            try{
                const newMovie = await movie.create(req.body);
                res.status (201).json({ message: "created sucessfully", movie: newMovie });

            } catch (erro) {
                res.status(500).json({ message: `${erro.message} - falha ao cadastrar filme`})
            };
        };
         */

       //Put    to update method
    static async atualizaMovie (req, res) {
        try {
            const id = req.params.id;
             await movie.findByIdAndUpdate(id, req.body);   //check this in the lib of mongoose
            res.status (200).json({ message: "updated sucessfully" });

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualizacao do filme`})
        };

    };

    //delete    para exluir
    static async deletarMovie (req, res) {
            try {
                const id = req.params.id;
                await movie.findByIdAndDelete(id);
                res.status(200).json({message: "movie deleted sucessfully"});
            } catch (erro) {
                res.status(500).json({ message: `${erro.message} - Erro ao deletar video`});
            };
    };

};





export default MovieController;