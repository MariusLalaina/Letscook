import {Http} from './http'

export class UserService extends Http{
    static async createUser(data){
        try {
            const res = await this.post("user", data)
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async updateUser(data){
        try {
            const res = await this.put("user", data)
            return res.data;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async getUser(data){
        try {
            const res = await this.get("user")
            return res;
        } catch (error) {
            console.log(error.message)
        }
    }
    static async login(data){
        try {
            const res = await this.post("user/login" ,data)
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async postAvatar(data){
        try {
            const res = await this.post("image" ,data)
            return res;
        } catch (error){
            console.log(error.message);
        }
    }
}