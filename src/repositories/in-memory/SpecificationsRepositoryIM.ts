    import Specification from "../../entities/Specification";
    import { ICreateSpecificationDTO, ISpecificationsRepository } from "../../Interfaces/Specification/ICreateSpecification";


    class SpecificationRepositoryInMemory implements ISpecificationsRepository{
        specifications:Specification[]=[]
        async findByName(name: string): Promise<Specification> {
            return this.specifications.find((specification)=>specification.name===name)
        }
        read(): Promise<Specification[]> {
            throw new Error("Method not implemented.");
        }
        async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
            const specification = new Specification();
            Object.assign(specification, {description, name});
            this.specifications.push(specification);
        }
        async findByIds(ids: string[]): Promise<Specification[]> {
            const allSpecifications = this.specifications.filter((specification)=>ids.includes(specification.id))
            return allSpecifications;
        }

    }

    export default SpecificationRepositoryInMemory;