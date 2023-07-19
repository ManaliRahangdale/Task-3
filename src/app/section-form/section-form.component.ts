import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent  implements OnInit{
  sectionObj :FormGroup | any;
  sections : any[] = [];
  // constructor (private sectionServ:sectionService){}
  ngOnInit(): void {
   this.sectionObj = new FormGroup({
    sectionHeader : new FormControl('',Validators.required),
    sectionDetails : new FormControl('',Validators.required)
   })
  }
  addSectionObj(){
    if(this.sectionObj.valid){
      const newSection = {
        header: this.sectionObj.value.sectionHeader,
        details: this.sectionObj.value.sectionDetails
      };
      this.sections.push(newSection);
      this.sectionObj.reset();
      
    }
    }
    
  }
  
  


