import fs from "fs";
import {parse} from "csv-parse";
import { ICategoriesRepository, ICreateCategoryDTO } from "../../Interfaces/Category/ICreateCategory";

class ImportCategoryService{
    constructor(private categoriesRepository:ICategoriesRepository){}

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
                resolve(categories);
            })
            .on("error", (error)=>{
                reject(error)
            });
        });
    }

    async execute(file: Express.Multer.File):Promise<void>{
        const categories = await this.loadCategories(file)

    }
}

export default ImportCategoryService;