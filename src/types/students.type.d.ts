// ?????? ========  GET USER (STUDENT) INTERFACE ============ ??????? //

export interface IStudent {
    id: number;
    date_of_birth: Date;
    sex: string;
    nationality: string;
    place_of_birth: string;
    state_of_origin: string;
    local_government: string;
    permenant_address: string;
    contact_address: string;
    religion: string;
    next_of_kin_name: string;
    next_of_kin_address: string;
    next_of_kin_relationship: string;
    next_of_kin_telephone: string;
    sponsor_name: string;
    sponsor_address: string;
    marital_status: string;
    signature: string;
    ict_cleared: boolean;
    dept_cleared: boolean;
    profile_picture: string;
    student: Student;
    department: Department;
    faculty: Faculty;
}

export interface Department {
    id: number;
    name: string;
}

export interface Faculty {
    id: number;
    name: string;
    departments: number[];
}

export interface Student {
    id: number;
    password: string;
    last_login: Date;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date;
    user_type: string;
    groups: any[];
    user_permissions: any[];
}

// ?????? ========  EDIT USER (STUDENT) INTERFACE =========== ??????? //

export interface IEditStudent {
    student: {
        first_name: string;
        last_name: string;
    };
    date_of_birth: string | Date;
    sex: string;
    nationality: string;
    place_of_birth: string;
    state_of_origin: string;
    local_government: string;
    permenant_address: string;
    contact_address: string;
    religion: string;
    next_of_kin_name: string;
    next_of_kin_address: string;
    next_of_kin_relationship: string;
    next_of_kin_telephone: string;
    sponsor_name: string;
    sponsor_address: string;
    marital_status: string;
    signature?: string | ArrayBuffer | File | null;
    profile_picture?: string | ArrayBuffer | File | null;
    department: number;
    faculty: number;
}

// ???????? =============  END OF INTERFACE =============== ???????? //
