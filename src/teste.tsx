interface CreateUser {
    name: string;
    age: number;
}

function createUser({ name }: CreateUser) {
    return name
}

createUser('Diego Fernandes');