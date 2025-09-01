import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
});

class APIClient<TResponse, TRequest = TResponse> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    async getAll() {
        return instance.get<TResponse[]>(this.endpoint).then(res => res.data);
    }

    async post(data: TRequest) {
        return instance.post(this.endpoint, data).then(res => res.data);
    }
}

export default APIClient;