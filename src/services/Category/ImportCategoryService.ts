import fs from "fs";
import {parse} from "csv-parse";
import { ICategoriesRepository, ICreateCategoryDTO } from "../../Interfaces/Category/ICreateCategory";
import { inject, injectable } from "tsyringe";

@injectable()
class ImportCategoryService{
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository:ICategoriesRepository){}

    loadCategories(file: Express.Multer.File):Promise<ICreateCategoryDTO[]>{
        return new Promise((resolve, reject)=>{
            const stream = fs.createReadStream(file.path);
            const categories: ICreateCategoryDTO[]=[]; 

            const parseFile = parse();
            stream.pipe(parseFile);
            parseFile.on("data", async(line)=>{
                const[name, description]=line;
                categories.push({
                    name,
                    description
                });
            })
            .on("end", ()=>{
                fs.promises.unlink(file.path);
                resolve(categories);
            })
            .on("error", (error)=>{
                reject(error)
            });
        });
    }

    async execute(file: Express.Multer.File):Promise<void>{
        const categories = await this.loadCategories(file)

        categories.map(async (category) =>{
            const {name, description} = category;
            const existCategory= await this.categoriesRepository.findByName(name)
            if(!existCategory){
                await this.categoriesRepository.create({
                    name,
                    description
                });
            }
        });
    }
}

export default ImportCategoryService;