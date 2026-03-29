import { Observable } from "rxjs";
import { confirmReq, registerReq, registerRes, resetpassReq, verifyRes } from "../interfaces/authInterface";

export abstract class authApi {
    abstract sendverifiy(data:{email:'string'}):Observable<verifyRes>;
    abstract confirmverifiy(data:confirmReq):Observable<verifyRes>;
    abstract register(data:registerReq):Observable<registerRes>;
    abstract login(data:registerReq):Observable<registerRes>;
    abstract forgetpassword(data:{username:'string'}):Observable<verifyRes>;
    abstract resetpassword(data:resetpassReq):Observable<verifyRes>;

}