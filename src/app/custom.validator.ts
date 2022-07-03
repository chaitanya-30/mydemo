import { FormControl } from "@angular/forms";
export class customValidators{
    static invalidprojectname( control : FormControl): {[s:string] : boolean}{
        if( control.value==='Test'){
            return{'invalidprojectname':true};
        }
 return {false:false};
    }

}
