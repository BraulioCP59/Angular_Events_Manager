import { Injectable } from "@angular/core";

declare let toastr: any

@Injectable()
export class ToastrService
{
    //here we are wrapping the four toastr methods we want to serve into our app
    success(message:string, title?:string)
    {
        toastr.success(message, title);
    }

    info(message:string, title?:string)
    {
        toastr.info(message, title);
    }

    warning(message:string, title?:string)
    {
        toastr.warning(message, title);
    }
    
    error(message:string, title?:string)
    {
        toastr.error(message, title);
    }
}