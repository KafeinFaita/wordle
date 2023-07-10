class MainController {
    constructor(Model) {
        this.Model = Model;
    }

    async index(req, res) {
        try {
            const data = await this.Model.getAll();
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async create(req, res) {
        try {
            const data = await this.Model.createNew(req.body);

            // throw an error if the username already exists in the database
            if (data.error) {
                throw new Error(data.error);
            }

            res.json(data);
        } catch (error) {
            res.json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const data = await this.Model.delete(req.params.id);
            res.json(data);
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = MainController;