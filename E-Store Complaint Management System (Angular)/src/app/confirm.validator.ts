import { FormGroup } from "@angular/forms";

export function ConfirmedValidator(pwd:string,cpwd:string){
  return (formgroup:FormGroup)=>{
    const pass=formgroup.controls[pwd];
    const cpass=formgroup.controls[cpwd];

    if(pass.value!==cpass.value){
      cpass.setErrors({confirmedValidator:true})
    }
    else {
      cpass.setErrors(null);
    }
  }
}
