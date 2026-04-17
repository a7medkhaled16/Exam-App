import { Observable } from "rxjs";
import { confirmReq, forgetpass, registerReq, registerRes, resetpassReq, VerifyOtp, verifyRes } from "../interfaces/authInterface";

export abstract class authApi {
    abstract sendverifiy(data:VerifyOtp):Observable<verifyRes>;
    abstract confirmverifiy(data:confirmReq):Observable<verifyRes>;
    abstract register(data:registerReq):Observable<registerRes>;
    abstract login(data:registerReq):Observable<registerRes>;
    abstract forgetpassword(data:forgetpass):Observable<verifyRes>;
    abstract resetpassword(data:resetpassReq):Observable<verifyRes>;

}