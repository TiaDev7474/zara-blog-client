import {httpClient} from "@/app/_lib/axios";
import {AuthCredentialsType , LoginSchemaType , SignUpSchemaType} from "@/app/auth/_lib/types";

class AuthService {
    private  pathname: String = "/auth"
    public authenticate(credentials: LoginSchemaType) {
        console.log(credentials, "at authenticate services")
        return httpClient.post<AuthCredentialsType>(`${this.pathname}/login`, credentials)
    }
}

export const authService = new AuthService();