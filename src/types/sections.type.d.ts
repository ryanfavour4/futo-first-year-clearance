export interface IDepartments {
    id: number;
    name: string;
}

export interface IFaculties {
    id: number;
    departments: Departments[];
    name: string;
}
