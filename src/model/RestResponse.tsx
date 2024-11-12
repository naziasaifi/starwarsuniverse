export default interface RestResponse<T>{
    count: number;
    next: string;
    previous: string;
    results: T[];
}