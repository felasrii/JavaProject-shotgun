import { ResidencesService } from "../../../services/residences/residences.service";
import { Component, OnInit } from "@angular/core";
import { Residence } from "../../../model/residence.model";
import { ShotgunService } from 'src/app/services/shotgun/shotgun.service';
import { Shotgun } from 'src/app/model/shotgun.model';
import { PartieCommune } from 'src/app/model/partie-commune.model';

@Component({
  selector: "app-list-residences",
  templateUrl: "./list-residences.component.html",
  styleUrls: ["./list-residences.component.css"]
})
export class ListResidencesComponent implements OnInit {
  public residencesShotguns: Array<Residence>;
  public shotguns:Array<Shotgun>;
  public isResidence:Boolean

  constructor(
    private residencesService: ResidencesService,
    private shotgunService:ShotgunService
    ) {
    this.residencesService.residencesList.subscribe(
      (values: Array<Residence>) => {
        this.residencesShotguns=values
      }
    );
    this.shotgunService.getAll({}).subscribe(
      (values: Array<Shotgun>) => {
      this.shotguns=values
   
      });
  }
 
  ngOnInit() {
    
    
    this.residencesService.getResidencesShotguns();
      
        


       
    
   
  
    
    
      
         
   
    
      
    
  
       
        
       


       
    
 
  

 
}

    
  
 
      


     
}