import { convertPropertyBindingBuiltins } from "@angular/compiler/src/compiler_util/expression_converter";
import { Component, EventEmitter, OnInit, Output} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from "../shared";

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
})
export class CreateSessionComponent implements OnInit
{
    @Output() saveNewSession = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()
    newSessionForm!: FormGroup 
    name!: FormControl
    presenter!: FormControl
    duration!: FormControl
    level!: FormControl
    abstract!: FormControl

    ngOnInit()
    {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo','bar','dude'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        })

    }

    //custom validator that takes in array and returns a function
    private restrictedWords(words:string []){
        return (control:FormControl):{[key: string]:any} => {

            if(!words) return {'fail': null}; 
            console.log(control.value);
            var invalidWords = words.map((word) => control.value.includes(word)? word : 'error')
            .filter((word) => word !== 'error')

            return invalidWords && invalidWords.length > 0 ? {'restrictedWords':invalidWords.join(', ')} : {'fail': null};
        }
    }
  
    saveSessionForm(formValues:any)
    {
        
        let session:ISession = {
            id: 0,
            name: formValues.name,
            duration: +formValues.duration,
            level:formValues.level,
            presenter:formValues.presenter,
            abstract:formValues.abstract,
            voters:[],
        }
        console.log(session);
        //emits the session data as a event for the event details parent component to bind to
        this.saveNewSession.emit(session);
    }

    cancel()
    {
        this.cancelAddSession.emit();
    }
}