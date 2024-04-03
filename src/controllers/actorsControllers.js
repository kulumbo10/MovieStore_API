import { actor } from "../models/Actor.js";

class ActorController {
    //get
    static async listarActor (req, res) {
        try {
            const listaractor = await movie.find({}); 
            res.status(200) .json(listaractor);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisicao`});
        };
        
    };
    //get   method pra pegar apenas um livro
    static async listarActorPorId (req, res) {
        try {
            const id = req.params.id;
            const findActor = await movie.findById(id); 
            res.status(200) .json(findActor);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisicao do filme`});
        };
        
    };

    //Post      para cadastrar 
    static async saveActor (req, res) {
        try {
          const newActor = await movie.create(req.body);
          res.status(201).json({ message: "criado com sucesso", actor: newActor  });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        };
      };

       //Put    to update method
    static async atualizarActor (req, res) {
        try {
            const id = req.params.id;
             await movie.findByIdAndUpdate(id, req.body);   //check this in the lib of mongoose
            res.status (200).json({ message: "updated sucessfully" });

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualizacao do filme`})
        };

    };

    //delete    para exluir
    static async deletarActor (req, res) {
            try {
                const id = req.params.id;
                await movie.findByIdAndDelete(id);
                res.status(200).json({message: "movie deleted sucessfully"});
            } catch (erro) {
                res.status(500).json({ message: `${erro.message} - Erro ao deletar video`});
            };
    };

};

export default ActorController;