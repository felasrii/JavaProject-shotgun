import { SnackbarService } from "./../../../services/shared/snackbar.service";
import { ShotgunService } from "./../../../services/shotgun/shotgun.service";
import { Shotgun } from "./../../../model/shotgun.model";
import { Component, OnInit, OnChanges } from "@angular/core";
import { FamilleService } from "../../../services/famille/famille.service";
import { Famille } from "../../../model/famille.model";
import { PartieCommunesService } from "../../../services/partie-communes/partie-communes.service";
import { PartieCommune } from "../../../model/partie-commune.model";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { ResidencesService } from 'src/app/services/residences/residences.service';


@Component({
  selector: "app-create-shotgun-dialog",
  templateUrl: "./create-shotgun-dialog.component.html",
  styleUrls: ["./create-shotgun-dialog.component.css"]
})
export class CreateShotgunDialogComponent implements OnInit{
  public famillesList: Array<Famille> = [];
  public shotgunsList: Array<Shotgun> = [];
  public selectedDate: Date;
  public alreadyshotgun: Boolean;
  public partiesCommunesList: Array<PartieCommune> = [];
  public shotgunForm: FormGroup;

  dateFilter = (date: Date) => {
    const todayDate: Date = new Date();
    todayDate.setHours(0, 0, 0, 0);
    return date >= todayDate;
  }

  constructor(
    private familleService: FamilleService,
    private partiesCommunesService: PartieCommunesService,
    private snackBarService: SnackbarService,
    private shotgunService: ShotgunService,
    private residenceService :ResidencesService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateShotgunDialogComponent>
  ) {
    this.familleService.famillesList.subscribe((values: Array<Famille>) => {
      this.famillesList = values;
      
    });

    this.partiesCommunesService.partiesCommunes.subscribe(
      (values: Array<PartieCommune>) => {
        this.partiesCommunesList = values;
      }
    );
    this.shotgunService.shotgunsList.subscribe((values:Array<Shotgun>)=>
      {
        this.shotgunsList=values
      })

    this.shotgunForm = this.formBuilder.group({
      name: ["", Validators.required],
      shotgunDate: ["", Validators.required],
      shotgunFamille: ["", Validators.required],
      shotgunPlace: ["", Validators.required],
      shotgunComments: [""]
    });
  }

  ngOnInit() {

    this.familleService.getFamilles();

    this.shotgunService.getAll({}).subscribe(s=>console.log(s))
    
    
    this.partiesCommunesService.getPartiesCommunes();
    this.checkIfAlreadyShotguns();
    
  }

  getShotgunPlaceName(this: any, value: number) {
    const partieCommune = this.partiesCommunesList.filter(
      (v: { id: number }) => v.id === value
    );
    if (partieCommune.length) {
      return `${partieCommune[0].name} (${partieCommune[0].localisation.name})`;
    }

    return "";
  }

  getFamilleName(this: any, value: number) {
    const famille = this.famillesList.filter(
      (v: { id: number }) => v.id === value
    );
    if (famille.length) {
      return `${famille[0].nomFamille}`;
    }

    return "";
  }
  createShotgun(shotgunToCreate: Shotgun) {
    this.shotgunService.createShotgun(shotgunToCreate).subscribe(
      (shotgun: Shotgun) => {
        this.snackBarService.displayNotification("Shotgun créé!");
        this.dialogRef.close();
        
  
      },
      err => {
        this.snackBarService.displayNotification(
          "Une erreur est survenue à la création du shotgun."
        );
        this.dialogRef.close();
        
      }
    );
  }

  checkIfAlreadyShotguns(){

    const partieCommuneAlreadyShotgun=this.shotgunsList.filter(shotg=>{
  
  
 
})
}

setSelectedDate(startDate) 
{
  let placesAlreadyShotguns=[];
  let newPrtiesCommunesPlaces=[];
      this.selectedDate = startDate._d;
      this.shotgunService.shotgunsList.subscribe((values: Array<Shotgun>) => {
        values.map(shotgun=>{
          const comparaisonDate=this.compareDate(this.selectedDate,shotgun.shotgunDate)
          if (comparaisonDate==0){
            placesAlreadyShotguns.push(shotgun)

          }
          
        })
        placesAlreadyShotguns.map(lieu=>{
         this.partiesCommunesList.map(item=>{
          if(lieu.shotgunPlace.id===item.id && lieu.shotgunPlace.localisation.id===item.localisation.id)
          this.partiesCommunesList=this.partiesCommunesList.filter(e=>e.id!==lieu.shotgunPlace.id);
         })
          
           })
        placesAlreadyShotguns.map(shotgun=>{
            this.famillesList.map(item=>{
             if(shotgun.shotgunFamille.id===item.id)
             this.famillesList=this.famillesList.filter(e=>e.id!==shotgun.shotgunFamille.id);
            })
             
              })

           
          })}

public  compareDate(date1: Date, date2: Date): number
{
  let d1 = new Date(date1); let d2 = new Date(date2);
  // Check if the dates are equal
  let same = d1.getTime() === d2.getTime();
  if (same) return 0;
  // Check if the first is greater than second
  if (d1 > d2) return 1;
  // Check if the first is less than second
  if (d1 < d2) return -1;
}
}