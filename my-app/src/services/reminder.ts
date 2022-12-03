import axios from "axios";
import { Reminder } from "../components/ReminderList";

class ReminderClass {
    http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    })

    async getData() {
        const response = await this.http.get<Reminder[]>('/todos')
        return response.data
    }

    async addData(title: string) {
        const response = await this.http.post<Reminder[]>('/todos', { title })
        return response.data
    }

    async removeData(id: number) {
        const response = await this.http.delete('/todos' + id)
        return response.data
    }
}


export default new ReminderClass()