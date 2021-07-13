declare module 'customTypes' {
    export type User = {
        email: string;
        username: string;
        // password: string;
    };

    export type Boot = {
        name: string;
        image: string;
        notes: string;
        wears: number;
        cc: number;
    };

    
}