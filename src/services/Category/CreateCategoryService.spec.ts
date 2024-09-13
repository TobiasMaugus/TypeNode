import "reflect-metadata";
import CreateCategoryService from "./CreateCategoryService";
import CategoriesRepositoryInMemory from "../../tests/in-memory/CategoriesRepositoryIM";
import AppError from "../../errors/AppError";

let createCategoryService: CreateCategoryService;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe ("Create Category", ()=>{

    beforeEach(()=>{
        categoriesRepositoryInMemory=new CategoriesRepositoryInMemory;
        createCategoryService = new CreateCategoryService( categoriesRepositoryInMemory);
    })

    it("should be able to create a category", async ()=>{
        const category={
            name: "Category Test",
            description: "Category Description Test"
        }
        
        await createCategoryService.execute({
           name: category.name,
            description: category.description
        });

        const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);

        expect(categoryCreated).toHaveProperty("id");
    });

    it("should not be able to create a category with the same name", async ()=>{
        expect(async ()=>{
            const category={
                name: "Category Test",
                description: "Category Description Test"
            }
            
            await createCategoryService.execute({
               name: category.name,
                description: category.description
            });
    
            await createCategoryService.execute({
                name: category.name,
                 description: category.description
             });
        }).rejects.toBeInstanceOf(AppError);

       
    });
})